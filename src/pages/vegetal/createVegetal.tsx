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
  useToast,
  VStack,
} from '@chakra-ui/react';
import { Input } from '../../components/Forms/Input';
import { Header } from '../../components/Header';
import { SideBar } from '../../components/Sidebar';

import { IoIosArrowDropleft } from 'react-icons/io';
import Link from 'next/link';
import { TextAreaInput } from '../../components/Forms/TextAreaInput';

import * as yup from 'yup';

import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { useMutation } from 'react-query';
import { api } from '../../services/api';
import { useRouter } from 'next/router';
import { useVegetal } from '../../services/hooks/useVegetal';
import { SwitchInput } from '../../components/Forms/SwitchInput';

// import { useRouter } from 'next/router';

type CreateVegetalFormData = {
  cod: number;
  tipoMariri: string;
  tipoChacrona?: string;
  qtd: number;
  qtdAtual: number;
  dataPreparo: string;
  dataEntrada: string;
  npreparo: string;
  mpreparo: string;
  origemMariri?: string;
  origemChacrona?: string;
  obs?: string;
};

const createVegetalFormSchema = yup.object().shape({
  cod: yup.string().required('ID obrigatório'),
  tipoMariri: yup.string().required('Tipo Mariri obrigatório'),
  qtd: yup.string().required('Quantidade obrigatória'),
  dataPreparo: yup.string().required('Data obrigatória'),
  // grau: yup.string().required('Grau obrigatório'),
});

export default function CreateVegetal() {
  const { data } = useVegetal();
  const toast = useToast();
  const [flag, setFlag] = useBoolean();

  const createVegetal = useMutation(async (vegetal: CreateVegetalFormData) => {
    const response = await api.post('/vegetal/createVegetal', {
      ...vegetal,
    });
    return response.data.vegetal;
  });

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(createVegetalFormSchema),
  });

  const { errors } = formState;
  const routes = useRouter();

  const handleCreateVegetal: SubmitHandler<CreateVegetalFormData> = async (
    values
  ) => {
    // await new Promise((resolve) => setTimeout(resolve, 1000));
    const formatterValues = {
      cod: Number(values.cod),
      tipoMariri: values.tipoMariri,
      tipoChacrona: values.tipoChacrona,
      qtd: Number(values.qtd),
      dataPreparo: values.dataPreparo,
      dataEntrada: values.dataEntrada,
      npreparo: values.npreparo,
      mpreparo: values.mpreparo,
      origemMariri: values.origemMariri,
      origemChacrona: values.origemChacrona,
      obs: values.obs,
      qtdAtual: Number(values.qtd),
    };

    try {
      if (data.map((i) => i.cod).includes(formatterValues.cod)) {
        toast({
          title: `ID ${formatterValues.cod} já cadastrado!`,
          status: 'error',
          isClosable: true,
        });
      } else {
        await createVegetal.mutateAsync(formatterValues);
        toast({
          title: `Vegetal ${formatterValues.cod} cadastrado com sucesso!`,
          status: 'success',
          isClosable: true,
        });
        routes.push('/vegetal');
      }
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
          onSubmit={handleSubmit(handleCreateVegetal)}
        >
          <Heading size="lg" fontWeight="normal">
            {isWideVersion ? (
              <HStack justify="space-between">
                <Text>Novo registro</Text>
                <Link href="/vegetal">
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
              <Input
                name="tipoMariri"
                label="Tipo Mariri"
                {...register('tipoMariri')}
                error={errors.tipoMariri}
              />
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
              <Input
                name="tipoChacrona"
                label="Tipo Chacrona"
                {...register('tipoChacrona')}
                error={errors.tipoChacrona}
              />
              <Input
                name="qtd"
                type="number"
                step={0.1}
                min={0}
                label="Quantidade Preparada"
                {...register('qtd')}
                error={errors.qtd}
              />
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
              <Input
                name="dataPreparo"
                type="date"
                label="Data Preparo"
                {...register('dataPreparo')}
                error={errors.dataPreparo}
              />
              <Input
                name="npreparo"
                label="Núcleo Preparo"
                {...register('npreparo')}
              />
            </SimpleGrid>
            <SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
              <Input
                name="mpreparo"
                label="Mestre Preparo"
                {...register('mpreparo')}
              />
              <Input
                name="origemMariri"
                label="Origem Mariri"
                {...register('origemMariri')}
              />
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
              <Input
                name="origemChacrona"
                label="Origem Chacrona"
                {...register('origemChacrona')}
              />
              <TextAreaInput
                name="obs"
                label="Observação"
                {...register('obs')}
              />
            </SimpleGrid>
            <SwitchInput
              name="dataEntradaTrue"
              label="Data de entrada ?"
              onChange={setFlag.toggle}
              mb="4"
            />
            {flag && (
              <Input
                w="48%"
                name="dataEntrada"
                type="date"
                label="Data de Entrada"
                {...register('dataEntrada')}
              />
            )}
          </VStack>

          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Link href="/vegetal">
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
