import { useMemo } from 'react';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import { useClienteApi } from '../../../../apis/hooks/clienteApi';
import { useCartaoContext } from '../../../../context/CartaoContext';
import { useEnderecoCobrancaContext } from '../../../../context/EnderecoCobrancaContext';
import { useEnderecoEntregaContext } from '../../../../context/EnderecoEntregaContext';
import { useIndentificacaoClienteContext } from '../../../../context/IndentificacaoClienteContext';
import { useTelefoneContext } from '../../../../context/TelefoneContext';

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

  async function save(values: any) {
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
          pais: {
            nome: pais,
            sigla: 'BR',
          },
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
          pais: {
            nome: paisCobranca,
            sigla: 'BR',
          },
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
    ]
  );

  return useMutation(() => save({ ...objectToSave }), {
    onSuccess: () => {
      toast.success('Cliente cadastrado com sucesso');
    },
    onError: () => {
      toast.error('Erro ao cadastrar cliente');
    },
  });
};
