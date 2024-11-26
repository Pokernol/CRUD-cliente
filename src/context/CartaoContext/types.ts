import { Dispatch, SetStateAction } from 'react';

export type CartaoType = {
  id?: string;
  numero: string;
  nomeImpresso: string;
  cvv: string;
  isPreferencial: boolean;
  bandeira: string;
};

export type CartaoContextType = {
  id: string;
  setId: Dispatch<SetStateAction<string>>;
  numeroCartao: string;
  setNumeroCartao: Dispatch<SetStateAction<string>>;
  nomeImpresso: string;
  setNomeImpresso: Dispatch<SetStateAction<string>>;
  cvv: string;
  setCvv: Dispatch<SetStateAction<string>>;
  isPreferencial: boolean;
  setIsPreferencial: Dispatch<SetStateAction<boolean>>;
  bandeira: string;
  setBandeira: Dispatch<SetStateAction<string>>;
  cartoes: CartaoType[];
  setCartoes: Dispatch<SetStateAction<CartaoType[]>>;
  indexExcluir: number;
  setIndexExcluir: Dispatch<SetStateAction<number>>;
  clearForm: () => void;
  fillForm: (data: CartaoType[]) => void;
  handleSalvarCartao: (data: CartaoType) => void;
  handleExcluirCartao: (indexLista: number) => void;
  handleIsPreferencial: (indexLista: number) => void;
  validarCartao: (data: CartaoType) => boolean;
  validarListaCartoes: () => boolean;
};
