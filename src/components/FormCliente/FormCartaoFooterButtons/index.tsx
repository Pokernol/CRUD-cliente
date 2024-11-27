import React, { useCallback, useMemo } from 'react';
import { useCartaoContext } from '../../../context/CartaoContext';

const FormCartaoFooterButtons: React.FC = () => {
  const {
    numeroCartao,
    nomeImpresso,
    cvv,
    isPreferencial,
    bandeira,
    clearForm: cartaoClearForm,
    handleSalvarCartao,
  } = useCartaoContext();

  const objectToSave = useMemo(
    () => ({
      numero: numeroCartao,
      nomeImpresso,
      cvv,
      isPreferencial,
      bandeira,
    }),
    [numeroCartao, nomeImpresso, cvv, isPreferencial, bandeira]
  );

  const handleClick = useCallback(() => {
    handleSalvarCartao(objectToSave);
  }, [objectToSave]);

  return (
    <div className="d-flex justify-content-end gap-3">
      <button
        type="button"
        className="btn btn-secondary ml-2"
        onClick={cartaoClearForm}
      >
        Limpar Campos
      </button>
      <button type="button" onClick={handleClick} className="btn btn-primary">
        Adicionar
      </button>
    </div>
  );
};
export default FormCartaoFooterButtons;
