import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import { ListagemContextType } from './types';

const ListagemContext = createContext({} as ListagemContextType);

export const useListagemContext = () => useContext(ListagemContext);

export const ListagemProvider: React.FC<{
  children: ReactNode;
}> = ({ children }) => {
  const [id, setId] = useState<string>('');
  const [nome, setNome] = useState<string>('');
  const [dataNascimento, setDataNascimento] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [cpf, setCpf] = useState<string>('');
  const [genero, setGenero] = useState<string>('');
  const [telefone, setTelefone] = useState<string>('');

  const clearForm = useCallback(() => {
    setId('');
    setNome('');
    setDataNascimento('');
    setEmail('');
    setCpf('');
    setGenero('');
    setTelefone('');
  }, [id, nome, dataNascimento, email, cpf, genero, telefone]);

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
      telefone,
      setTelefone,
      clearForm,
    }),
    [id, nome, dataNascimento, email, cpf, genero, telefone]
  );

  return (
    <ListagemContext.Provider value={values}>
      {children}
    </ListagemContext.Provider>
  );
};
