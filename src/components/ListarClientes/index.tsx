import React from 'react';
import { useFetchClientes } from './hocks/useFetchClientes';

interface Cliente {
  nome: string;
  email: string;
  dataNascimento: string;
  ranking: number;
  genero: string;
  telefones: any[];
}

const ListarClientes: React.FC = () => {
  const { data } = useFetchClientes();

  const handleExibirTelefone = (telefone: any) => {
    return telefone.ddd + ' ' + telefone.numero;
  };

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
          {data?.map((cliente: Cliente, index: number) => (
            <tr key={index} className="text-center">
              <td>{cliente.nome}</td>
              <td>{cliente.email}</td>
              <td>{cliente.dataNascimento}</td>
              <td>{cliente.ranking}</td>
              <td>{cliente.genero}</td>
              <td>
                {cliente.telefones.length > 0
                  ? handleExibirTelefone(cliente.telefones[0])
                  : '-'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListarClientes;
