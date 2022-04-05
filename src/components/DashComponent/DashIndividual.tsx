import {
  Box,
  Button,
  Flex,
  Select,
  SimpleGrid,
  Spinner,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useVegetal } from '../../services/hooks/useVegetal';
import { IndividualGraphBar } from '../Graphs/IndividualGraphBar';
import { IndividualMobileCard } from '../Mobile/IndividualMobileCard';
import NoData from '../NoData';

export function DashIndividial() {
  const { data } = useVegetal();
  const [isLoading, setIsloading] = useState(true);
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  const [idFilter, setIdFilter] = useState(0);
  const [mPreparoFilter, setMPreparoFilter] = useState('');

  let orderCod = data?.map((i) => i.cod);
  let newOrderCod = orderCod?.sort((a, b) => a - b);
  let mpreparo = data?.map((i) => i.mpreparo);
  let newMpreparo = mpreparo?.filter(
    (item, index) => mpreparo?.indexOf(item) === index
  );

  const [filters, setFilters] = useState({
    id: newOrderCod,
    dirigente: newMpreparo,
  });

  const dataFilterId = data?.filter((item) => item.cod === idFilter);
  const dataFilterMPreparo = data?.filter(
    (item) => item.mpreparo === mPreparoFilter
  );

  function cleanFilters() {
    setIdFilter(0);
    setMPreparoFilter('');
    setFilters({
      id: null,
      dirigente: null,
    });
    setTimeout(() => {
      setFilters({
        id: newOrderCod,
        dirigente: newMpreparo,
      });
    }, 300);
  }

  useEffect(() => {
    if (data === undefined) {
      setIsloading(true);
    } else {
      setTimeout(() => {
        setIsloading(false);
      }, 2000);
      setFilters({
        id: newOrderCod,
        dirigente: newMpreparo,
      });
    }
  }, [data, idFilter, mPreparoFilter]);

  function handleDirigenteFilterChange(event) {
    setMPreparoFilter(event.target.value);
  }

  return (
    <Box>
      <Flex
        justify="space-between"
        mb="0.5rem"
        w={isWideVersion ? '100%' : '21rem'}
      >
        <Text fontSize="xl" fontWeight="bold" color="gray.400">
          Filtrar
        </Text>
        <Button colorScheme="teal" size="sm" onClick={() => cleanFilters()}>
          Limpar Filtros
        </Button>
      </Flex>
      <Box
        bg="blue.800"
        borderRadius="0.25rem"
        mb="3rem"
        w={['21rem', '22.5rem']}
      >
        <Flex
          py="0.5rem"
          pl={isWideVersion ? '0.7rem' : ''}
          justify={isWideVersion ? '' : 'center'}
        >
          <Box mr="1rem">
            <Select
              placeholder="ID"
              focusBorderColor="teal.500"
              color="gray.400"
              bg="blue.900"
              borderColor="blue.200"
              _hover={{
                bgColor: 'blue.900',
              }}
              onChange={(event) => setIdFilter(Number(event.target.value))}
              disabled={mPreparoFilter !== ''}
            >
              {filters?.id?.map((i) => (
                <option key={i} value={i} style={{ background: '#1A365D' }}>
                  {i}
                </option>
              ))}
            </Select>
          </Box>
          <Box>
            <Select
              placeholder="Mestre do Preparo"
              focusBorderColor="teal.500"
              color="gray.400"
              bg="blue.900"
              borderColor="blue.200"
              _hover={{
                bgColor: 'blue.900',
              }}
              onChange={handleDirigenteFilterChange}
              disabled={idFilter !== 0}
            >
              {filters?.dirigente?.map((i) => (
                <option key={i} value={i} style={{ background: '#1A365D' }}>
                  {`M. ${i}`}
                </option>
              ))}
            </Select>
          </Box>
        </Flex>
      </Box>
      {data?.length === 0 ? (
        <NoData />
      ) : (
        <SimpleGrid columns={[2, 3]} spacing="2.5rem">
          {isLoading ? (
            <Flex justify="center" mt="5" w={['30rem', '73rem']}>
              <Spinner />
            </Flex>
          ) : (
            <>
              {idFilter === 0 && mPreparoFilter === ''
                ? data.map((i) => (
                    <Box key={i.cod}>
                      {isWideVersion ? (
                        <IndividualGraphBar
                          dataAtual={i.qtdAtual}
                          dataEntrada={i.qtd}
                          dataId={i.cod}
                          dataTipoVegetal={i.tipoMariri}
                          dataMestreDirigente={i.mpreparo}
                          dataObs={i.obs}
                        />
                      ) : (
                        <IndividualMobileCard
                          dataAtual={i.qtdAtual}
                          dataEntrada={i.qtd}
                          dataId={i.cod}
                          dataTipoVegetal={i.tipoMariri}
                          dataMestreDirigente={i.mpreparo}
                          dataObs={i.obs}
                        />
                      )}
                    </Box>
                  ))
                : idFilter !== 0 && mPreparoFilter === ''
                ? dataFilterId.map((i) => (
                    <Box key={i.cod}>
                      {isWideVersion ? (
                        <IndividualGraphBar
                          dataAtual={i.qtdAtual}
                          dataEntrada={i.qtd}
                          dataId={i.cod}
                          dataTipoVegetal={i.tipoMariri}
                          dataMestreDirigente={i.mpreparo}
                          dataObs={i.obs}
                        />
                      ) : (
                        <IndividualMobileCard
                          dataAtual={i.qtdAtual}
                          dataEntrada={i.qtd}
                          dataId={i.cod}
                          dataTipoVegetal={i.tipoMariri}
                          dataMestreDirigente={i.mpreparo}
                          dataObs={i.obs}
                        />
                      )}
                    </Box>
                  ))
                : dataFilterMPreparo.map((i) => (
                    <Box key={i.cod}>
                      {isWideVersion ? (
                        <IndividualGraphBar
                          dataAtual={i.qtdAtual}
                          dataEntrada={i.qtd}
                          dataId={i.cod}
                          dataTipoVegetal={i.tipoMariri}
                          dataMestreDirigente={i.mpreparo}
                          dataObs={i.obs}
                        />
                      ) : (
                        <IndividualMobileCard
                          dataAtual={i.qtdAtual}
                          dataEntrada={i.qtd}
                          dataId={i.cod}
                          dataTipoVegetal={i.tipoMariri}
                          dataMestreDirigente={i.mpreparo}
                          dataObs={i.obs}
                        />
                      )}
                    </Box>
                  ))}
            </>
          )}
        </SimpleGrid>
      )}
    </Box>
  );
}
