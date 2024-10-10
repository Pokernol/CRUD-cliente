import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import {
  CartaoType,
  ClienteType,
  EnderecoType,
  IndentificacaoClienteContextType,
} from './types';

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
  const [enderecoEntrega, setEnderecoEntrega] = useState<EnderecoType>(
    {} as EnderecoType
  );
  const [enderecoCobranca, setEnderecoCobranca] = useState<EnderecoType>(
    {} as EnderecoType
  );
  const [cartao, setCartao] = useState({} as CartaoType);

  const clearForm = useCallback(() => {
    setId('');
    setNome('');
    setDataNascimento('');
    setEmail('');
    setCpf('');
    setGenero('');
    setEnderecoEntrega({} as EnderecoType);
    setEnderecoCobranca({} as EnderecoType);
    setCartao({} as CartaoType);
  }, [
    id,
    nome,
    dataNascimento,
    email,
    cpf,
    genero,
    enderecoEntrega,
    enderecoCobranca,
    cartao,
  ]);

  const fillForm = useCallback(
    (data: ClienteType) => {
      setId(data.id || '');
      setNome(data.nome);
      setDataNascimento(data.dataNascimento);
      setEmail(data.email);
      setCpf(data.cpf);
      setGenero(data.genero);
      setEnderecoEntrega(data.enderecoEntrega);
      setEnderecoCobranca(data.enderecoCobranca);
      setCartao(data.cartao);
    },
    [
      id,
      nome,
      dataNascimento,
      email,
      cpf,
      genero,
      enderecoEntrega,
      enderecoCobranca,
      cartao,
    ]
  );

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
      enderecoEntrega,
      setEnderecoEntrega,
      enderecoCobranca,
      setEnderecoCobranca,
      cartao,
      setCartao,
      clearForm,
      fillForm,
    }),
    [
      id,
      nome,
      dataNascimento,
      email,
      cpf,
      genero,
      enderecoEntrega,
      enderecoCobranca,
      cartao,
      clearForm,
      fillForm,
    ]
  );

  return (
    <IndentificacaoClienteContext.Provider value={values}>
      {children}
    </IndentificacaoClienteContext.Provider>
  );
};
