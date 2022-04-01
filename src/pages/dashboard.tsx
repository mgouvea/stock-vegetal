import {
  Box,
  Flex,
  SimpleGrid,
  Spinner,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from '@chakra-ui/react';
import { LineBarConsumo } from '../components/Graphs/LineBarConsumo';

import { Header } from '../components/Header';
import { SideBar } from '../components/Sidebar';
import { useEffect, useState } from 'react';
import { TotalChartPie } from '../components/Graphs/TotalChartPie';
import { useVegetal } from '../services/hooks/useVegetal';
import NoData from '../components/NoData';
import { DashComponent } from '../components/DashComponent';
import { DashIndividial } from '../components/DashComponent/DashIndividual';
// import { VegDashCard } from '../components/VegDashCard';

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

        <Tabs isFitted variant="enclosed" w="100%" colorScheme="whiteAlpha">
          <TabList mb="1em">
            <Tab>Geral</Tab>
            <Tab>Individual</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <DashComponent />
            </TabPanel>
            <TabPanel>
              <DashIndividial />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </Flex>
  );
}
