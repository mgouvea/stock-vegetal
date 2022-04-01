import { Box, Flex, SimpleGrid, Spinner, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useVegetal } from '../../services/hooks/useVegetal';
import { IndividualGraphBar } from '../Graphs/IndividualGraphBar';
import NoData from '../NoData';

export function DashIndividial() {
  const { data } = useVegetal();
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    if (data === undefined) {
      setIsloading(true);
    } else {
      setIsloading(false);
    }
  }, [data]);
  return (
    <Box>
      <SimpleGrid columns={3} spacing="40px">
        {data?.length === 0 ? (
          <NoData />
        ) : isLoading ? (
          <Flex justify="center" mt="5">
            <Spinner />
          </Flex>
        ) : (
          <>
            {data.map((i) => (
              <Box>
                <IndividualGraphBar
                  dataAtual={i.qtdAtual}
                  dataEntrada={i.qtd}
                  dataId={i.cod}
                  dataTipoVegetal={i.tipoMariri}
                  dataMestreDirigente={i.mpreparo}
                />
              </Box>
            ))}
          </>
        )}
      </SimpleGrid>
    </Box>
  );
}
