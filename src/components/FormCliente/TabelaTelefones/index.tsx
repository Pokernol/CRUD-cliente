import React from 'react';
import { useTelefoneContext } from '../../../context/TelefoneContext';
import ModalExcluirTelefone from '../ModalExcluirTelefone';

const TabelaTelefones: React.FC = () => {
  const { telefones, setIndexExcluir } = useTelefoneContext();

  const handleExcluir = (index: number) => {
    setIndexExcluir(index);
  };

  return (
    <div className="d-flex justify-content-center">
      {telefones.length <= 0 ? (
        <div className="alert alert-secondary w-75 text-center">
          Nenhum telefone cadastrado
        </div>
      ) : (
        <>
          <table className="table-responsive table table-hover border rounded">
            <thead>
              <tr className="text-center">
                <th>Tipo de Telefone</th>
                <th>DDD</th>
                <th>Numero</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {telefones.map((telefone, index) => (
                <tr key={index} className="text-center">
                  <td>{telefone.tipoTelefone}</td>
                  <td>{telefone.ddd}</td>
                  <td>{telefone.numero}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-danger"
                      data-bs-toggle="modal"
                      data-bs-target="#modalExcluirTelefone"
                      onClick={() => handleExcluir(index)}
                    >
                      Excluir
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <ModalExcluirTelefone />
        </>
      )}
    </div>
  );
};
export default TabelaTelefones;
