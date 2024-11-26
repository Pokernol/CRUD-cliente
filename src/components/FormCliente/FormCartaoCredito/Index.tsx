import React, { useEffect } from 'react';
import InputMask from 'react-input-mask';
import { useCartaoContext } from '../../../context/CartaoContext';
import FormCartaoFooterButtons from '../FormCartaoFooterButtons';
import TabelaCartoes from '../TabelaCartoes';

const FormCartaoCredito: React.FC = () => {
  const {
    numeroCartao,
    setNumeroCartao,
    nomeImpresso,
    setNomeImpresso,
    cvv,
    setCvv,
    isPreferencial,
    setIsPreferencial,
    bandeira,
    setBandeira,
    cartoes,
  } = useCartaoContext();

  useEffect(() => {
    if (cartoes.length <= 0) return setIsPreferencial(true);
    return setIsPreferencial(false);
  }, [cartoes]);

  return (
    <div className="card mb-4">
      <div className="card-header">Cartões</div>
      <div className="card-body">
        <div className="row mb-3">
          <div className="col-md-3">
            <label htmlFor="bandeira" className="form-label">
              Bandeira
            </label>
            <select
              className="form-select"
              id="bandeira"
              value={bandeira}
              onChange={(e: { target: { value: string } }) =>
                setBandeira(e.target.value)
              }
            >
              <option value="">Selecione...</option>
              <option value="mastercard">Mastercard</option>
              <option value="visa">Visa</option>
              <option value="elo">Elo</option>
              <option value="americanexpress">American Express</option>
              <option value="hipercard">Hipercard</option>
              <option value="alelo">Alelo</option>
            </select>
          </div>
          <div className="col-md-4">
            <label htmlFor="nomeImpresso" className="form-label">
              Nome Impresso
            </label>
            <input
              type="text"
              placeholder="Digite o nome impresso no cartão"
              className="form-control"
              id="nomeImpresso"
              value={nomeImpresso}
              onChange={(e) => setNomeImpresso(e.target.value)}
            />
          </div>
          <div className="col-md-3">
            <label htmlFor="numeroCartao" className="form-label">
              Número do Cartão
            </label>
            <InputMask
              type="text"
              placeholder="0000 0000 0000 0000"
              className="form-control"
              id="numeroCartao"
              mask="9999 9999 9999 9999"
              maskChar={null}
              value={numeroCartao}
              onChange={(e) => setNumeroCartao(e.target.value)}
            />
          </div>
          <div className="col-md-2">
            <label htmlFor="cvv" className="form-label">
              CVV
            </label>
            <InputMask
              type="text"
              placeholder="000"
              className="form-control"
              id="cvv"
              mask="999"
              maskChar={null}
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-12">
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                id="isPreferencial"
                checked={isPreferencial}
                disabled
              />
              <label className="form-check-label" htmlFor="isPreferencial">
                Cartão preferencial
              </label>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-end gap-3 mb-3">
          <FormCartaoFooterButtons />
        </div>
        <TabelaCartoes />
      </div>
    </div>
  );
};

export default FormCartaoCredito;
