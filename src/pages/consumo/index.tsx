import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  IconButton,
  Spinner,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import Link from 'next/link';
import { RiAddLine } from 'react-icons/ri';
import { Header } from '../../components/Header';
import { SideBar } from '../../components/Sidebar';
import { ConsumoMobileCard } from '../../components/Mobile/ConsumoMobileCard';
import { TableConsumo } from '../../components/Tables/TableConsumo';
import { SkeletonTables } from '../../components/SkeletonTables';
import { RiRefreshLine } from 'react-icons/ri';
import { useConsumo } from '../../services/hooks/useConsumo';

export default function Consumo() {
  const { data, isLoading, isFetching, error, refetch } = useConsumo();

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
                <a>
                  <Button
                    // as="a"
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
                </a>
              </Link>
            </Stack>
          </Flex>

          {isWideVersion ? (
            isLoading ? (
              <SkeletonTables />
            ) : error ? (
              <Flex justify="center">
                <Text>Falha ao exibir dados </Text>
                {console.log(error)}
              </Flex>
            ) : (
              <TableConsumo data={data} />
            )
          ) : isLoading ? (
            <Flex justify="center">
              <Spinner />
            </Flex>
          ) : error ? (
            <Flex justify="center">
              <Text>Falha ao exibir dados </Text>
              {console.log(error)}
            </Flex>
          ) : (
            <Box>
              <ConsumoMobileCard data={data} />
            </Box>
          )}

          {/* <Pagination /> */}
        </Box>
      </Flex>
    </Box>
  );
}
