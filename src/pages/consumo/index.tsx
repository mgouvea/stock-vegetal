import {
  Badge,
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Icon,
  IconButton,
  Spinner,
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
import { useQuery } from 'react-query';
import { TableConsumo } from '../../components/Tables/TableConsumo';
import { SkeletonTables } from '../../components/SkeletonTables';
import { RiRefreshLine } from 'react-icons/ri';
import { api } from '../../services/api';
import { useConsumo } from '../../services/hooks/useConsumo';
import { useEffect, useState } from 'react';

import { firebase, auth } from '../../services/firebase';

export default function Consumo() {
  const { data, isLoading, isFetching, error, refetch } = useConsumo();
  const [allConsumo, setAllConsumo] = useState([]);

  let listaConsumo = [];

  useEffect(() => {
    firebase
      .firestore()
      .collection('consumo')
      .get()
      .then((res) => {
        res.docs.forEach((doc) => {
          listaConsumo.push({
            ...listaConsumo,
            id: doc.id,
            ...doc.data(),
          });
        });
      });

    console.log(listaConsumo);
    setAllConsumo(listaConsumo);
  }, []);

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
              {!isLoading && isFetching && (
                <Spinner size="sm" color="gray.500" ml="4" />
              )}
            </Heading>
            <Stack direction="row">
              <IconButton
                onClick={() => refetch()}
                colorScheme="orange"
                aria-label="refresh"
                size="sm"
                icon={<RiRefreshLine color="#fff" />}
              />
              <Link href="/consumo/createConsumo" passHref>
                <Button
                  as="a"
                  size="sm"
                  fontSize="sm"
                  colorScheme="teal"
                  leftIcon={
                    <Icon
                      as={RiAddLine}
                      fontSize={isWideVersion ? '20' : '15'}
                    />
                  }
                >
                  {isWideVersion ? 'Novo Consumo' : 'Novo'}
                </Button>
              </Link>
            </Stack>
          </Flex>

          {isWideVersion ? (
            isLoading ? (
              <SkeletonTables />
            ) : error ? (
              <Flex justify="center">
                <Text>Falha ao exibir dados </Text>
              </Flex>
            ) : (
              <TableConsumo data={allConsumo} />
            )
          ) : (
            <Box>
              <ConsumoMobileCard data={allConsumo} />
            </Box>
          )}

          {/* <Pagination /> */}
        </Box>
      </Flex>
    </Box>
  );
}
