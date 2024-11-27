import { useMemo } from 'react';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useClienteApi } from '../../../../apis/hooks/clienteApi';
import { useCartaoContext } from '../../../../context/CartaoContext';
import { useEnderecoCobrancaContext } from '../../../../context/EnderecoCobrancaContext';
import { useEnderecoEntregaContext } from '../../../../context/EnderecoEntregaContext';
import { useIndentificacaoClienteContext } from '../../../../context/IndentificacaoClienteContext';
import { useTelefoneContext } from '../../../../context/TelefoneContext';
import { clienteType } from './types';

export const useCadastrarCliente = () => {
  const { id, nome, dataNascimento, email, cpf, genero } =
    useIndentificacaoClienteContext();
  const {
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
  } = useEnderecoEntregaContext();
  const {
    tipoLogradouroCobranca,
    logradouroCobranca,
    numeroCobranca,
    complementoCobranca,
    bairroCobranca,
    cidadeCobranca,
    estadoCobranca,
    cepCobranca,
    paisCobranca,
    observacaoCobranca,
    copiarEnderecoEntrega,
  } = useEnderecoCobrancaContext();

  const { telefones } = useTelefoneContext();

  const { cartoes } = useCartaoContext();

  const { api } = useClienteApi();

  const navigate = useNavigate();

  async function save(values: clienteType) {
    console.log('values', values);
    const result = await api[values?.id ? 'put' : 'post'](
      `/clientes${values?.id ? `/${values.id}` : ''}`,
      values
    );
    return result.data;
  }

  const objectToSave = useMemo(
    () => ({
      id,
      nome,
      dataNascimento,
      email,
      cpf,
      genero,
      enderecos: [
        {
          cep,
          numero,
          complemento,
          logradouro,
          tipoLogradouro,
          bairro,
          cidade,
          estado,
          pais: pais,
          tipo: 'Entrega',
          observacao,
          enderecoEntregaIgualCobranca: copiarEnderecoEntrega,
        },
        {
          cep: cepCobranca,
          numero: numeroCobranca,
          complemento: complementoCobranca,
          logradouro: logradouroCobranca,
          tipoLogradouro: tipoLogradouroCobranca,
          bairro: bairroCobranca,
          cidade: cidadeCobranca,
          estado: estadoCobranca,
          pais: paisCobranca,
          tipo: 'Cobranca',
          observacao: observacaoCobranca,
        },
      ],
      telefones,
      cartoes,
    }),
    [
      id,
      nome,
      dataNascimento,
      email,
      cpf,
      genero,
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
      tipoLogradouroCobranca,
      logradouroCobranca,
      numeroCobranca,
      complementoCobranca,
      bairroCobranca,
      cidadeCobranca,
      estadoCobranca,
      cepCobranca,
      paisCobranca,
      observacaoCobranca,
      copiarEnderecoEntrega,
      telefones,
      cartoes,
    ]
  );

  return useMutation(() => save({ ...objectToSave }), {
    onSuccess: () => {
      toast.success('Cliente cadastrado com sucesso');
      navigate('/listar-clientes');
    },
    onError: () => {
      toast.error('Erro ao cadastrar cliente');
    },
  });
};
