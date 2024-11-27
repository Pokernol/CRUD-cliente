import { Dispatch, SetStateAction } from 'react';

export type ListagemContextType = {
  id: string;
  setId: Dispatch<SetStateAction<string>>;
  nome: string;
  setNome: Dispatch<SetStateAction<string>>;
  dataNascimento: string;
  setDataNascimento: Dispatch<SetStateAction<string>>;
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  cpf: string;
  setCpf: Dispatch<SetStateAction<string>>;
  genero: string;
  setGenero: Dispatch<SetStateAction<string>>;
  telefone: string;
  setTelefone: Dispatch<SetStateAction<string>>;
  clearForm: () => void;
};
