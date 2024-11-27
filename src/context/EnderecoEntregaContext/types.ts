import { Dispatch, SetStateAction } from 'react';

export type paisType = { nome: string; sigla: string };

export type EnderecoType = {
  id?: string;
  tipoLogradouro: string;
  logradouro: string;
  numero: string;
  complemento: string;
  bairro: string;
  cidade: string;
  estado: string;
  cep: string;
  pais: paisType;
  observacao?: string;
  copiarEnderecoEntrega?: boolean;
};

export type EnderecoEntregaContextType = {
  id: string;
  setId: Dispatch<SetStateAction<string>>;
  tipoLogradouro: string;
  setTipoLogradouro: Dispatch<SetStateAction<string>>;
  logradouro: string;
  setLogradouro: Dispatch<SetStateAction<string>>;
  numero: string;
  setNumero: Dispatch<SetStateAction<string>>;
  complemento: string;
  setComplemento: Dispatch<SetStateAction<string>>;
  bairro: string;
  setBairro: Dispatch<SetStateAction<string>>;
  cidade: string;
  setCidade: Dispatch<SetStateAction<string>>;
  estado: string;
  setEstado: Dispatch<SetStateAction<string>>;
  cep: string;
  setCep: Dispatch<SetStateAction<string>>;
  pais: paisType;
  setPais: Dispatch<SetStateAction<paisType>>;
  observacao: string;
  setObservacao: Dispatch<SetStateAction<string>>;
  clearForm: () => void;
  fillForm: (data: EnderecoType) => void;
  validateEndereco: (data: EnderecoType) => boolean;
};
