import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ backgroundColor: "#2c3e50" }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand text-white" to="/">
          CRUD CLIENTE ✏️📖🔄❌
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto text-white">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/cadastro-cliente">
                Cadastrar Cliente
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/listar-clientes">
                Listar Clientes
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/sobre">
                Sobre
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
