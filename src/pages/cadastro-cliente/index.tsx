import React from 'react';
import FormCliente from '../../components/FormCliente';
import { EnderecoCobrancaProvider } from '../../context/EnderecoCobrancaContext';
import { EnderecoEntregaProvider } from '../../context/EnderecoEntregaContext';
import { IndentificacaoClienteProvider } from '../../context/IndentificacaoClienteContext';
import { TelefoneProvider } from '../../context/TelefoneContext';

const CadastroClienteProvider: React.FC = () => (
  <IndentificacaoClienteProvider>
    <EnderecoEntregaProvider>
      <EnderecoCobrancaProvider>
        <TelefoneProvider>
          <FormCliente />
        </TelefoneProvider>
      </EnderecoCobrancaProvider>
    </EnderecoEntregaProvider>
  </IndentificacaoClienteProvider>
);

export default CadastroClienteProvider;
