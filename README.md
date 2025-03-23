# CRUD System: Gestão de Usuários e Produtos

### 🚀 Tecnologias Usadas

[![My Skills](https://skillicons.dev/icons?i=react,tailwind,vite,nodejs,express,mongodb,prisma)](https://skillicons.dev)


### 🔗 Sobre o projeto

Sistema web completo para a gestão de produtos e usuários, com funcionalidades de CRUD (Create, Read, Update, Delete) e gráficos interativos. O projeto integra tanto o front-end quanto o back-end, permitindo uma comunicação fluida entre o servidor e a interface do usuário. O principal objetivo foi praticar a criação de rotas de API e requisições para exibir dados em um layout dinâmico.


### 📍 Funcionalidades

- Página Home: Exibição de gráficos dinâmicos e interativos, permitindo visualizações rápidas e eficazes de dados.
- Página de Usuários / Produtos: Gerenciamento completo e manipulação dos dados (CRUD) com uma interface limpa e funcional.


### 🌐 Rotas da API
  🔒 Usuários
    <li>`GET /api/users` → Retorna a lista de usuários</li>
    <li>`POST /api/users` → Cria um novo usuário</li>
    <li>`PUT /api/users/{id}` → Atualiza as informações de um usuário específico</li>
    <li>`DELETE /api/users/{id}` Deleta um usuário específico</li>

  🔒 Produtos
    <li>`GET /api/products` → Retorna a lista de produtos</li>
    <li>`POST /api/products` → Cria um novo produto</li>
    <li>`PUT /api/products/{id}` → Atualiza as informações de um produto específico</li>
    <li>`DELETE /api/products/{id}` Deleta um produto específico</li>


### 📂 Como Rodar o Projeto

🔹 Clonando o Repositório
   ```sh
   git clone https://github.com/lucasherrerods/crud-system
   ```
🔹 Instale as dependências do back-end e depois as do front-end
   ```sh
   cd backend
   npm install

   cd frontend
   npm install
   ```
🔹 Configurando as variáveis de ambiente</br>
   - Crie um arquivo `.env` na raiz do projeto e adicione a seguinte variável:
   ```sh
   DATABASE_URL="sua_string_de_conexao"
   ```
🔹 Executando o servidor
   ```sh
   cd backend/src
   node server.js
   ```
🔹 Rodando o frontend
   ```sh
   cd frontend
   npm run dev
   ```