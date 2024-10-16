import React from 'react';
import InputMask from 'react-input-mask';
import { useEnderecoCobrancaContext } from '../../../context/EnderecoCobrancaContext';

const FormEnderecoCobranca: React.FC = () => {
  const {
    tipoLogradouroCobranca,
    setTipoLogradouroCobranca,
    logradouroCobranca,
    setLogradouroCobranca,
    numeroCobranca,
    setNumeroCobranca,
    complementoCobranca,
    setComplementoCobranca,
    bairroCobranca,
    setBairroCobranca,
    cidadeCobranca,
    setCidadeCobranca,
    estadoCobranca,
    setEstadoCobranca,
    cepCobranca,
    setCepCobranca,
    paisCobranca,
    setPaisCobranca,
  } = useEnderecoCobrancaContext();

  const isValueValid = (value: string) => {
    const cleanedValue = value.replace(/[^a-zA-Z]/g, '');
    return cleanedValue.length <= 2 ? cleanedValue.toUpperCase() : '';
  };

  return (
    <div className="card mb-4">
      <div className="card-header">Endereço de Entrega</div>
      <div className="card-body">
        <div className="row mb-3">
          <div className="col-md-2">
            <label htmlFor="pais" className="form-label">
              País
            </label>
            <input
              type="text"
              id="pais"
              className="form-control"
              placeholder="Digite o país"
              value={paisCobranca}
              onChange={(e) => setPaisCobranca(e.target.value)}
            />
          </div>
          <div className="col-md-1">
            <label htmlFor="cep" className="form-label">
              CEP
            </label>
            <InputMask
              type="text"
              id="cep"
              className="form-control"
              placeholder="12345-678"
              mask={'99999-999'}
              maskChar={null}
              value={cepCobranca}
              onChange={(e) => setCepCobranca(e.target.value)}
            />
          </div>
          <div className="col-md-2">
            <label htmlFor="tipoLogradouro" className="form-label">
              Tipo de Logradouro
            </label>
            <input
              type="text"
              id="tipoLogradouro"
              className="form-control"
              placeholder="Rua, Avenida, Travessa"
              value={tipoLogradouroCobranca}
              onChange={(e) => setTipoLogradouroCobranca(e.target.value)}
            />
          </div>
          <div className="col-md-5">
            <label htmlFor="logradouro" className="form-label">
              Logradouro
            </label>
            <input
              type="text"
              id="logradouro"
              className="form-control"
              placeholder="Digite o logradouro"
              value={logradouroCobranca}
              onChange={(e) => setLogradouroCobranca(e.target.value)}
            />
          </div>
          <div className="col-md-1">
            <label htmlFor="numero" className="form-label">
              Número
            </label>
            <InputMask
              type="text"
              id="numero"
              mask="99999"
              maskChar={null}
              className="form-control"
              placeholder="12345"
              value={numeroCobranca}
              onChange={(e) => setNumeroCobranca(e.target.value)}
            />
          </div>
          <div className="col-md-1">
            <label htmlFor="estado" className="form-label">
              Estado
            </label>
            <InputMask
              type="text"
              id="estado"
              className="form-control"
              placeholder="SP, RJ"
              mask={'**'}
              maskChar={null}
              value={estadoCobranca}
              onChange={(e) => {
                const value = e.target.value;
                const validValue = isValueValid(value);
                setEstadoCobranca(validValue);
              }}
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-3">
            <label htmlFor="cidade" className="form-label">
              Cidade
            </label>
            <input
              type="text"
              id="cidade"
              className="form-control"
              placeholder="Digite a cidade"
              value={cidadeCobranca}
              onChange={(e) => setCidadeCobranca(e.target.value)}
            />
          </div>
          <div className="col-md-3">
            <label htmlFor="bairro" className="form-label">
              Bairro
            </label>
            <input
              type="text"
              id="bairro"
              className="form-control"
              placeholder="Digite o bairro"
              value={bairroCobranca}
              onChange={(e) => setBairroCobranca(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="complemento" className="form-label">
              Complemento
            </label>
            <input
              type="text"
              id="complemento"
              className="form-control"
              placeholder="Apto 202"
              value={complementoCobranca}
              onChange={(e) => setComplementoCobranca(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormEnderecoCobranca;
