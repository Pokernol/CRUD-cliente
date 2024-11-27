import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import { toast } from 'react-toastify';
import { EnderecoEntregaContextType, EnderecoType, paisType } from './types';
const EnderecoEntregaContext = createContext({} as EnderecoEntregaContextType);

const brasil: paisType = { nome: 'Brasil', sigla: 'BR' };

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
  const [pais, setPais] = useState<paisType>(brasil);
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
    setPais(brasil);
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

  const validateEndereco = useCallback((data: EnderecoType) => {
    if (
      !data.tipoLogradouro ||
      !data.logradouro ||
      !data.numero ||
      !data.bairro ||
      !data.cidade ||
      !data.estado ||
      !data.cep ||
      !data.pais
    ) {
      toast.error(
        'Para cadastro deve se ter todos os campos obrigatórios de endereço de entrega preenchidos!'
      );
      return false;
    }
    return true;
  }, []);

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
