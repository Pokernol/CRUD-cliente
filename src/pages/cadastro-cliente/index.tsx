import React from 'react';
import FormCliente from '../../components/FormCliente';
import { IndentificacaoClienteProvider } from '../../context/IndentificacaoClienteContext';
import { TelefoneProvider } from '../../context/TelefoneContext';

const CadastroClienteProvider: React.FC = () => (
  <IndentificacaoClienteProvider>
    <TelefoneProvider>
      <FormCliente />
    </TelefoneProvider>
  </IndentificacaoClienteProvider>
);

export default CadastroClienteProvider;
