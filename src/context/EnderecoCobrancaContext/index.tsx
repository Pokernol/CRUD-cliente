import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import { toast } from 'react-toastify';
import { EnderecoType, paisType } from '../EnderecoEntregaContext/types';
import { EnderecoCobrancaContextType } from './types';

const EnderecoCobrancaContext = createContext(
  {} as EnderecoCobrancaContextType
);

const brasil: paisType = { nome: 'Brasil', sigla: 'BR' };

// eslint-disable-next-line react-refresh/only-export-components
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
  const [paisCobranca, setPaisCobranca] = useState<paisType>(brasil);
  const [observacaoCobranca, setObservacaoCobranca] = useState<string>('');
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
    setPaisCobranca(brasil);
    setObservacaoCobranca('');
    setCopiarEnderecoEntrega(false);
  }, []);

  const fillForm = useCallback((data: EnderecoType) => {
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
    setObservacaoCobranca(data.observacao || '');
    setCopiarEnderecoEntrega(data.copiarEnderecoEntrega || false);
  }, []);

  const validateEnderecoCobranca = useCallback((data: EnderecoType) => {
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
        'Para cadastro deve se ter todos os campos obrigatórios de endereço de cobrança preenchidos!'
      );
      return false;
    }
    return true;
  }, []);

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
      observacaoCobranca,
      setObservacaoCobranca,
      copiarEnderecoEntrega,
      setCopiarEnderecoEntrega,
      clearForm,
      fillForm,
      validateEnderecoCobranca,
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
      observacaoCobranca,
    ]
  );

  return (
    <EnderecoCobrancaContext.Provider value={values}>
      {children}
    </EnderecoCobrancaContext.Provider>
  );
};
