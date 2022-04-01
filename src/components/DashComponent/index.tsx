import { Box, Flex, SimpleGrid, Spinner } from '@chakra-ui/react';
import { LineBarConsumo } from '../Graphs/LineBarConsumo';

import { Header } from '../Header';
import { SideBar } from '../Sidebar';
import { useEffect, useState } from 'react';
import { TotalChartPie } from '../Graphs/TotalChartPie';
import { useVegetal } from '../../services/hooks/useVegetal';
import NoData from '../../components/NoData';
// import { VegDashCard } from '../components/VegDashCard';

export function DashComponent() {
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
    <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
      {data?.length === 0 ? (
        <NoData />
      ) : (
        <SimpleGrid
          flex="1"
          gap="4"
          columns={2}
          minChildWidth="320px"
          alignItems="flex-start"
        >
          {isLoading ? (
            <Flex justify="center" mt="5">
              <Spinner />
            </Flex>
          ) : (
            <>
              <Box>
                <TotalChartPie />
              </Box>
              <Box>
                <LineBarConsumo />
              </Box>
            </>
          )}
        </SimpleGrid>
      )}
    </Flex>
  );
}
