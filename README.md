# Explicação do projeto  
> Aplicação base para uso com Node.js.  
> _Utilizado no curso Técnico de Desenvolvimento de Sistemas - SESI "Chalil Zabani" CE 436 - Nova Odessa - SP_  

---

## Instalação do projeto

1. Instalar o [Node.js](https://nodejs.org/en/download) de acordo com o sistema operacional.
2. Clonar o repositório com [Git](https://git-scm.com/downloads) ou qualquer outro aplicativo de versionamento.
3. Ter um editor de código de sua preferência como o [VSCode](https://code.visualstudio.com/) ou outro.
4. Instalar os módulos utilizados pelo aplicativo (`npm install`)
5. Executar o aplicativo: `node app.js`
6. Abrir o navegador e acessar [http://localhost:9000](http://localhost:9000)
7. Testar o aplicativo

---

## A fazer (FrontEnd)

### Página Home (`index.ejs`)
- [ ] Remover uma das imagens duplicadas para melhorar o layout.
- [ ] Melhorar o design das nuvens (unificar ou usar imagens melhores).
- [ ] Alterar o texto "Blog da turma I2HNA - SESI Nova Odessa" para "Blog do Marcio Denadai - SESI Nova Odessa".

### Página Sobre (`sobre.ejs`)
- [ ] Adicionar uma mensagem explicando sobre o que é o site.
- [ ] As nuvens desaparecem nessa página; reexibir.

### Página Cadastro (`cadastro.ejs`)
- [ ] Melhorar o design das nuvens.
- [ ] Adicionar máscara nos inputs: Celular, CPF e RG.
- [ ] Limitar o número de caracteres no campo Nome.

### Página Register Failed (`register_failed.ejs`)
- [ ] Melhorar o design visual da página.
- [ ] Adicionar botão para voltar ao cadastro.
- [ ] Remover `console.log` que retorna `undefined`.

### Página Login (`login.ejs`)
- [ ] Melhorar o layout das nuvens.
- [ ] Corrigir desaparecimento da imagem e mudança de fonte na primeira section.
- [ ] Limitar caracteres nos campos Nome e Senha.

### Página Dashboard (`dashboard.ejs`)
- [ ] Tornar layout responsivo (principalmente tabela).
- [ ] Ajustar `border-radius` desigual na primeira section.
- [ ] Esconder senhas de usuários (visíveis apenas para admins).
- [ ] Reexibir as nuvens.

### Página Erro 404 (`fail.ejs`)
- [ ] Remover uma das imagens duplicadas.
- [ ] Melhorar o design das nuvens.
- [ ] Exibir mensagem de erro clara para o usuário.
- [ ] Unificar uso da página de erro (`fail.ejs` está ativa, mas há também `404.ejs`).

---

## A fazer (BackEnd)

- [ ] Adicionar comentários explicando o que cada tag faz em todos os arquivos `.ejs`.
- [ ] Remover código comentado desnecessário:
  - `index.ejs`: linhas 5, 7–16 e 30–119.
  - `app.js`: linhas 11–16, 76–78, 80, 89–91.
  - `partials/head.ejs`: remover comentários nas linhas 9 e 10.
  - `partials/usertable.ejs`: remover comentários nas linhas 14, 15 e 26.
- [ ] Corrigir `console.log` retornando `undefined` na página `register_failed`.
- [ ] Limitar tamanho das senhas.
- [ ] Remover arquivos não utilizados:
  - Pasta `Exercicios`
  - `scripts/validaCadastro.ejs`
  - `views/pages/login2.ejs`
  - `views/pages/404.ejs`
  - `hellowoeld.ejs` na raiz
  - `rotas.ejs` na raiz
- [ ] Corrigir uso duplicado de páginas de erro (`404.ejs` vs `fail.ejs`).

---

## Melhorias sugeridas

- [ ] Adicionar fluxo de criação/entrada em empresas no login, definindo quem é admin e usuários comuns.
- [ ] Permitir que apenas admins vejam senhas e removam usuários.
- [ ] Botão com nome do usuário no topo poderia redirecionar para a página de perfil.
- [ ] Criar página de postagens no blog, com:
  - Fixar imagens (função do admin)
  - Lista de usuários
  - Sistema de comentários
  - Moderação de posts por admins
  - Verificação de linguagem inapropriada com IA

### Página de usuário:
- [ ] Adicionar campo para foto de perfil
- [ ] Área para ver seus próprios posts
- [ ] Área de tarefas individuais
- [ ] Campo de mensagens internas (ex: falar com chefe)

---

## Ambiente de execução e teste

**Windows 10 Education 22H2**  
- XAMPP - v3.3.0 (Apache + MySQL)  
- Node.js - v16.16.0  

**Linux Ubuntu 20.04.6 LTS**  
- MariaDB - v10.3  
- Node.js - v18.17.1  

---

### Autores:
**Felipe José**, **Felipe Ribeiro**, **Sarah Emanuelly**, **Thayna**  
_Escola SESI "Chalil Zabani" CE 436 - Nova Odessa - SP_
