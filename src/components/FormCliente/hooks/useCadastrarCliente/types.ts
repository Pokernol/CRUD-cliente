import { CartaoType } from '../../../../context/CartaoContext/types';
import { EnderecoType } from '../../../../context/EnderecoEntregaContext/types';
import { TelefoneType } from '../../../../context/TelefoneContext/types';

export type clienteType = {
  id: string;
  nome: string;
  dataNascimento: string;
  email: string;
  cpf: string;
  genero: string;
  enderecos: EnderecoType[];
  telefones: TelefoneType[];
  cartoes: CartaoType[];
};
