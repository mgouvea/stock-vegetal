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
import { VegetalMobileCard } from '../../components/Mobile/VegetalMobileCard';

import { RiRefreshLine } from 'react-icons/ri';
import { useVegetal } from '../../services/hooks/useVegetal';
import NotFound from '../../components/NotFound';
import { Pagination } from '../../components/Pagination';

export default function EntradaVegetal() {
  const { data, isLoading, isFetching, error, refetch } = useVegetal();
  // console.log(data);
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
                <a>
                  <Button
                    // as="a"
                    size="sm"
                    fontSize="sm"
                    colorScheme="teal"
                    // bgGradient="linear(to-r, teal.400, teal.500, teal.600)"
                    leftIcon={
                      <Icon
                        as={RiAddLine}
                        fontSize={isWideVersion ? '20' : '15'}
                      />
                    }
                  >
                    {isWideVersion ? 'Novo Registro' : 'Novo'}
                  </Button>
                </a>
              </Link>
            </Stack>
          </Flex>

          {isWideVersion ? (
            isLoading ? (
              <SkeletonTables />
            ) : error ? (
              <NotFound />
            ) : (
              // <TableVegetal data={data} />
              <TableVegetal />
            )
          ) : isLoading ? (
            <SkeletonTables />
          ) : error ? (
            <Flex justify="center">
              <Text>Falha ao exibir dados </Text>
              {/* {console.log(error)} */}
            </Flex>
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
