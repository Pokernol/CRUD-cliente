import { useQuery } from 'react-query';
import { useClienteApi } from '../../../../apis/hooks/clienteApi';

export const useFetchClientes = () => {
  const { api } = useClienteApi();

  return useQuery(
    ['getClientes'],
    () =>
      api
        .get('/clientes', {
          params: {},
        })
        .then((res) => res.data),
    { refetchOnWindowFocus: false }
  );
};
