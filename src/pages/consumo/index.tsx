import {
  Badge,
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Icon,
  Stack,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useBreakpointValue,
} from '@chakra-ui/react';
import Link from 'next/link';
import { RiAddLine } from 'react-icons/ri';
import { Header } from '../../components/Header';
import { Pagination } from '../../components/Pagination';
import { SideBar } from '../../components/Sidebar';
import { ConsumoMobileCard } from '../../components/ConsumoMobileCard';

export default function Consumo() {
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
          <Flex mb="8" justify="space-between" align="center">
            <Heading size={isWideVersion ? 'lg' : 'md'} fontWeight="normal">
              Consumo nas Sessões
            </Heading>
            <Link href="/consumo/createConsumo" passHref>
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="teal"
                leftIcon={
                  <Icon as={RiAddLine} fontSize={isWideVersion ? '20' : '15'} />
                }
              >
                {isWideVersion ? 'Novo Consumo' : 'Novo'}
              </Button>
            </Link>
          </Flex>

          {isWideVersion ? (
            <Table colorScheme="whiteAlpha">
              <Thead>
                <Tr>
                  <Th width="6">ID</Th>
                  <Th width="10">TIPO SESSÃO</Th>
                  <Th>DIRIGENTE</Th>
                  <Th>CONSUMO</Th>
                  <Th>ASSISTENTE - AUXILIAR(ES)</Th>
                  <Th>INFORMAÇÕES SESSÃO</Th>
                  <Th>PESSOAS</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>94</Td>
                  <Td>
                    <Box>
                      <Text fontWeight="bold">Escala</Text>
                      <Text fontSize="sm" color="gray.300">
                        19/02/2022
                      </Text>
                    </Box>
                  </Td>
                  <Td>M. Wladmir</Td>
                  <Td>
                    <Badge colorScheme={'green'} variant="solid" fontSize="md">
                      7.5 L
                    </Badge>
                  </Td>
                  <Td>
                    <Box>
                      <Text fontWeight="bold">M. Eduardo</Text>
                      <Text fontSize="sm" color="gray.300">
                        C. João F - Felipe - Daniel
                      </Text>
                    </Box>
                  </Td>
                  <Td>
                    <Box>
                      <HStack spacing="2">
                        <Text fontWeight="bold">Leitura:</Text>
                        <Text fontSize="sm" color="gray.300">
                          Jhonatan
                        </Text>
                      </HStack>
                      <HStack spacing="2">
                        <Text fontWeight="bold">Explanação:</Text>
                        <Text fontSize="sm" color="gray.300">
                          C. Jeane
                        </Text>
                      </HStack>
                    </Box>
                  </Td>
                  <Td>
                    <Box>
                      <HStack spacing="2">
                        <Text fontWeight="bold">Pessoas:</Text>
                        <Text fontSize="sm" color="gray.300">
                          86
                        </Text>
                      </HStack>
                      <HStack spacing="2">
                        <Text fontWeight="bold">Repetições:</Text>
                        <Text fontSize="sm" color="gray.300">
                          0
                        </Text>
                      </HStack>
                    </Box>
                  </Td>
                </Tr>
                <Tr>
                  <Td>94</Td>
                  <Td>
                    <Box>
                      <Text fontWeight="bold">Escala Anual</Text>
                      <Text fontSize="sm" color="gray.300">
                        10/02/2022
                      </Text>
                    </Box>
                  </Td>
                  <Td>M. Marlo</Td>
                  <Td>
                    <Badge colorScheme={'green'} variant="solid" fontSize="md">
                      12 L
                    </Badge>
                  </Td>
                  <Td>
                    <Box>
                      <Text fontWeight="bold">M. Eduardo</Text>
                      <Text fontSize="sm" color="gray.300">
                        C. João F - Felipe - Daniel
                      </Text>
                    </Box>
                  </Td>
                  <Td>
                    <Box>
                      <HStack spacing="2">
                        <Text fontWeight="bold">Leitura:</Text>
                        <Text fontSize="sm" color="gray.300">
                          Alguém
                        </Text>
                      </HStack>
                      <HStack spacing="2">
                        <Text fontWeight="bold">Explanação:</Text>
                        <Text fontSize="sm" color="gray.300">
                          M. Adriano
                        </Text>
                      </HStack>
                    </Box>
                  </Td>
                  <Td>
                    <Box>
                      <HStack spacing="2">
                        <Text fontWeight="bold">Pessoas:</Text>
                        <Text fontSize="sm" color="gray.300">
                          93
                        </Text>
                      </HStack>
                      <HStack spacing="2">
                        <Text fontWeight="bold">Repetições:</Text>
                        <Text fontSize="sm" color="gray.300">
                          0
                        </Text>
                      </HStack>
                    </Box>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          ) : (
            <Box>
              <ConsumoMobileCard
                cod={94}
                tipoSessao="Escala"
                data="19/02/2022"
                dirigente="M. Wladmir"
                consumo={7.5}
                assistente="M. Eduardo"
                pessoas={86}
              />
              <ConsumoMobileCard
                cod={94}
                tipoSessao="Escala anual"
                data="10/02/2022"
                dirigente="M. Marlo"
                consumo={12}
                assistente="M. Eduardo"
                pessoas={93}
              />
            </Box>
          )}

          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
}
