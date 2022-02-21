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

const graus = ['QS', 'CI', 'CDC', 'QM'];

export default function CreateUser() {
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
                <Text>Criar usuário</Text>
                <Link href="/users">
                  <Box as="button">
                    <IoIosArrowDropleft />
                    <Text fontSize="xs">Voltar</Text>
                  </Box>
                </Link>
              </HStack>
            ) : (
              <Text>Criar usuário</Text>
            )}
          </Heading>

          <Divider my="6" borderColor="green.700" />

          <VStack>
            <SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
              <Input name="name" label="Nome completo" />
              <Input name="email" type="email" label="E-mail" />
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
              <SelectInput name="grau" label="Grau" optSelect={graus} />

              <SwitchInput
                name="admAllow"
                label="Permissões de administrador ?"
              />
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
              <Input name="password" type="password" label="Senha" />
              <Input
                name="password_confirmation"
                type="password"
                label="Confirmar senha"
              />
            </SimpleGrid>
          </VStack>

          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Link href="/users">
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
