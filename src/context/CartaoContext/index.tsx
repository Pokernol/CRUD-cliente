import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import { toast } from 'react-toastify';
import { CartaoContextType, CartaoType } from './types';
const CartaoContext = createContext({} as CartaoContextType);

export const useCartaoContext = () => useContext(CartaoContext);

export const CartaoProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [id, setId] = useState<string>('');
  const [numeroCartao, setNumeroCartao] = useState<string>('');
  const [nomeImpresso, setNomeImpresso] = useState<string>('');
  const [cvv, setCvv] = useState<string>('');
  const [isPreferencial, setIsPreferencial] = useState<boolean>(false);
  const [bandeira, setBandeira] = useState<string>('');
  const [cartoes, setCartoes] = useState<CartaoType[]>([]);
  const [indexExcluir, setIndexExcluir] = React.useState<number>(-1);

  const clearForm = useCallback(() => {
    setId('');
    setNumeroCartao('');
    setNomeImpresso('');
    setCvv('');
    setBandeira('');
    setIndexExcluir(-1);
  }, [
    id,
    numeroCartao,
    nomeImpresso,
    cvv,
    isPreferencial,
    bandeira,
    indexExcluir,
  ]);

  const fillForm = useCallback(
    (data: CartaoType[]) => {
      setCartoes(data);
    },
    [cartoes]
  );

  const handleSalvarCartao = useCallback(
    (data: CartaoType) => {
      if (validarCartao(data)) return;
      setCartoes((prevCartoes) => {
        return [...prevCartoes, data];
      });
      toast.success('Cartão salvo com sucesso!');
      clearForm();
    },
    [cartoes]
  );

  const handleExcluirCartao = useCallback(
    (indexLista: number) => {
      setCartoes((prevCartoes) => {
        return prevCartoes.filter((_, index) => index !== indexLista);
      });
      toast.success(`Cartão excluído com sucesso!`);
    },
    [cartoes]
  );

  const handleIsPreferencial = useCallback(
    (indexLista: number) => {
      setCartoes((prevCartoes) => {
        const newCartoes = prevCartoes.map((cartao, index) => {
          if (cartao.isPreferencial)
            return { ...cartao, isPreferencial: false };
          if (index === indexLista) return { ...cartao, isPreferencial: true };
          return cartao;
        });
        return newCartoes;
      });
    },
    [cartoes]
  );

  const validarCartao = (data: CartaoType) => {
    if (!data.numero || !data.nomeImpresso || !data.cvv || !data.bandeira) {
      toast.error('Preencha todos os campos do cartão');
      return true;
    }
    if (data.numero.length !== 19) {
      toast.error('Número do cartão inválido');
      return true;
    }
    if (data.cvv.length !== 3) {
      toast.error('CVV inválido');
      return true;
    }
    return false;
  };

  const validarListaCartoes = () => {
    if (cartoes.length === 0) {
      toast.error('Para cadastro deve se ter pelo menos um cartão cadastrado!');
      return true;
    }
    return false;
  };

  const values = useMemo(
    () => ({
      id,
      setId,
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
      setCartoes,
      indexExcluir,
      setIndexExcluir,
      clearForm,
      fillForm,
      handleSalvarCartao,
      handleExcluirCartao,
      handleIsPreferencial,
      validarCartao,
      validarListaCartoes,
    }),
    [
      id,
      numeroCartao,
      nomeImpresso,
      cvv,
      isPreferencial,
      bandeira,
      cartoes,
      indexExcluir,
    ]
  );

  return (
    <CartaoContext.Provider value={values}>{children}</CartaoContext.Provider>
  );
};
