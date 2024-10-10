import React, { FormEvent } from 'react';
import { useIndentificacaoClienteContext } from '../../context/IndentificacaoClienteContext';
import { useTelefoneContext } from '../../context/TelefoneContext';
import FormClienteFooterButtons from './FormClienteFooterButtons';
import FormIndentificacaoCliente from './FormIndentificacaoCliente';
import FormTelefone from './FormTelefone';

const FormCliente: React.FC = () => {
  const { nome, dataNascimento, email, cpf, genero } =
    useIndentificacaoClienteContext();
  const { telefones } = useTelefoneContext();
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log({
      nome,
      dataNascimento,
      email,
      cpf,
      genero,
      telefones,
    });
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <form onSubmit={handleSubmit}>
            <FormIndentificacaoCliente />
            <FormTelefone />
            <FormClienteFooterButtons />
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormCliente;
