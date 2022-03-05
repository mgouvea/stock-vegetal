import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Spinner,
  Text,
  IconButton,
  useBreakpointValue,
  Stack,
} from '@chakra-ui/react';
import Link from 'next/link';
import { RiAddLine } from 'react-icons/ri';
import { Header } from '../../components/Header';
import { SideBar } from '../../components/Sidebar';
import { SkeletonTables } from '../../components/SkeletonTables';
import { TableVegetal } from '../../components/Tables/TableVegetal';
import { VegetalMobileCard } from '../../components/VegetalMobileCard';

import { RiRefreshLine } from 'react-icons/ri';
import { useVegetal } from '../../services/hooks/useVegetal';
import { useEffect } from 'react';

export default function EntradaVegetal() {
  const { data, isLoading, isFetching, error, refetch } = useVegetal();
  // const [allVegetal, setAllVegetal] = useState([]);

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  useEffect(() => {
    console.log(data);
  }, []);

  // let listaVegetal = [];

  // useEffect(() => {
  //   firebase
  //     .firestore()
  //     .collection('entrada')
  //     .get()
  //     .then((res) => {
  //       res.docs.forEach((doc) => {
  //         listaVegetal.push({
  //           ...listaVegetal,
  //           id: doc.id,
  //           ...doc.data(),
  //         });
  //       });
  //     });

  //   console.log(listaVegetal);
  //   setAllVegetal(listaVegetal);
  // }, []);

  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <SideBar />

        <Box flex="1" borderRadius={8} bg="blue.800" p={['6', '8']}>
          <Flex mb="8" justify="space-between" align="center">
            <Heading size={isWideVersion ? 'lg' : 'md'} fontWeight="normal">
              Entrada de Vegetal
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
              <Link href="/vegetal/createVegetal" passHref>
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
                  {isWideVersion ? 'Novo Registro' : 'Novo'}
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
              <TableVegetal data={data} />
            )
          ) : (
            <Box>
              <VegetalMobileCard data={data} />
            </Box>
          )}
          {/* <Pagination /> */}
        </Box>
      </Flex>
    </Box>
  );
}
