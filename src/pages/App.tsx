import { QueryClient, QueryClientProvider } from 'react-query';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../components/Navbar';
import CadastroClienteProvider from './cadastro-cliente';
import HomeProvider from './home';
import ListarClientesProvider from './listar-clientes';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Navbar />
        <div className="container-fluid">
          <Routes>
            <Route path="/" element={<HomeProvider />} />
            <Route
              path="/cadastro-cliente"
              element={<CadastroClienteProvider />}
            />
            <Route
              path="/listar-clientes"
              element={<ListarClientesProvider />}
            />
          </Routes>
        </div>
        <ToastContainer position="bottom-right" />
      </Router>
    </QueryClientProvider>
  );
}

export default App;
