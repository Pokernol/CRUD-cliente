import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import { toast } from 'react-toastify';
import { TelefoneContextType, TelefoneType } from './types';
const TelefoneContext = createContext({} as TelefoneContextType);

export const useTelefoneContext = () => useContext(TelefoneContext);

export const TelefoneProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [id, setId] = useState<string>('');
  const [tipoTelefone, setTipoTelefone] = useState<string>('');
  const [ddd, setDdd] = useState<string>('');
  const [numero, setNumero] = useState<string>('');
  const [telefones, setTelefones] = useState<TelefoneType[]>([]);
  const [indexExcluir, setIndexExcluir] = React.useState<number>(-1);

  const clearForm = useCallback(() => {
    setId('');
    setTipoTelefone('');
    setDdd('');
    setNumero('');
    setIndexExcluir(-1);
  }, [id, tipoTelefone, ddd, numero, indexExcluir]);

  const fillForm = useCallback(
    (data: TelefoneType[]) => {
      setTelefones(data);
    },
    [telefones]
  );

  const handleSalvarTelefone = useCallback(
    (data: TelefoneType) => {
      if (validarTelefone(data)) return;
      setTelefones((prevTelefones) => {
        return [...prevTelefones, data];
      });
      clearForm();
      toast.success('Telefone salvo com sucesso!');
    },
    [telefones]
  );

  const handleExcluirTelefone = useCallback(
    (indexLista: number) => {
      setTelefones((prevTelefones) => {
        return prevTelefones.filter((_, index) => index !== indexLista);
      });
      toast.success(`Telefone excluído com sucesso!`);
    },
    [telefones]
  );

  const validarTelefone = (data: TelefoneType) => {
    if (!data.tipoTelefone || !data.ddd || !data.numero) {
      toast.error('Preencha todos os campos do telefone!');
      return true;
    }

    if (data.ddd.length !== 2) {
      toast.error('DDD deve ter 2 dígitos!');
      return true;
    }

    if (data.tipoTelefone == 'CELULAR') {
      if (data.numero.length !== 11) {
        toast.error('Celular deve ter 9 dígitos!');
        return true;
      }
    }

    if (data.tipoTelefone == 'TELEFONE') {
      if (data.numero.length !== 9) {
        toast.error('Telefone deve ter 8 dígitos!');
        return true;
      }
    }
    return false;
  };

  const validarListaTelefones = () => {
    if (telefones.length === 0) {
      toast.error(
        'Para cadastro deve se ter pelo menos um telefone adicionado!'
      );
      return true;
    }
    return false;
  };

  const values = useMemo(
    () => ({
      id,
      setId,
      tipoTelefone,
      setTipoTelefone,
      ddd,
      setDdd,
      numero,
      setNumero,
      telefones,
      setTelefones,
      indexExcluir,
      setIndexExcluir,
      clearForm,
      fillForm,
      handleSalvarTelefone,
      handleExcluirTelefone,
      validarTelefone,
      validarListaTelefones,
    }),
    [id, tipoTelefone, ddd, numero, telefones, indexExcluir]
  );

  return (
    <TelefoneContext.Provider value={values}>
      {children}
    </TelefoneContext.Provider>
  );
};
