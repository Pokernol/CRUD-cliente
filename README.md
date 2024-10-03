## Descrição do Projeto
### Sistema de Gerenciamento de Clientes
Este projeto é um sistema de gerenciamento de clientes desenvolvido em Java usando o Spring Framework. O objetivo é fornecer uma solução robusta para o armazenamento e gerenciamento de informações de clientes, incluindo dados pessoais, endereços, cartões e números de telefone.

### Funcionalidades
- Cadastro de Clientes: Permite o cadastro de novos clientes com informações como nome, data de nascimento, e-mail, CPF e gênero.
- Gerenciamento de Endereços: Cada cliente pode ter múltiplos endereços associados, possibilitando a gestão de endereços residenciais e de cobrança.
- Gerenciamento de Cartões: Suporte para a inclusão e gerenciamento de cartões de pagamento associados a cada cliente.
- Gerenciamento de Telefones: Possibilita a adição de múltiplos números de telefone para cada cliente.
- Validação de Dados: Implementação de validações para garantir a integridade dos dados durante o cadastro e atualização das informações.

### Tecnologias Utilizadas
- Java: Linguagem de programação principal.
- Spring Boot: Framework para construção de aplicações Java de forma rápida e fácil.
- Spring Data JPA: Para interação com o banco de dados usando JPA (Java Persistence API).
- H2 Database: Banco de dados em memória para desenvolvimento e testes.
- REST API: Exposição de funcionalidades do sistema através de uma API RESTful.

### Estrutura do Projeto
O projeto é estruturado em diferentes pacotes, seguindo o padrão MVC (Model-View-Controller):

- model: Contém as classes de entidade representando os dados (e.g., Cliente, Endereco, Cartao, Telefone).
- repository: Interfaces para acesso aos dados das entidades.
- service: Lógica de negócios do sistema.
- controller: Controladores para manipulação das requisições HTTP.

### Configuração do Ambiente
Para iniciar o projeto, você pode clonar este repositório e utilizar o Spring Boot para executar a aplicação. A configuração do banco de dados pode ser ajustada no arquivo application.properties.

### Como Executar
1. Certifique-se de ter o Java e o Maven instalados.
2. Clone o repositório.
3. Navegue até o diretório do projeto e execute:
```bash
mvn spring-boot:run
```
4. Acesse a aplicação em http://localhost:8080.

### Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.