import {
  Badge,
  Box,
  Button,
  Flex,
  Heading,
  Icon,
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
import { VegetalMobileCard } from '../../components/VegetalMobileCard';

export default function EntradaVegetal() {
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
              Entrada de Vegetal
            </Heading>
            <Link href="/vegetal/createVegetal" passHref>
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="teal"
                leftIcon={
                  <Icon as={RiAddLine} fontSize={isWideVersion ? '20' : '15'} />
                }
              >
                {isWideVersion ? 'Novo Registro' : 'Novo'}
              </Button>
            </Link>
          </Flex>

          {isWideVersion ? (
            <Table colorScheme="whiteAlpha">
              <Thead>
                <Tr>
                  <Th width="6">ID</Th>
                  <Th width="10">VEGETAL</Th>
                  <Th>PREPARO</Th>
                  <Th>QTD</Th>
                  <Th width="8">GRAU</Th>
                  <Th>OBS</Th>
                  <Th>DATA</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>93</Td>
                  <Td>Caupuri</Td>
                  <Td>
                    <Box>
                      <Text fontWeight="bold">M. José Araújo</Text>
                      <Text fontSize="sm" color="gray.300">
                        Rei Hoasqueiro
                      </Text>
                    </Box>
                  </Td>
                  <Td>
                    <Badge colorScheme={'green'} variant="solid" fontSize="md">
                      96 L
                    </Badge>
                  </Td>
                  <Td>Bom</Td>
                  <Td>Beber mais</Td>
                  <Td>10/10/2021</Td>
                </Tr>

                <Tr>
                  <Td>94</Td>
                  <Td>Tucunacá</Td>
                  <Td>
                    <Box>
                      <Text fontWeight="bold">M. Paulo Afonso</Text>
                      <Text fontSize="sm" color="gray.300">
                        Rei Hoasqueiro
                      </Text>
                    </Box>
                  </Td>
                  <Td>
                    <Badge colorScheme={'green'} variant="solid" fontSize="md">
                      100 L
                    </Badge>
                  </Td>
                  <Td>Forte</Td>
                  <Td>Pegando no físico</Td>
                  <Td>23/11/2021</Td>
                </Tr>
              </Tbody>
            </Table>
          ) : (
            <Box>
              <VegetalMobileCard
                cod={93}
                vegetal="Caupuri"
                nucleo="Rei Hoasqueiro"
                mestre="José Araújo"
                qtd={96}
                grau="Bom"
                data="10/10/2021"
              />
              <VegetalMobileCard
                cod={94}
                vegetal="Tucunacá"
                nucleo="Rei Hoasqueiro"
                mestre="Paulo Afonso"
                qtd={100}
                grau="Forte"
                data="23/11/2021"
              />
              <VegetalMobileCard
                cod={95}
                vegetal="Tucunacá"
                nucleo="Rei Hoasqueiro"
                mestre="Paulo Afonso"
                qtd={20}
                grau="Forte"
                data="23/11/2021"
              />
            </Box>
          )}
          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
}
