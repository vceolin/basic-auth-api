# Basic Auth API

Uma API de autenticação básica construída com Node.js, Express.js, Knex.js, e SQLite3.

Este projeto implementa uma API de autenticação simples com recursos de registro e login de usuários. Ele usa bcrypt para armazenar senhas com segurança e gera tokens de autenticação usando JSON Web Tokens (JWT).

## Configuração

Certifique-se de ter o Node.js instalado em seu sistema.

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/basic-auth-api.git
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Configure o arquivo `config.js` com sua chave secreta e detalhes do banco de dados.

4. Execute as migrações do banco de dados para criar as tabelas necessárias:

   ```bash
   npm run migrate
   ```

5. Inicie o servidor:

   ```bash
   npm start
   ```

A API estará acessível em `http://localhost:3000`.

## Rotas

### Registro de Usuário

- **URL**: `/api/auth/register`
- **Método**: `POST`
- **Dados**: JSON contendo `username` e `password`.

### Login de Usuário

- **URL**: `/api/auth/login`
- **Método**: `POST`
- **Dados**: JSON contendo `username` e `password`.
- **Retorno**: Token JWT válido.

### Rota Protegida

- **URL**: `/api/protected-route`
- **Método**: `GET`
- **Autenticação**: Token JWT válido necessário.

## Exemplo de Uso

Para acessar o front-end, em seu navegador abra:

```
http://localhost:3000
```

Para se registrar como um novo usuário:

```bash
curl -X POST -H "Content-Type: application/json" -d '{"username": "seu-usuario", "password": "sua-senha"}' http://localhost:3000/api/auth/register
```

Para fazer login e receber um token JWT:

```bash
curl -X POST -H "Content-Type: application/json" -d '{"username": "seu-usuario", "password": "sua-senha"}' http://localhost:3000/api/auth/login
```

Para acessar uma rota protegida, inclua o token JWT no cabeçalho da solicitação:

```bash
curl -H "Authorization: Bearer SEU_TOKEN_JWT" http://localhost:3000/protected-route
```

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Made with ❤️ by vceolin
