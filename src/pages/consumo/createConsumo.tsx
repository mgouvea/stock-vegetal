import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  Text,
  useBreakpointValue,
  VStack,
} from '@chakra-ui/react';
import { Input } from '../../components/Forms/Input';
import { SelectInput } from '../../components/Forms/SelectInput';
import { Header } from '../../components/Header';
import { SideBar } from '../../components/Sidebar';

import { IoIosArrowDropleft } from 'react-icons/io';
import Link from 'next/link';

const tipoSessao = [
  'Extra',
  'Escala',
  'Instrutiva',
  'Escala anual',
  'Adventício',
  'Casal',
  'Direção',
  'Quadro de Mestre',
];

export default function CreateConsumo() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <SideBar />

        <Box flex="1" borderRadius={8} bg="blue.800" p={['6', '8']}>
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
              <Input name="cod" type="number" label="ID" />
              <SelectInput
                name="typeSessao"
                label="Tipo Sessão"
                optSelect={tipoSessao}
              />
              <Input name="dirigente" label="Dirigente" />
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
              <Input
                name="consumo"
                type="number"
                label="Quantidade consumida"
                step={0.5}
                min={0}
              />
              <Input name="data" type="date" label="Data Preparo" />
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
              <Input name="assistente" label="Assistente" />
              <Input name="auxiliar" label="Auxiliar do assistente" />
            </SimpleGrid>
            <SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
              <Input name="leitura" label="Leitura" />
              <Input name="explanacao" label="Explanação" />
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
              <Input
                name="pessoas"
                type="number"
                label="Quantidade de pessoas"
                min={0}
              />
              <Input
                name="repeticoes"
                type="number"
                label="Repetições"
                min={0}
              />
            </SimpleGrid>
          </VStack>

          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Link href="/consumo">
                <Button as="a" colorScheme="red">
                  Cancelar
                </Button>
              </Link>
              <Button colorScheme="green">Salvar</Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
