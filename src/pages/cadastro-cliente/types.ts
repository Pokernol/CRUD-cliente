export interface Telefone {
  tipoTelefone: string;
  ddd: string;
  numero: string;
}

export interface Endereco {
  cep: string;
  tipoLogradouro: string;
  logradouro: string;
  numero: string;
  complemento: string;
  bairro: string;
  cidade: string;
  estado: string;
  pais: string;
}

export interface Cartao {
  numero: string;
  nomeImpresso: string;
  cvv: string;
  isPreferencial: boolean;
  bandeira: string;
}

export interface FormData {
  nome: string;
  dataNascimento: string;
  email: string;
  cpf: string;
  genero: string;
  telefones: Telefone[];
  enderecoEntrega: Endereco;
  enderecoCobranca: Endereco;
  cartao: Cartao;
}
