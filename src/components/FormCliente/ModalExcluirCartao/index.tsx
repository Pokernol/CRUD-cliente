import React from 'react';
import { useCartaoContext } from '../../../context/CartaoContext';

const ModalExcluirCartao: React.FC = () => {
  const { handleExcluirCartao, indexExcluir } = useCartaoContext();
  const handleExcluir = () => {
    handleExcluirCartao(indexExcluir);
  };
  return (
    <div
      className="modal"
      id="modalExcluirCartao"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Excluir Cartao</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <p>Você tem certeza que deseja excluir este cartao?</p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cancelar
            </button>
            <button
              type="button"
              className="btn btn-danger"
              data-bs-dismiss="modal"
              onClick={handleExcluir}
            >
              Excluir
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ModalExcluirCartao;
