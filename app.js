const express = require("express");
const sqlite3 = require("sqlite3");
const bodyParser = require("body-parser");
const session = require("express-session");

const PORT = 9000;
let config = { titulo: "", rodape: "", dados: [] };

const app = express();
const db = new sqlite3.Database("user.db");

db.serialize(() => {
  db.run(
    `CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT, 
      username TEXT, 
      password TEXT, 
      email TEXT, 
      celular TEXT, 
      cpf TEXT, 
      rg TEXT)`
  );
});

app.use(express.json());
app.use(
  session({
    secret: "qualquersenha",
    resave: true,
    saveUninitialized: true,
  })
);
app.use("/static", express.static(__dirname + "/static"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

// ROTAS
app.get("/", (req, res) => {
  console.log(`GET /index`);
  config = {
    titulo: "Blog da turma I2HNA - SESI Nova Odessa",
    rodape: "",
  };
  res.render("pages/index", { ...config, req });
});

app.get("/usuarios", (req, res) => {
  const query = "SELECT * FROM users";
  db.all(query, (err, row) => {
    if (err) throw err;
    res.render("partials/usertable", { ...config, dados: row, req });
  });
});

app.get("/cadastro", (req, res) => {
  console.log("GET /cadastro - recebido");
  res.render("pages/cadastro", { titulo: "CADASTRO", req });
});

app.post("/cadastro", (req, res) => {
  console.log("POST /cadastro");
  if (!req.body || Object.keys(req.body).length === 0) {
    console.error("corpo da requisicão vazio.");
    return res
      .status(400)
      .json({ success: false, message: "Nenhum dado recebido." });
  }
  console.log("Corpo da requisição:", JSON.stringify(req.body, null, 2));

  const { username, password, email, celular, cpf, rg } = req.body;

  if (!username || !password || !email) {
    return res.status(400).json({
      success: false,
      message: "Nome Senha e email são obrigatorios.",
    });
  }

  db.get(query, [email, cpf, rg, celular, username], (err, row) => {
    if (err) throw err;
    console.log(`LINHA RETORNADA do SELECT USER: ${JSON.stringify(row)}`);
    if (row) {
      res.redirect("/register_failed");
    } else {
      const insertQuery =
        "INSERT INTO users (username, password, email, celular, cpf, rg) VALUES (?, ?, ?, ?, ?, ?)";
      db.run(
        insertQuery,
        [username, password, email, celular, cpf, rg],
        function (err) {
          if (err) {
            console.error("Erro ao inserir usuário:", err.message);
            return res.status(500).json({
              success: false,
              message: "Erro interno do servidor ao cadastrar usuário.",
            });
          }
          console.log(`Usuário ${username} cadastrado com ID: ${this.lastID}`);
          res.redirect("/login");
        }
      );
    }
  });
});

app.get("/sobre", (req, res) => {
  console.log("GET /sobre");
  res.render("pages/sobre", { titulo: "SOBRE", req });
});

app.get("/logout", (req, res) => {
  console.log("GET /logout");
  req.session.destroy(() => {
    res.redirect("/");
  });
});

app.get("/login", (req, res) => {
  console.log("GET /login");
  res.render("pages/login", { titulo: "LOGIN", req });
});

app.post("/login", (req, res) => {
  console.log("POST /login");
  const { username, password } = req.body;

  const checkUserQuery = "SELECT * FROM users WHERE username = ? OR email = ?";
  db.get(checkUserQuery, [username, username], (err, row) => {
    if (err) {
      console.error("Erro ao consultar o banco:", err.message);
      return res.status(500).json({
        success: false,
        message: "Erro interno do servidor ao verificar usuário.",
      });
    }

    if (!row || row.password !== password) {
      return res.redirect("/invalid_login");
    }

    req.session.loggedin = true;
    req.session.username = username;

    res.redirect("/dashboard");
  });
});

app.get("/dashboard", (req, res) => {
  console.log("GET /dashboard");
  if (req.session.loggedin) {
    db.all("SELECT * FROM users", [], (err, row) => {
      if (err) throw err;
      res.render("pages/dashboard", {
        titulo: "DASHBOARD",
        dados: row,
        req,
      });
    });
  } else {
    console.log("Tentativa de acesso à área restrita");
    res.redirect("/");
  }
});

app.get("/register_failed", (req, res) => {
  console.log("GET /register_failed");
  res.render("pages/fail", {
    ...config,
    req,
    msg: "<a href='/cadastro'>Cadastro inválido</a>",
  });
});

app.get("/invalid_login", (req, res) => {
  console.log("GET /invalid_login");
  res.render("pages/fail", {
    ...config,
    req,
    msg: "Usuário ou senha inválidos!",
  });
});

app.use("*", (req, res) => {
  res.status(404).render("pages/fail", {
    titulo: "ERRO 404",
    req,
    msg: "404 - Página não encontrada",
  });
});

app.listen(PORT, () => {
  console.log(`Servidor sendo executado na porta ${PORT}!`);
});
