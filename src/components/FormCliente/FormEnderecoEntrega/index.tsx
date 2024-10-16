import React from 'react';
import InputMask from 'react-input-mask';
import { useEnderecoCobrancaContext } from '../../../context/EnderecoCobrancaContext';
import { useEnderecoEntregaContext } from '../../../context/EnderecoEntregaContext';

const FormEnderecoEntrega: React.FC = () => {
  const {
    tipoLogradouro,
    setTipoLogradouro,
    logradouro,
    setLogradouro,
    numero,
    setNumero,
    complemento,
    setComplemento,
    bairro,
    setBairro,
    cidade,
    setCidade,
    estado,
    setEstado,
    cep,
    setCep,
    pais,
    setPais,
  } = useEnderecoEntregaContext();

  const {
    setTipoLogradouroCobranca,
    setLogradouroCobranca,
    setNumeroCobranca,
    setComplementoCobranca,
    setBairroCobranca,
    setCidadeCobranca,
    setEstadoCobranca,
    setCepCobranca,
    setPaisCobranca,
    setCopiarEnderecoEntrega,
    clearForm: clearFormCobranca,
  } = useEnderecoCobrancaContext();

  const handleCopiarEndereco = () => {
    setTipoLogradouroCobranca(tipoLogradouro);
    setLogradouroCobranca(logradouro);
    setNumeroCobranca(numero);
    setComplementoCobranca(complemento);
    setBairroCobranca(bairro);
    setCidadeCobranca(cidade);
    setEstadoCobranca(estado);
    setCepCobranca(cep);
    setPaisCobranca(pais);
  };

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
              value={pais}
              onChange={(e) => setPais(e.target.value)}
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
              value={cep}
              onChange={(e) => setCep(e.target.value)}
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
              value={tipoLogradouro}
              onChange={(e) => setTipoLogradouro(e.target.value)}
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
              value={logradouro}
              onChange={(e) => setLogradouro(e.target.value)}
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
              value={numero}
              onChange={(e) => setNumero(e.target.value)}
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
              value={estado}
              onChange={(e) => {
                const value = e.target.value;
                const validValue = isValueValid(value);
                setEstado(validValue);
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
              value={cidade}
              onChange={(e) => setCidade(e.target.value)}
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
              value={bairro}
              onChange={(e) => setBairro(e.target.value)}
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
              value={complemento}
              onChange={(e) => setComplemento(e.target.value)}
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-12">
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="switchEnderecoEntrega"
                onChange={(e) => {
                  setCopiarEnderecoEntrega(e.target.checked);
                  if (e.target.checked) {
                    handleCopiarEndereco();
                  } else {
                    clearFormCobranca();
                  }
                }}
              />
              <label
                className="form-check-label"
                htmlFor="switchEnderecoEntrega"
              >
                Usar como endereço de cobrança?
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormEnderecoEntrega;
