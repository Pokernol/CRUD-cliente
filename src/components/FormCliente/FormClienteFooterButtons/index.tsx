import { useIndentificacaoClienteContext } from '../../../context/IndentificacaoClienteContext';
import { useTelefoneContext } from '../../../context/TelefoneContext';

const FormClienteFooterButtons: React.FC = () => {
  const { clearForm: IndentificacaoClienteClearForm } =
    useIndentificacaoClienteContext();
  const { clearForm: TelefoneClearForm } = useTelefoneContext();

  const limparForm = () => {
    IndentificacaoClienteClearForm();
    TelefoneClearForm();
  };

  return (
    <div className="d-flex justify-content-end gap-3">
      <button
        type="button"
        className="btn btn-secondary ml-2"
        onClick={limparForm}
      >
        Limpar Formulário
      </button>
      <button type="submit" className="btn btn-primary">
        Cadastrar
      </button>
    </div>
  );
};
export default FormClienteFooterButtons;
