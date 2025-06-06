// Verifica se o JavaScript está sendo carregado corretamente
console.log("JS CONECTADO!");

// Captura os elementos do formulário e campos do HTML
const formulario = document.getElementById("cadastroForm");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const senha = document.getElementById("senha");
const confirmarSenha = document.getElementById("confirmarSenha");
const celular = document.getElementById("celular");
const cpf = document.getElementById("cpf");
const rg = document.getElementById("rg");
const msgErrorElements = document.getElementsByClassName("msgError");

/* ------ Função que exibe a mensagem de erro na tela ------ */
const createDisplayMsgError = (mensagem) => {
  if (msgErrorElements.length > 0) {
    msgErrorElements[0].textContent = mensagem;
    msgErrorElements[0].style.display = mensagem ? "block" : "none";
  }
};

/* ------ Verifica se o nome contém apenas letras e espaços ------ */
const checkNome = () => {
  const nomeRegex = /^[A-Za-zÀ-ÿ\s'-]+$/; // aceita letras, espaços, acentos e hífens
  return nomeRegex.test(nome.value.trim());
};

/* ------ Verifica se o email tem domínio válido ------ */
const checkEmail = (email) => {
  const partesEmail = email.split("@");

  if (
    (partesEmail.length === 2 &&
      partesEmail[1].toLowerCase() === "gmail.com") ||
    (partesEmail.length === 2 &&
      partesEmail[1].toLowerCase() === "outlook.com") ||
    (partesEmail.length === 2 && partesEmail[1].toLowerCase() === "hotmail.com")
  ) {
    return true;
  } else {
    return false;
  }
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Verifica formato básico de email
if (!emailRegex.test(emailTrimmed)) {
  return false; // Formato inválido
}

return (
  partesEmail.length === 2 &&
  ["gmail.com", "outlook.com", "hotmail.com"].includes(
    partesEmail[1].toLowerCase()
  )
);

/* ------ Verifica se as senhas digitadas são iguais ------ */
function checkPasswordMatch() {
  return senha.value === confirmarSenha.value;
}

/* ------ Aplica máscara e validação ao número de celular ------ */
function maskPhoneNumber(event) {
  let celular = event.target.value;

  // Verifica se há letras no número
  if (/[A-Za-zÀ-ÿ]/.test(celular)) {
    createDisplayMsgError("O celular deve conter apenas números!");
  } else {
    createDisplayMsgError("");
  }

  celular = celular.replace(/\D/g, ""); // Remove tudo que não for número

  if (celular.length > 11) celular = celular.substring(0, 11); // Limita a 11 dígitos

  // Adiciona máscara ao número
  if (celular.length > 2) {
    celular = `(${celular.substring(0, 2)}) ${celular.substring(2)}`;
  } else if (celular.length > 0) {
    celular = `(${celular}`;
  }

  if (celular.length > 10) {
    celular = celular.replace(/(\(\d{2}\)) (\d{5})(\d{1,4})/, "$1 $2-$3");
  }

  event.target.value = celular;
}

/* ------ Verifica a força da senha conforme critérios de segurança ------ */
function checkPasswordStrength(senha) {
  if (!/[a-z]/.test(senha))
    return "A senha deve ter pelo menos uma letra minúscula!";
  if (!/[A-Z]/.test(senha))
    return "A senha deve ter pelo menos uma letra maiúscula!";
  if (!/[\W_]/.test(senha))
    return "A senha deve ter pelo menos um caractere especial!";
  if (!/\d/.test(senha)) return "A senha deve ter pelo menos um número!";
  if (senha.length < 8) return "A senha deve ter pelo menos 8 caracteres!";

  return null;
}

/* ------ Função principal que valida e envia os dados ------ */
async function fetchDatas(event) {
  event.preventDefault(); // Impede o envio padrão do formulário
  createDisplayMsgError(""); // Limpa erros anteriores

  // Verificação do nome
  if (!checkNome()) {
    createDisplayMsgError(
      "O nome não pode conter números ou caracteres especiais!"
    );
    nome.focus();
    return;
  }

  // Verificação do e-mail
  if (!checkEmail(partesEmail.value)) {
    createDisplayMsgError(
      "O email não é valido, ou não tem um domínio permitido!"
    );
    emailTrimmed.focus();
    return;
  }

  // Verificação da força da senha
  const senhaError = checkPasswordStrength(senha.value);
  if (senhaError) {
    createDisplayMsgError(senhaError);
    senha.focus();
    return;
  }

  // Verificação de igualdade entre as senhas
  if (!checkPasswordMatch()) {
    createDisplayMsgError("As senhas digitadas não coincidem!");
    confirmarSenha.focus();
    return;
  }

  // Verificação do celular
  const celularLimpo = celular.value.replace(/\D/g, "");
  if (celular.value && (celularLimpo.length < 10 || celularLimpo.length > 11)) {
    createDisplayMsgError("O celular parece inválido!");
    celular.focus();
    return;
  }

  // Dados formatados para envio
  const formData = {
    username: nome.value.trim(),
    email: email.value.trim(),
    password: senha.value,
    celular: celularLimpo,
    cpf: cpf.value.replace(/\D/g, ""),
    rg: rg.value.replace(/\D/g, ""),
  };

  console.log("Dados a serem enviados: ", JSON.stringify(formData, null, 2));

  // Envio dos dados para o servidor
  try {
    const response = await fetch("/cadastro", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    // Verifica se o cadastro foi bem-sucedido
    if (response.ok) {
      const result = await response.json();
      console.log("Sucesso:", result);
      formulario.reset();
      alert("Cadastro realizado com sucesso!" + result.message || "");
      window.location.href = "/login"; // Redireciona para login
    } else {
      // Caso o servidor retorne erro
      const errorData = await response.json().catch(() => ({
        message: "Erro ao processar a resposta do servidor",
      }));
      console.error("Erro do servidor:", response.status, errorData);
      createDisplayMsgError(
        `Erro: ${errorData.message || response.statusText}`
      );
    }
  } catch (error) {
    console.log("Erro ao enviar os dados:", error);
    createDisplayMsgError("Erro de conexão, por favor, tente novamente.");
  }
}

/* ------ Adiciona escutadores de evento nos campos ------ */

// Valida o nome em tempo real
nome.addEventListener("input", () => {
  if (nome.value && !checkNome()) {
    createDisplayMsgError(
      "O nome não pode conter números ou caracteres especiais!"
    );
  } else {
    createDisplayMsgError("");
  }
});

// Valida o e-mail em tempo real
partesEmail.addEventListener("input", () => {
  if (partesEmail.value && !checkEmail(partesEmail.value)) {
    createDisplayMsgError("O e-mail digitado não é válido!");
  } else {
    createDisplayMsgError("");
  }
});

// Valida a força da senha em tempo real
senha.addEventListener("input", () => {
  if (senha.value && checkPasswordStrength(senha.value)) {
    createDisplayMsgError(checkPasswordStrength(senha.value));
  } else {
    createDisplayMsgError("");
  }
});

// Evento de envio do formulário
formulario.addEventListener("submit", fetchDatas);
