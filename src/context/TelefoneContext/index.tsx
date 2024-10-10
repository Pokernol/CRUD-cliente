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

  const handleSalvarTelefone = useCallback((data: TelefoneType) => {
    if (!data.tipoTelefone || !data.ddd || !data.numero) {
      toast.error('Preencha todos os campos do telefone!');
      return;
    }
    setTelefones((prevTelefones) => {
      return [...prevTelefones, data];
    });
    toast.success('Telefone salvo com sucesso!');
  }, []);

  const fillForm = useCallback((data: TelefoneType[]) => {
    setTelefones(data);
  }, []);

  const handleExcluirTelefone = useCallback(
    (indexLista: number) => {
      setTelefones((prevTelefones) => {
        return prevTelefones.filter((_, index) => index !== indexLista);
      });
      toast.success(`Telefone excluído com sucesso!`);
    },
    [setTelefones]
  );

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
      handleSalvarTelefone,
      fillForm,
      handleExcluirTelefone,
    }),
    [
      id,
      tipoTelefone,
      ddd,
      numero,
      telefones,
      indexExcluir,
      clearForm,
      handleSalvarTelefone,
      fillForm,
      handleExcluirTelefone,
    ]
  );

  return (
    <TelefoneContext.Provider value={values}>
      {children}
    </TelefoneContext.Provider>
  );
};
