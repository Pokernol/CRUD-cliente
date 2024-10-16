import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import { toast } from 'react-toastify';
import { EnderecoType } from '../EnderecoEntregaContext/types';
import { EnderecoCobrancaContextType } from './types';

const EnderecoCobrancaContext = createContext(
  {} as EnderecoCobrancaContextType
);

export const useEnderecoCobrancaContext = () =>
  useContext(EnderecoCobrancaContext);

export const EnderecoCobrancaProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [id, setId] = useState<string>('');
  const [tipoLogradouroCobranca, setTipoLogradouroCobranca] =
    useState<string>('');
  const [logradouroCobranca, setLogradouroCobranca] = useState<string>('');
  const [numeroCobranca, setNumeroCobranca] = useState<string>('');
  const [complementoCobranca, setComplementoCobranca] = useState<string>('');
  const [bairroCobranca, setBairroCobranca] = useState<string>('');
  const [cidadeCobranca, setCidadeCobranca] = useState<string>('');
  const [estadoCobranca, setEstadoCobranca] = useState<string>('');
  const [cepCobranca, setCepCobranca] = useState<string>('');
  const [paisCobranca, setPaisCobranca] = useState<string>('');
  const [copiarEnderecoEntrega, setCopiarEnderecoEntrega] =
    useState<boolean>(false);

  const clearForm = useCallback(() => {
    setId('');
    setTipoLogradouroCobranca('');
    setLogradouroCobranca('');
    setNumeroCobranca('');
    setComplementoCobranca('');
    setBairroCobranca('');
    setCidadeCobranca('');
    setEstadoCobranca('');
    setCepCobranca('');
    setPaisCobranca('');
    setCopiarEnderecoEntrega(false);
  }, [
    id,
    tipoLogradouroCobranca,
    logradouroCobranca,
    numeroCobranca,
    complementoCobranca,
    bairroCobranca,
    cidadeCobranca,
    estadoCobranca,
    cepCobranca,
    paisCobranca,
    copiarEnderecoEntrega,
  ]);

  const fillForm = useCallback(
    (data: EnderecoType) => {
      setId(data.id || '');
      setTipoLogradouroCobranca(data.tipoLogradouro);
      setLogradouroCobranca(data.logradouro);
      setNumeroCobranca(data.numero);
      setComplementoCobranca(data.complemento);
      setBairroCobranca(data.bairro);
      setCidadeCobranca(data.cidade);
      setEstadoCobranca(data.estado);
      setCepCobranca(data.cep);
      setPaisCobranca(data.pais);
      setCopiarEnderecoEntrega(data.copiarEnderecoEntrega || false);
    },
    [
      id,
      tipoLogradouroCobranca,
      logradouroCobranca,
      numeroCobranca,
      complementoCobranca,
      bairroCobranca,
      cidadeCobranca,
      estadoCobranca,
      cepCobranca,
      paisCobranca,
      copiarEnderecoEntrega,
    ]
  );

  const validateEnderecoCobranca = (data: EnderecoType) => {
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
      return false;
    }
    return true;
  };

  const handleSalvarEnderecoCobranca = (objectToSave: EnderecoType) => {
    if (objectToSave && validateEnderecoCobranca(objectToSave)) {
      toast.error('Preencha todos os campos do endereço!');
      return;
    }
  };

  const values = useMemo(
    () => ({
      id,
      setId,
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
      copiarEnderecoEntrega,
      setCopiarEnderecoEntrega,
      clearForm,
      fillForm,
      validateEnderecoCobranca,
      handleSalvarEnderecoCobranca,
    }),
    [
      id,
      tipoLogradouroCobranca,
      logradouroCobranca,
      numeroCobranca,
      complementoCobranca,
      bairroCobranca,
      cidadeCobranca,
      estadoCobranca,
      cepCobranca,
      paisCobranca,
      copiarEnderecoEntrega,
    ]
  );

  return (
    <EnderecoCobrancaContext.Provider value={values}>
      {children}
    </EnderecoCobrancaContext.Provider>
  );
};
