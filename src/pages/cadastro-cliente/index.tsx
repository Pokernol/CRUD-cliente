import React from 'react';
import FormCliente from '../../components/FormCliente';
import { CartaoProvider } from '../../context/CartaoContext';
import { EnderecoCobrancaProvider } from '../../context/EnderecoCobrancaContext';
import { EnderecoEntregaProvider } from '../../context/EnderecoEntregaContext';
import { IndentificacaoClienteProvider } from '../../context/IndentificacaoClienteContext';
import { TelefoneProvider } from '../../context/TelefoneContext';

const CadastroClienteProvider: React.FC = () => (
  <IndentificacaoClienteProvider>
    <EnderecoEntregaProvider>
      <EnderecoCobrancaProvider>
        <TelefoneProvider>
          <CartaoProvider>
            <FormCliente />
          </CartaoProvider>
        </TelefoneProvider>
      </EnderecoCobrancaProvider>
    </EnderecoEntregaProvider>
  </IndentificacaoClienteProvider>
);

export default CadastroClienteProvider;
