# CRUD de Clientes 📥

Este projeto é uma aplicação web para o cadastro de clientes, permitindo a entrada de dados pessoais, informações de contato, endereços e dados de cartão de crédito. A aplicação foi desenvolvida utilizando React e TypeScript.

## Tecnologias Utilizadas ⚙️

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
- **CSS**: Para estilização da aplicação.

## Funcionalidades 📋

- Cadastro de dados pessoais (nome, data de nascimento, email, CPF, gênero).
- Adição de múltiplos números de telefone.
- Cadastro de endereços de entrega e cobrança.
- Informações do cartão de crédito, incluindo opção de cartão preferencial.

## Estrutura do Projeto 🗂️

```plaintext
cadastro-cliente/
├── public/
│   ├── index.html
├── src/
│   ├── components/
│   │   ├── CadastroCliente.tsx
│   ├── types/
│   │   ├── index.ts
│   ├── App.tsx
│   ├── index.tsx
├── styles/
│   ├── style.css
├── package.json
```

### Como Rodar o Projeto Frontend 🚀

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/cadastro-cliente.git
cd cadastro-cliente
```

2. Instale as dependências:

```bash
npm install
```

ou

```bash
yarn install
```

3. Inicie a aplicação:

```bash
npm run dev
```

ou

```bash
yarn dev
```

4. Acesse http://localhost:3000 no seu navegador.

### Como Contribuir 🤝

1. Faça um fork do repositório.

2. Crie uma nova branch para suas modificações:

```bash
git checkout -b minha-nova-funcionalidade
```

3. Faça commit das suas alterações:

```bash
git commit -m 'Adicionando uma nova funcionalidade'
```

4. Envie suas alterações:

```bash
git push origin minha-nova-funcionalidade
```

5. Abra um Pull Request.

### Licença 📝

Este projeto está licenciado sob a MIT License.
