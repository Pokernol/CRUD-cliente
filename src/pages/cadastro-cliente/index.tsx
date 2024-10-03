import React, { useState } from 'react';
import './style.css';

interface Telefone {
  tipoTelefone: string;
  ddd: string;
  numero: string;
}

interface Endereco {
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

interface Cartao {
  numero: string;
  nomeImpresso: string;
  cvv: string;
  isPreferencial: boolean;
  bandeira: string;
}

interface FormData {
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

const CadastroCliente: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    dataNascimento: '',
    email: '',
    cpf: '',
    genero: '',
    telefones: [
      {
        tipoTelefone: '',
        ddd: '',
        numero: '',
      },
    ],
    enderecoEntrega: {
      cep: '',
      tipoLogradouro: '',
      logradouro: '',
      numero: '',
      complemento: '',
      bairro: '',
      cidade: '',
      estado: '',
      pais: '',
    },
    enderecoCobranca: {
      cep: '',
      tipoLogradouro: '',
      logradouro: '',
      numero: '',
      complemento: '',
      bairro: '',
      cidade: '',
      estado: '',
      pais: '',
    },
    cartao: {
      numero: '',
      nomeImpresso: '',
      cvv: '',
      isPreferencial: false,
      bandeira: '',
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleTelefoneChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    const updatedTelefones = [...formData.telefones];
    updatedTelefones[index][name as keyof Telefone] = value;
    setFormData({ ...formData, telefones: updatedTelefones });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="cadastro-container">
      <div className="card">
        <h2>Dados Pessoais</h2>
        <div className="input-row">
          <div className="input-group">
            <label htmlFor="nome">Nome</label>
            <input type="text" id="nome" />
          </div>
          <div className="input-group">
            <label htmlFor="dataNascimento">Data de Nascimento</label>
            <input type="date" id="dataNascimento" />
          </div>
        </div>
        <div className="input-row">
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className="input-group">
            <label htmlFor="cpf">CPF</label>
            <input type="text" id="cpf" />
          </div>
          <div className="input-group">
            <label htmlFor="genero">Gênero</label>
            <select id="genero">
              <option value="">Selecione</option>
              <option value="masculino">Masculino</option>
              <option value="feminino">Feminino</option>
              <option value="outro">Outro</option>
            </select>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Telefones</h2>
        <div className="input-row">
          <div className="input-group">
            <label htmlFor="tipoTelefone">Tipo de Telefone</label>
            <select id="tipoTelefone">
              <option value="">Selecione</option>
              <option value="celular">Celular</option>
              <option value="fixo">Fixo</option>
            </select>
          </div>
          <div className="input-group">
            <label htmlFor="ddd">DDD</label>
            <input type="text" id="ddd" />
          </div>
          <div className="input-group">
            <label htmlFor="numeroTelefone">Número</label>
            <input type="text" id="numeroTelefone" />
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Endereço de Entrega</h2>
        <div className="input-row">
          <div className="input-group">
            <label htmlFor="cepEntrega">CEP</label>
            <input type="text" id="cepEntrega" />
          </div>
          <div className="input-group">
            <label htmlFor="tipoLogradouroEntrega">Tipo de Logradouro</label>
            <input type="text" id="tipoLogradouroEntrega" />
          </div>
        </div>
        <div className="input-row">
          <div className="input-group">
            <label htmlFor="logradouroEntrega">Logradouro</label>
            <input type="text" id="logradouroEntrega" />
          </div>
          <div className="input-group">
            <label htmlFor="numeroEntrega">Número</label>
            <input type="number" id="numeroEntrega" />
          </div>
          <div className="input-group">
            <label htmlFor="complementoEntrega">Complemento</label>
            <input type="text" id="complementoEntrega" />
          </div>
        </div>
        <div className="input-row">
          <div className="input-group">
            <label htmlFor="bairroEntrega">Bairro</label>
            <input type="text" id="bairroEntrega" />
          </div>
          <div className="input-group">
            <label htmlFor="cidadeEntrega">Cidade</label>
            <input type="text" id="cidadeEntrega" />
          </div>
          <div className="input-group">
            <label htmlFor="estadoEntrega">Estado</label>
            <input type="text" id="estadoEntrega" />
          </div>
          <div className="input-group">
            <label htmlFor="paisEntrega">País</label>
            <input type="text" id="paisEntrega" />
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Endereço de Cobrança</h2>
        <div className="input-row">
          <div className="input-group">
            <label htmlFor="cepCobrança">CEP</label>
            <input type="text" id="cepCobrança" />
          </div>
          <div className="input-group">
            <label htmlFor="tipoLogradouroCobrança">Tipo de Logradouro</label>
            <input type="text" id="tipoLogradouroCobrança" />
          </div>
        </div>
        <div className="input-row">
          <div className="input-group">
            <label htmlFor="logradouroCobrança">Logradouro</label>
            <input type="text" id="logradouroCobrança" />
          </div>
          <div className="input-group">
            <label htmlFor="numeroCobrança">Número</label>
            <input type="number" id="numeroCobrança" />
          </div>
          <div className="input-group">
            <label htmlFor="complementoCobrança">Complemento</label>
            <input type="text" id="complementoCobrança" />
          </div>
        </div>
        <div className="input-row">
          <div className="input-group">
            <label htmlFor="bairroCobrança">Bairro</label>
            <input type="text" id="bairroCobrança" />
          </div>
          <div className="input-group">
            <label htmlFor="cidadeCobrança">Cidade</label>
            <input type="text" id="cidadeCobrança" />
          </div>
          <div className="input-group">
            <label htmlFor="estadoCobrança">Estado</label>
            <input type="text" id="estadoCobrança" />
          </div>
          <div className="input-group">
            <label htmlFor="paisCobrança">País</label>
            <input type="text" id="paisCobrança" />
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Cartão</h2>
        <div className="input-row">
          <div className="input-group">
            <label htmlFor="numeroCartao">Número do Cartão</label>
            <input type="text" id="numeroCartao" />
          </div>
          <div className="input-group">
            <label htmlFor="nomeImpresso">Nome Impresso</label>
            <input type="text" id="nomeImpresso" />
          </div>
        </div>
        <div className="input-row">
          <div className="input-group">
            <label htmlFor="cvv">CVV</label>
            <input type="number" id="cvv" />
          </div>
          <div className="input-group">
            <label htmlFor="isPreferencial">Preferencial</label>
            <input type="checkbox" id="isPreferencial" />
          </div>
          <div className="input-group">
            <label htmlFor="bandeira">Bandeira</label>
            <select id="bandeira">
              <option value="">Selecione</option>
              <option value="visa">Visa</option>
              <option value="mastercard">MasterCard</option>
              <option value="amex">American Express</option>
            </select>
          </div>
        </div>
      </div>

      <button className="card-button">Cadastrar</button>
    </div>
  );
};

export default CadastroCliente;
