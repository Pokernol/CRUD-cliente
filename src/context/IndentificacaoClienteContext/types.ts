import { Dispatch, SetStateAction } from 'react';
import { CartaoType } from '../CartaoContext/types';
import { EnderecoType } from '../EnderecoEntregaContext/types';
import { TelefoneType } from '../TelefoneContext/types';

export type ClienteType = {
  id?: string;
  nome: string;
  dataNascimento: string;
  email: string;
  cpf: string;
  genero: string;
  telefones: TelefoneType[];
  enderecoEntrega: EnderecoType;
  enderecoCobranca: EnderecoType;
  cartao: CartaoType;
};

export type IndentificacaoClienteContextType = {
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
  clearForm: () => void;
  fillForm: (data: ClienteType) => void;
  validarIndentificacaoCliente: () => boolean;
};
