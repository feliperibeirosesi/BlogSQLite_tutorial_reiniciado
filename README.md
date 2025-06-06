# Explicação do projeto

> Aplicação base para uso com nodejs.
> _Utilizado no curso Técnico de Desenvolvimento de Sistemas - SESI "chalil zabani" CE 436 - Nova Odessa - SP_

---

## Instalação do projeto

1- Instalar o [Nodejs](https://nodejs.org/en/download) de acordo com o sistema operacional.

2- Clonar o repositório com [Git](https://www.notion.so/Anota-es-do-Senai-f35c51c354d542a49738fb58edc55bd1#1e53661cdaa180a09c73f5fd2a979b4d) ou qualquer outro aplicativo de versionamento.

3- Instalar os módulos utilizados pelo aplicativo (`npm install`)

5- Executar o aplicativo: node `app.js`

6- Executar o browser e abrir a url [http://localhost:9000](http://localhost:9000) com `node` ou `nodemon`

7- Testar o aplicativo

## Pontos que podem ser melhorados no FrontEnd:

- Home/index.ejs:
  ° Ao acessar o site, nos deparamos com duas imagens, o que acaba deixando o layout ruim, nos recomendamos que uma das imagens fosse retirada.
  ° Dentro do VSCode há varias linhas de códigos comentadas que poderiam ser retiradas. Sendo elas as linhas: 7 a 16, 30 a 119 e a linha 5 que é comentada em ejs.

- Sobre/sobre.ejs:
  ° Quando você acessa a página Sobre, poderia haver uma mensagem falando e explicando o que é a empresa e o que ela faz.
  ° Por alguma razão as nuvens, presentes nas outras páginas desaparecem só na página Sobre.
  ° Poderia ter comentários explicando o que cada tag faz.

- Cadastro/cadastro.ejs:
  ° As nuvens poderiam ter um layout melhor, um exemplo é juntando elas ou trocando por imagens com uma qualidade melhor.
  ° Ter mascara nos inputs: Celular, CPF e RG.

- Register_failed:
  ° Quando acessado a página, dá pra ver um design bem simples, onde poderia haver um layout melhor.
  ° Poderia haver um botão de voltar para a página Cadastro, quando o usuário tiver errado alguma informação quando for se cadastrar.
  ° Nessa página há um console.log que retorna undefinded.

- Login/login.ejs:
  ° Algo interresante que pode ser melhorado são as nuvens, como na página Cadastro, ela tambem poder ter um layout melhor.
  ° A primeira section some, isso tem que ser concertado.
  ° Tambem na primeira section, há letras que tambem mudam, é nescessario arrumar.

- Dashboard/dashboard.ejs:
  ° O layout poderia ser responsivo, pois a tabela acaba saindo da tela, principalmente se tiver muitos usuários logados ou um nome muito extenso.
  ° Na primeira section, possui um lado que tem border radius e outra não possui, pode ser arrumado.
  ° A senha é exposta para todos verem, é preciso arrumar para que apenas os administrador consigam ver.
  ° As nuvens acabam sumindo dessa página, elas podem ser colocadas novamente.
  ° Falta comentários explicando o que cada tab faz.

- Erro 404/fail.ejs:
  ° Quando o erro é executado, nos deparamos com duas imagens, como na página Home, o layout pode ser melhorado.
  ° Tambem pode ser melhorado as nuvens, trocando por imagens com melhor qualidade.
  ° Poderia haver uma mensagem explicando sobre o que é a página e porque o usuário foi parar nela.

## Pontos a serem melhorados no BackEnd:

- Home/index.ejs:
  ° Deveria haver comentários explicando o que cada tag faz.
  ° Quando entrar na página Home aparece uma mensagem: "Blog da turma I2HNA - SESI Nova Odessa", isso poderia ser alterado para: "Blog do Marcio Denadai - SESI Nova Odessa" pois o dono é ele.

- Cadastro/cadastro.ejs:
  ° Colocar um limite de caracteres na senha para não ficar extenso.
  ° Ter mascara nos inputs: Celular, CPF e RG.
  ° Falta comentários explicando o que cada tag faz.

- Login/login.ejs:
  ° Colocar um certo limite na senha para não ficar extensa.
  ° Ter um certo limite de caracteres no input Nome, pois assim não ira prejudicar o dashboard.
  ° Tags sem comentários explicando o que cada uma faz.

- Dashboard/dashboard.ejs:
  ° Tags sem comentários explicando o que cada uma faz.

- Erro 404/fail.ejs:
  ° Novamente falta comentários explicando as tags.
  ° Existem duas páginas que aparentam ser destinadas ao erro 404, que são: "fail.ejs" e a "404.ejs", porém a que está sendo usada é a fail, isso pode ser corrigido para não causar conflitos.

- Páginas dentro da pasta views/partials:
  ° Novamente falta comentários sobre as tags.
  ° Dentro do arquivo "head.ejs" na linha 9 e 10, pode ser retirada.
  ° Dentro do arquivo "usertable.ejs" as linhas 14, 15 e 26 tambem podem ser retiradas.

Dentro do código existem muitos arquivos que existem sem propósito, seria bom removelos, sendo eles:
° Pasta "Exercicios".
° Pasta/Arquivos "scripts/validaCadastro.ejs" eles estão dentro da pasta static.
° O arquivo "404.ejs", se encontra dentro da pasta views/pages.
° O arquivo "login2.ejs", se encontra dentro da pasta views/pages.
° Arquivo "helloworld.ejs" se encontra dentro da raiz do projeto.
° O arquivo "rotas.ejs", ele se encontra dentro da raiz do projeto.

Algumas alterações no arquivo "app.js":
° Remover as linhas de comentários:

- 11 a 16
- 76 a 78 e 80
- 89 a 91
  ° Decidimos manter algumas linhas por explicarem o que cada tag faz ou mostrando como fazer o código, um exemplo é a linha 119.

Outras melhorias são para melhorar o desempenho do site:
° Quando efetuado o login poderia haver uma opção para criar uma empresa ou entrar em uma, assim limitando quem pode ser Administrador e que será usuário padrão, assim somente os ADMS podem ver as senhas dos integrantes.
° Ao logar, o nome da pessoa acaba virando um botão no canto superior direito, isso poderia ser retirado caso não tenha uma utilidade.
° Outra alteração interessante seria a criação de uma página de post, já que o é intuito do Blog, onde os usuários poderiam fazer post, postar imagens e afins, enquanto os ADMS monitoram e permitem o que pode ser postado e o que mão pode.

Sobre a página de post:
Um dos integrantes do grupo deu a ideia de colocar na página de post do Blog:
° Um botão de fixar imagem.
° Mostrar os usuários presentes.
° Poder comentar nos posta.
° Ter uma função para os ADMS terem controle sobre os posts.
° Ter uma verificação de linguagem inapropriada, onde pderia ser usado uma IA para verificar.

Sobre a página do usuáro:
° A página poderia ter um local para colocar uma foto de perfil.
° Poderianhaver uma área para ver os próprios posts.
° Uma área de tarefas para cada funcionário
° Ter um campo de mensagens para caso o usuário queira conversar com outro usuário.

## Ambiente de execução e teste

**_Windows 10 Education 22H2_**

- XAMPP - v3.3.0 (Apache + MySQL)
- Nodejs - v16.16.0

**_Linux Ubuntu 20.04.6 LTS_**

- MariaDB - v10.3
- Nodejs - v18.17.1

---

### Autores:

**Felipe José** **Felipe Ribeiro** **Sarah Emanuelly** **Thayna**

_Escola SESI "chalil zabani" CE 436 - Nova Odessa - SP_
