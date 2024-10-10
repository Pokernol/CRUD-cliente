import React, { useCallback } from 'react';
import { useTelefoneContext } from '../../../context/TelefoneContext';

const ModalExcluirTelefone: React.FC = () => {
  const { handleExcluirTelefone, indexExcluir } = useTelefoneContext();
  const handleExcluir = useCallback(() => {
    handleExcluirTelefone(indexExcluir);
  }, [handleExcluirTelefone, indexExcluir]);
  return (
    <div
      className="modal"
      id="modalExcluirTelefone"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Excluir Telefone</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <p>Você tem certeza que deseja excluir este telefone?</p>
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
export default ModalExcluirTelefone;
