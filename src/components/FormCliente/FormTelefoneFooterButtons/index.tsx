import { useCallback, useMemo } from 'react';
import { useTelefoneContext } from '../../../context/TelefoneContext';

const FormTelefoneFooterButtons: React.FC = () => {
  const {
    tipoTelefone,
    ddd,
    numero,
    clearForm: TelefoneClearForm,
    handleSalvarTelefone,
  } = useTelefoneContext();

  const objectToSave = useMemo(
    () => ({
      tipoTelefone,
      ddd,
      numero,
    }),
    [tipoTelefone, ddd, numero]
  );

  const handleClick = useCallback(() => {
    handleSalvarTelefone(objectToSave);
    TelefoneClearForm();
  }, [handleSalvarTelefone, TelefoneClearForm, objectToSave]);

  return (
    <div className="d-flex justify-content-end gap-3">
      <button
        type="button"
        className="btn btn-secondary ml-2"
        onClick={TelefoneClearForm}
      >
        Limpar Formulário
      </button>
      <button type="button" onClick={handleClick} className="btn btn-primary">
        Cadastrar
      </button>
    </div>
  );
};
export default FormTelefoneFooterButtons;
