import React from "react";

interface Cliente {
  nome: string;
  email: string;
  dataNascimento: string;
  ranking: number;
  genero: string;
  telefone: string;
}

const ListarClientes: React.FC = () => {
  const clientes: Cliente[] = [
    {
      nome: "João Silva",
      email: "joao.silva@example.com",
      dataNascimento: "1985-03-25",
      ranking: 5,
      genero: "Masculino",
      telefone: "(11) 91234-5678",
    },
    {
      nome: "Maria Oliveira",
      email: "maria.oliveira@example.com",
      dataNascimento: "1990-07-14",
      ranking: 4,
      genero: "Feminino",
      telefone: "(21) 99876-5432",
    },
    {
      nome: "Carlos Pereira",
      email: "carlos.pereira@example.com",
      dataNascimento: "1982-11-02",
      ranking: 3,
      genero: "Masculino",
      telefone: "(31) 98765-4321",
    },
    {
      nome: "Ana Costa",
      email: "ana.costa@example.com",
      dataNascimento: "1995-09-20",
      ranking: 2,
      genero: "Feminino",
      telefone: "(41) 97654-3210",
    },
  ];

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Lista de Clientes</h1>
      <table className="table-responsive table table-hover border rounded">
        <thead>
          <tr className="text-center">
            <th>Nome</th>
            <th>Email</th>
            <th>Data de Nascimento</th>
            <th>Ranking</th>
            <th>Gênero</th>
            <th>Telefone</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map((cliente, index) => (
            <tr key={index} className="text-center">
              <td>{cliente.nome}</td>
              <td>{cliente.email}</td>
              <td>{cliente.dataNascimento}</td>
              <td>{cliente.ranking}</td>
              <td>{cliente.genero}</td>
              <td>{cliente.telefone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListarClientes;
