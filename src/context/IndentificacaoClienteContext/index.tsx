import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import { toast } from 'react-toastify';
import { ClienteType, IndentificacaoClienteContextType } from './types';

const IndentificacaoClienteContext = createContext(
  {} as IndentificacaoClienteContextType
);

export const useIndentificacaoClienteContext = () =>
  useContext(IndentificacaoClienteContext);

export const IndentificacaoClienteProvider: React.FC<{
  children: ReactNode;
}> = ({ children }) => {
  const [id, setId] = useState<string>('');
  const [nome, setNome] = useState<string>('');
  const [dataNascimento, setDataNascimento] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [cpf, setCpf] = useState<string>('');
  const [genero, setGenero] = useState<string>('');

  const clearForm = useCallback(() => {
    setId('');
    setNome('');
    setDataNascimento('');
    setEmail('');
    setCpf('');
    setGenero('');
  }, [id, nome, dataNascimento, email, cpf, genero]);

  const fillForm = useCallback(
    (data: ClienteType) => {
      setId(data.id || '');
      setNome(data.nome);
      setDataNascimento(data.dataNascimento);
      setEmail(data.email);
      setCpf(data.cpf);
      setGenero(data.genero);
    },
    [id, nome, dataNascimento, email, cpf, genero]
  );

  const validarIndentificacaoCliente = () => {
    if (!nome || !dataNascimento || !email || !cpf || !genero) {
      toast.error(
        'Para cadastro deve se ter todos os campos obrigatórios de dados pessoais preenchidos!'
      );
      return true;
    }
    return false;
  };

  const values = useMemo(
    () => ({
      id,
      setId,
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
      clearForm,
      fillForm,
      validarIndentificacaoCliente,
    }),
    [id, nome, dataNascimento, email, cpf, genero]
  );

  return (
    <IndentificacaoClienteContext.Provider value={values}>
      {children}
    </IndentificacaoClienteContext.Provider>
  );
};
