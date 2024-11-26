import React from 'react';
import { useCartaoContext } from '../../../context/CartaoContext';
import ModalExcluirCartao from '../ModalExcluirCartao';

const TabelaCartoes: React.FC = () => {
  const { cartoes, handleIsPreferencial, setIndexExcluir } = useCartaoContext();

  const handleExcluir = (index: number) => {
    setIndexExcluir(index);
  };

  return (
    <div className="d-flex justify-content-center">
      {cartoes.length <= 0 ? (
        <div className="alert alert-secondary w-75 text-center">
          Nenhum Cartão cadastrado
        </div>
      ) : (
        <>
          <table className="table-responsive table table-hover border rounded">
            <thead>
              <tr className="text-center">
                <th>Bandeira</th>
                <th>Nome Impresso</th>
                <th>Número Cartão</th>
                <th>CVV</th>
                <th>Preferencial</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {cartoes.map((cartao, index) => (
                <tr key={index} className="text-center">
                  <td>{cartao.bandeira}</td>
                  <td>{cartao.nomeImpresso}</td>
                  <td>{cartao.numero}</td>
                  <td>{cartao.cvv}</td>
                  <td>
                    <div className="form-check form-switch d-flex justify-content-center">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="isPreferencial"
                        checked={cartao.isPreferencial}
                        onChange={() => {
                          handleIsPreferencial(index);
                        }}
                        disabled={cartao.isPreferencial}
                      />
                    </div>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-danger"
                      data-bs-toggle="modal"
                      data-bs-target="#modalExcluirCartao"
                      onClick={() => handleExcluir(index)}
                      disabled={cartao.isPreferencial}
                    >
                      Excluir
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <ModalExcluirCartao />
        </>
      )}
    </div>
  );
};
export default TabelaCartoes;
