import { Flex, SimpleGrid, Spinner } from '@chakra-ui/react';
import { LineBarConsumo } from '../components/Graphs/LineBarConsumo';

import { Header } from '../components/Header';
import { SideBar } from '../components/Sidebar';
import { useEffect, useState } from 'react';
import { TotalChartPie } from '../components/Graphs/TotalChartPie';
import { useVegetal } from '../services/hooks/useVegetal';

export default function Dashboard() {
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
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <SideBar />
        <SimpleGrid
          flex="1"
          gap="4"
          minChildWidth="320px"
          alignItems="flex-start"
        >
          {isLoading ? (
            <Flex justify="center" mt="5">
              <Spinner />
            </Flex>
          ) : (
            <>
              <TotalChartPie />
              <LineBarConsumo />
            </>
          )}
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
