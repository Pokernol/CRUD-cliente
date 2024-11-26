import React, { useMemo } from 'react';
import InputMask from 'react-input-mask';
import { useTelefoneContext } from '../../../context/TelefoneContext';
import FormTelefoneFooterButtons from '../FormTelefoneFooterButtons';
import TabelaTelefones from '../TabelaTelefones';

const FormTelefone: React.FC = () => {
  const { tipoTelefone, setTipoTelefone, ddd, setDdd, numero, setNumero } =
    useTelefoneContext();

  const handleTipoTelefoneChange = useMemo(() => {
    return tipoTelefone === 'CELULAR' ? '9 9999-9999' : '9999-9999';
  }, [tipoTelefone]);

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
              <option value="CELULAR">Celular</option>
              <option value="TELEFONE">Telefone</option>
            </select>
          </div>
          <div className="col-md-2">
            <label htmlFor={`ddd`} className="form-label">
              DDD
            </label>
            <InputMask
              placeholder="99"
              type="text"
              className="form-control"
              id={`ddd`}
              name="ddd"
              mask="99"
              maskChar={null}
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
            <InputMask
              placeholder={handleTipoTelefoneChange}
              type="text"
              className="form-control"
              id={`numero`}
              name="numero"
              mask={handleTipoTelefoneChange}
              maskChar={null}
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

export default FormTelefone;
