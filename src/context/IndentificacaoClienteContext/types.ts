import { Dispatch, SetStateAction } from 'react';
import { TelefoneType } from '../types';

export type EnderecoType = {
  cep: string;
  tipoLogradouro: string;
  logradouro: string;
  numero: string;
  complemento: string;
  bairro: string;
  cidade: string;
  estado: string;
  pais: string;
};

export type CartaoType = {
  numero: string;
  nomeImpresso: string;
  cvv: string;
  isPreferencial: boolean;
  bandeira: string;
};

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
  enderecoEntrega: EnderecoType;
  setEnderecoEntrega: Dispatch<SetStateAction<EnderecoType>>;
  enderecoCobranca: EnderecoType;
  setEnderecoCobranca: Dispatch<SetStateAction<EnderecoType>>;
  cartao: CartaoType;
  setCartao: Dispatch<SetStateAction<CartaoType>>;
  clearForm: () => void;
  fillForm: (data: ClienteType) => void;
};
