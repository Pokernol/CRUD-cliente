import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../components/Navbar';
import CadastroClienteProvider from './cadastro-cliente';
import HomeProvider from './Home';
import ListarClientesProvider from './listar-clientes';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
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
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
