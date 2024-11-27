import React from 'react';
import InputMask from 'react-input-mask';
import { useListagemContext } from '../../context/ListagemContext';
import { useFetchClientes } from './hocks/useFetchClientes';

export type telefoneType = { ddd: number; numero: string };

interface Cliente {
  nome: string;
  email: string;
  dataNascimento: string;
  ranking: number;
  genero: string;
  telefones: telefoneType[];
}

const ListarClientes: React.FC = () => {
  const { data } = useFetchClientes();

  const {
    nome,
    setNome,
    email,
    setEmail,
    telefone,
    setTelefone,
    genero,
    setGenero,
    dataNascimento,
    setDataNascimento,
  } = useListagemContext();

  const handleExibirTelefone = (telefone: telefoneType) => {
    return telefone.ddd + ' ' + telefone.numero;
  };

  return (
    <div className="container-fluid mt-4">
      <h1 className="text-center mb-4">Lista de Clientes</h1>
      <div className="d-flex justify-content-center gap-5">
        <div className="col-2 d-flex flex-column gap-3">
          <h4>Filtros</h4>
          <div>
            <label htmlFor="nome" className="form-label">
              Nome
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Filtrar por nome"
            />
          </div>
          <div>
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Filtrar por email"
            />
          </div>
          <div>
            <label htmlFor="telefone" className="form-label">
              Telefone
            </label>
            <InputMask
              mask={'(99) 999999999'}
              value={telefone}
              onChange={(e: { target: { value: string } }) =>
                setTelefone(e.target.value)
              }
              type="text"
              className="form-control"
              placeholder="Filtrar por telefone"
              maskChar=""
            />
          </div>
          <div>
            <label htmlFor="ranking" className="form-label">
              Ranking
            </label>
            <input
              type="number"
              className="form-control"
              placeholder="Filtrar por ranking"
            />
          </div>
          <div>
            <label htmlFor="genero" className="form-label">
              Gênero
            </label>
            <select
              id="genero"
              name="genero"
              className="form-select"
              value={genero}
              onChange={(e: { target: { value: string } }) =>
                setGenero(e.target.value)
              }
            >
              <option value="">Selecione</option>
              <option value="masculino">Masculino</option>
              <option value="feminino">Feminino</option>
              <option value="outros">Outros</option>
            </select>
          </div>
          <div>
            <label htmlFor="dataNascimento" className="form-label">
              Data de Nascimento
            </label>
            <input
              type="date"
              className="form-control"
              id="dataNascimento"
              name="dataNascimento"
              placeholder="Selecione sua data de nascimento"
              value={dataNascimento}
              onChange={(e: { target: { value: string } }) =>
                setDataNascimento(e.target.value)
              }
            />
          </div>
          <button
            className="btn btn-primary mt-2"
            onClick={
              //filtrar()
              () => {}
            }
          >
            Filtrar
          </button>
        </div>
        <div className="col-8">
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
      </div>
    </div>
  );
};

export default ListarClientes;
