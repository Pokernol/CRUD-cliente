import axios from 'axios';
import { useMemo } from 'react';

export const useClienteApi = () => {
  const baseURL = `${import.meta.env.VITE_REACT_APP_API_URL}/api`;
  const headers = {
    'Content-Type': 'application/json',
  };
  const api = useMemo(() => {
    return axios.create({ baseURL, headers });
  }, [baseURL]);

  return { api, url: baseURL };
};
