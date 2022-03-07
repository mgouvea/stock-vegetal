import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  Text,
  useBoolean,
  useBreakpointValue,
  VStack,
} from '@chakra-ui/react';
import { Input } from '../../components/Forms/Input';
import { SelectInput } from '../../components/Forms/SelectInput';
import { Header } from '../../components/Header';
import { SideBar } from '../../components/Sidebar';

import { IoIosArrowDropleft } from 'react-icons/io';
import Link from 'next/link';
// import { useRouter } from 'next/router';

const tipoSessao = [
  'Extra',
  'Escala',
  'Preparo',
  'Instrutiva',
  'Escala anual',
  'Adventício',
  'Casal',
  'Direção',
  'Quadro de Mestre',
];

import * as yup from 'yup';

import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { SwitchInput } from '../../components/Forms/SwitchInput';
import { useRouter } from 'next/router';
import { useMutation } from 'react-query';
import { api } from '../../services/api';

type CreateConsumoFormData = {
  cod: number;
  tipoSessao: string;
  dirigente: string;
  consumo: number;
  dataSessao: string;
  assistente: string;
  auxiliar?: string;
  leitura?: string;
  explanacao?: string;
  qtdPessoas?: number;
  repeticoes?: number;
};

const createConsumoFormSchema = yup.object().shape({
  cod: yup.string().required('ID obrigatório'),
  tipoSessao: yup.string().required('Tipo sessão obrigatório'),
  dirigente: yup.string().required('Dirigente obrigatório'),
  consumo: yup.string().required('Quantidade obrigatória'),
  dataSessao: yup.string().required('Data obrigatória'),
  assistente: yup.string().required('Assistente obrigatório'),
  auxiliar: yup.string().required('Assistente obrigatório'),
  // leitura: yup.string().required('Assistente obrigatório'),
  // explanacao: yup.string().required('Explanação obrigatório'),
});

export default function CreateConsumo() {
  const createConsumo = useMutation(async (consumo: CreateConsumoFormData) => {
    const response = await api.post('/consumo/createConsumo', {
      ...consumo,
    });
    return response.data.consumo;
  });

  const [flag, setFlag] = useBoolean();
  const routes = useRouter();

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(createConsumoFormSchema),
  });

  const { errors } = formState;

  const handleCreateConsumo: SubmitHandler<CreateConsumoFormData> = async (
    values
  ) => {
    const formatterValues = {
      cod: Number(values.cod),
      tipoSessao: values.tipoSessao,
      dirigente: values.dirigente,
      consumo: Number(values.consumo),
      dataSessao: values.dataSessao,
      assistente: values.assistente,
      auxiliar: values.auxiliar,
      leitura: values.leitura,
      explanacao: values.explanacao,
      qtdPessoas: Number(values.qtdPessoas),
      repeticoes: Number(values.repeticoes),
    };
    try {
      await createConsumo.mutateAsync(formatterValues);
      routes.push('/consumo');
    } catch (err) {
      console.log('error', err.message);
    }
  };

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <SideBar />

        <Box
          as="form"
          flex="1"
          borderRadius={8}
          bg="blue.800"
          p={['6', '8']}
          onSubmit={handleSubmit(handleCreateConsumo)}
        >
          <Heading size="lg" fontWeight="normal">
            {isWideVersion ? (
              <HStack justify="space-between">
                <Text>Registro de sessão</Text>
                <Link href="/consumo">
                  <Box as="button">
                    <IoIosArrowDropleft />
                    <Text fontSize="xs">Voltar</Text>
                  </Box>
                </Link>
              </HStack>
            ) : (
              <Text>Novo registro</Text>
            )}
          </Heading>

          <Divider my="6" borderColor="green.700" />

          <VStack>
            <SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
              <Input
                name="cod"
                type="number"
                label="ID"
                {...register('cod')}
                error={errors.cod}
              />
              <SelectInput
                name="tipoSessao"
                label="Tipo Sessão"
                optSelect={tipoSessao}
                {...register('tipoSessao')}
                error={errors.tipoSessao}
              />
              <Input
                name="dirigente"
                label="Dirigente"
                {...register('dirigente')}
                error={errors.dirigente}
              />
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
              <Input
                name="consumo"
                type="number"
                label="Quantidade consumida"
                step={0.5}
                min={0}
                {...register('consumo')}
                error={errors.consumo}
              />
              <Input
                name="dataSessao"
                type="date"
                label="Data Sessão"
                {...register('dataSessao')}
                error={errors.dataSessao}
              />
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
              <Input
                name="assistente"
                label="Assistente"
                {...register('assistente')}
                error={errors.assistente}
              />
              <Input
                name="auxiliar"
                label="Auxiliar do assistente"
                {...register('auxiliar')}
                error={errors.auxiliar}
              />
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
              <Input
                name="qtdPessoas"
                type="number"
                label="Quantidade de pessoas"
                min={0}
                {...register('qtdPessoas')}
              />
              <Input
                name="repeticoes"
                type="number"
                label="Repetições"
                min={0}
                {...register('repeticoes')}
              />
            </SimpleGrid>
            <SwitchInput
              name="leituraExplan"
              label="Houve leitura e explanação ?"
              onChange={setFlag.toggle}
            />
            {flag && (
              <SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
                <Input
                  name="leitura"
                  label="Leitura"
                  {...register('leitura')}
                />
                <Input
                  name="explanacao"
                  label="Explanação"
                  {...register('explanacao')}
                />
              </SimpleGrid>
            )}
          </VStack>

          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Link href="/consumo">
                <Button as="a" colorScheme="red">
                  Cancelar
                </Button>
              </Link>
              <Button
                type="submit"
                isLoading={formState.isSubmitting}
                colorScheme="green"
              >
                Salvar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
