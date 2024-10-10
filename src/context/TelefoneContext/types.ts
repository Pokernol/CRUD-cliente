import { Dispatch, SetStateAction } from 'react';

export type TelefoneType = {
  id?: string;
  tipoTelefone: string;
  ddd: string;
  numero: string;
};

export type TelefoneContextType = {
  id: string;
  setId: Dispatch<SetStateAction<string>>;
  tipoTelefone: string;
  setTipoTelefone: Dispatch<SetStateAction<string>>;
  ddd: string;
  setDdd: Dispatch<SetStateAction<string>>;
  numero: string;
  setNumero: Dispatch<SetStateAction<string>>;
  telefones: TelefoneType[];
  setTelefones: Dispatch<SetStateAction<TelefoneType[]>>;
  indexExcluir: number;
  setIndexExcluir: Dispatch<SetStateAction<number>>;
  clearForm: () => void;
  handleSalvarTelefone: (data: TelefoneType) => void;
  fillForm: (data: TelefoneType[]) => void;
  handleExcluirTelefone: (indexLista: number) => void;
};
