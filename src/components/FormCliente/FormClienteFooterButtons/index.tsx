import { useCallback } from 'react';
import { toast } from 'react-toastify';
import { useCartaoContext } from '../../../context/CartaoContext';
import { useEnderecoCobrancaContext } from '../../../context/EnderecoCobrancaContext';
import { useEnderecoEntregaContext } from '../../../context/EnderecoEntregaContext';
import { useIndentificacaoClienteContext } from '../../../context/IndentificacaoClienteContext';
import { useTelefoneContext } from '../../../context/TelefoneContext';
import { useCadastrarCliente } from '../hooks/useCadastrarCliente';

const FormClienteFooterButtons = () => {
  const {
    clearForm: IndentificacaoClienteClearForm,
    validarIndentificacaoCliente,
  } = useIndentificacaoClienteContext();
  const { clearForm: EnderecoEntregaClearForm, validateEndereco } =
    useEnderecoEntregaContext();
  const { clearForm: EnderecoCobrancaClearForm, validateEnderecoCobranca } =
    useEnderecoCobrancaContext();
  const { clearForm: TelefoneClearForm, validarListaTelefones } =
    useTelefoneContext();
  const { clearForm: CartaoClearForm, validarListaCartoes } =
    useCartaoContext();

  const validarCampos = () => {
    let isValid = true;
    if (validarIndentificacaoCliente()) isValid = false;
    console.log('isValid', isValid);

    if (validateEndereco()) isValid = false;
    console.log('isValid', isValid);

    if (validateEnderecoCobranca()) isValid = false;
    console.log('isValid', isValid);

    if (validarListaTelefones()) isValid = false;
    console.log('isValid', isValid);

    if (validarListaCartoes()) isValid = false;
    console.log('isValid', isValid);
    return isValid;
  };

  const mutationCliente = useCadastrarCliente();

  const handleSubmitForm = useCallback(() => {
    mutationCliente.mutate(undefined, {
      onSuccess() {
        toast.success('Cliente cadastrado com sucesso');
      },
    });
  }, [mutationCliente]);

  const limparForm = () => {
    IndentificacaoClienteClearForm();
    EnderecoEntregaClearForm();
    EnderecoCobrancaClearForm();
    TelefoneClearForm();
    CartaoClearForm();
  };

  const handleClick = () => {
    if (validarCampos()) handleSubmitForm();
  };

  return (
    <div className="d-flex justify-content-end gap-3 my-3">
      <button
        type="button"
        className="btn btn-secondary ml-2"
        onClick={limparForm}
      >
        Limpar Formulário
      </button>
      <button type="button" className="btn btn-primary" onClick={handleClick}>
        Cadastrar
      </button>
    </div>
  );
};

export default FormClienteFooterButtons;
