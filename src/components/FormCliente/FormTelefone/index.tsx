import React from 'react';
import { useTelefoneContext } from '../../../context/TelefoneContext';
import FormTelefoneFooterButtons from '../FormTelefoneFooterButtons';
import TabelaTelefones from '../TabelaTelefones';
const Telefone: React.FC = () => {
  const { tipoTelefone, setTipoTelefone, ddd, setDdd, numero, setNumero } =
    useTelefoneContext();

  return (
    <div className="card mb-4">
      <div className="card-header">Telefones</div>
      <div className="card-body">
        <div className="row mb-3">
          <div className="col-md-4">
            <label htmlFor={`tipoTelefone`} className="form-label">
              Tipo de Telefone
            </label>
            <select
              id={`tipoTelefone`}
              name="tipoTelefone"
              className="form-select"
              value={tipoTelefone}
              onChange={(e: { target: { value: string } }) =>
                setTipoTelefone(e.target.value)
              }
            >
              <option value="">Selecione</option>
              <option value="celular">Celular</option>
              <option value="fixo">Fixo</option>
            </select>
          </div>
          <div className="col-md-2">
            <label htmlFor={`ddd`} className="form-label">
              DDD
            </label>
            <input
              type="text"
              className="form-control"
              id={`ddd`}
              name="ddd"
              value={ddd}
              onChange={(e: { target: { value: string } }) =>
                setDdd(e.target.value)
              }
            />
          </div>
          <div className="col-md-6">
            <label htmlFor={`numero`} className="form-label">
              Número
            </label>
            <input
              type="text"
              className="form-control"
              id={`numero`}
              name="numero"
              value={numero}
              onChange={(e: { target: { value: string } }) =>
                setNumero(e.target.value)
              }
            />
          </div>
        </div>
        <div className="d-flex justify-content-end gap-3 mb-3">
          <FormTelefoneFooterButtons />
        </div>
        <TabelaTelefones />
      </div>
    </div>
  );
};

export default Telefone;
