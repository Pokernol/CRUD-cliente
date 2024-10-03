import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Bem-vindo ao Sistema de Clientes!</h1>
      <p className="home-description">
        Este é um aplicativo de CRUD (Criar, Ler, Atualizar e Deletar) de clientes.<br />
        Aqui você pode gerenciar informações de clientes.
      </p>
      <p className="home-description">
        Com esta aplicação, você pode adicionar novos clientes, visualizar a lista de clientes,<br />
        editar informações existentes e remover clientes que não são mais necessários.
      </p>

      <div className="cards-container">
        <div className="card">
          <h2>Cadastrar Cliente</h2>
          <p>Adicione um novo cliente ao sistema.</p>
          <Link to="/cadastro-cliente">
            <button className="card-button">Cadastrar</button>
          </Link>
        </div>

        <div className="card">
          <h2>Listar Clientes</h2>
          <p>Veja a lista de clientes cadastrados.</p>
          <Link to="/listar-clientes">
            <button className="card-button">Ver Lista</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
