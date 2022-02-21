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
import { SwitchInput } from '../../components/Forms/SwitchInput';
import { Header } from '../../components/Header';
import { SideBar } from '../../components/Sidebar';

import { IoIosArrowDropleft } from 'react-icons/io';
import Link from 'next/link';
import { TextAreaInput } from '../../components/Forms/TextAreaInput';

const graus = ['Aguado', 'Fraco', 'Bom', 'Forte'];

export default function CreateVegetal() {
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
              <Input name="cod" label="ID" />
              <Input name="typeMariri" label="Tipo Mariri" />
              <Input name="typeChacrona" label="Tipo Chacrona" />
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
              <Input name="qtd" type="number" label="Quantidade" />
              <Input name="data" type="date" label="Data Preparo" />
              <SelectInput name="grau" label="Grau" optSelect={graus} />
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
              <Input name="npreparo" label="Núcleo Preparo" />
              <Input name="mpreparo" label="Mestre Preparo" />
            </SimpleGrid>
            <SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
              <Input name="origemMariri" label="Origem Mariri" />
              <Input name="origemChacrona" label="Origem Chacrona" />
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
              <TextAreaInput name="obs" label="Observação" w="48.5%" />
            </SimpleGrid>
          </VStack>

          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Link href="/vegetal">
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
