import React from 'react';
import { useIndentificacaoClienteContext } from '../../../context/IndentificacaoClienteContext';

const IdentificacaoCliente: React.FC = () => {
  const {
    nome,
    setNome,
    dataNascimento,
    setDataNascimento,
    email,
    setEmail,
    cpf,
    setCpf,
    genero,
    setGenero,
  } = useIndentificacaoClienteContext();

  return (
    <div className="card mb-4">
      <div className="card-header">Dados Pessoais</div>
      <div className="card-body">
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="nome" className="form-label">
              Nome
            </label>
            <input
              type="text"
              className="form-control"
              id="nome"
              name="nome"
              value={nome}
              onChange={(e: { target: { value: string } }) =>
                setNome(e.target.value)
              }
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="dataNascimento" className="form-label">
              Data de Nascimento
            </label>
            <input
              type="date"
              className="form-control"
              id="dataNascimento"
              name="dataNascimento"
              value={dataNascimento}
              onChange={(e: { target: { value: string } }) =>
                setDataNascimento(e.target.value)
              }
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={email}
              onChange={(e: { target: { value: string } }) =>
                setEmail(e.target.value)
              }
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="cpf" className="form-label">
              CPF
            </label>
            <input
              type="text"
              className="form-control"
              id="cpf"
              name="cpf"
              value={cpf}
              onChange={(e: { target: { value: string } }) =>
                setCpf(e.target.value)
              }
            />
          </div>
          <div className="col-md-6 mt-3">
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
              <option value="outro">Outro</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};
export default IdentificacaoCliente;
