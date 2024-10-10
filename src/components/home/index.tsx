import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="container-fluid mt-5">
      <h1 className="text-center mb-4">Bem-vindo ao Sistema de Clientes!</h1>
      <p className="text-center">
        Este é um aplicativo de CRUD (Criar, Ler, Atualizar e Deletar) de
        clientes.
        <br />
        Aqui você pode gerenciar informações de clientes.
      </p>
      <p className="text-center mb-5">
        Com esta aplicação, você pode adicionar novos clientes, visualizar a
        lista de clientes,
        <br />
        editar informações existentes e remover clientes que não são mais
        necessários.
      </p>

      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
            <div className="card-body text-center">
              <h2 className="card-title">Cadastrar Cliente</h2>
              <p className="card-text">Adicione um novo cliente ao sistema.</p>
              <Link to="/cadastro-cliente" className="btn btn-primary">
                Cadastrar
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
            <div className="card-body text-center">
              <h2 className="card-title">Listar Clientes</h2>
              <p className="card-text">Veja a lista de clientes cadastrados.</p>
              <Link to="/listar-clientes" className="btn btn-primary">
                Ver Lista
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
