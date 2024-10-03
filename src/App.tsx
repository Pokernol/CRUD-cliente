import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CadastroCliente from './pages/cadastro-cliente';
import ListarClientes from './pages/listar-clientes';

function App() {
  return (
    <Router>
      <div className='container'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastro-cliente" element={<CadastroCliente />} />
          <Route path="/listar-clientes" element={<ListarClientes />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
