import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import { toast } from 'react-toastify';
import { EnderecoEntregaContextType, EnderecoType } from './types';
const EnderecoEntregaContext = createContext({} as EnderecoEntregaContextType);

export const useEnderecoEntregaContext = () =>
  useContext(EnderecoEntregaContext);

export const EnderecoEntregaProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [id, setId] = useState<string>('');
  const [tipoLogradouro, setTipoLogradouro] = useState<string>('');
  const [logradouro, setLogradouro] = useState<string>('');
  const [numero, setNumero] = useState<string>('');
  const [complemento, setComplemento] = useState<string>('');
  const [bairro, setBairro] = useState<string>('');
  const [cidade, setCidade] = useState<string>('');
  const [estado, setEstado] = useState<string>('');
  const [cep, setCep] = useState<string>('');
  const [pais, setPais] = useState<string>('');
  const [observacao, setObservacao] = useState<string>('');

  const clearForm = useCallback(() => {
    setId('');
    setTipoLogradouro('');
    setLogradouro('');
    setNumero('');
    setComplemento('');
    setBairro('');
    setCidade('');
    setEstado('');
    setCep('');
    setPais('');
    setObservacao('');
  }, [
    id,
    tipoLogradouro,
    logradouro,
    numero,
    complemento,
    bairro,
    cidade,
    estado,
    cep,
    pais,
    observacao,
  ]);

  const fillForm = useCallback(
    (data: EnderecoType) => {
      setId(data.id || '');
      setTipoLogradouro(data.tipoLogradouro);
      setLogradouro(data.logradouro);
      setNumero(data.numero);
      setComplemento(data.complemento);
      setBairro(data.bairro);
      setCidade(data.cidade);
      setEstado(data.estado);
      setCep(data.cep);
      setPais(data.pais);
      setObservacao(data.observacao || '');
    },
    [
      id,
      tipoLogradouro,
      logradouro,
      numero,
      complemento,
      bairro,
      cidade,
      estado,
      cep,
      pais,
      observacao,
    ]
  );

  const validateEndereco = () => {
    if (
      !tipoLogradouro ||
      !logradouro ||
      !numero ||
      !bairro ||
      !cidade ||
      !estado ||
      !cep ||
      !pais
    ) {
      toast.error(
        'Para cadastro deve se ter todos os campos obrigatórios de endereço de entrega preenchidos!'
      );
      return false;
    }
    return true;
  };

  const handleSalvarEndereco = (objectToSave: EnderecoType) => {
    if (objectToSave && validateEndereco()) {
      toast.error('Preencha todos os campos do endereço de entrega!');
      return;
    }
  };

  const values = useMemo(
    () => ({
      id,
      setId,
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
      observacao,
      setObservacao,
      clearForm,
      fillForm,
      validateEndereco,
      handleSalvarEndereco,
    }),
    [
      id,
      tipoLogradouro,
      logradouro,
      numero,
      complemento,
      bairro,
      cidade,
      estado,
      cep,
      pais,
      observacao,
    ]
  );

  return (
    <EnderecoEntregaContext.Provider value={values}>
      {children}
    </EnderecoEntregaContext.Provider>
  );
};
