import {
  Badge,
  Box,
  Flex,
  SimpleGrid,
  Text,
  theme,
  useBreakpointValue,
} from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import { ApexOptions } from 'apexcharts';
import { Header } from '../components/Header';
import { SideBar } from '../components/Sidebar';

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
});

const total = 172;
const seriesPie = [44, 55, 41, 17, 15];
const optionsPie: ApexOptions = {
  chart: {
    type: 'donut',
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[300],
  },
  dataLabels: {
    enabled: false,
  },
  labels: ['ID: 29', 'ID: 39', 'ID: 45', 'ID: 54', 'ID: 93'],
};
const optionsPieMobile: ApexOptions = {
  chart: {
    type: 'donut',
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[300],
  },
  dataLabels: {
    enabled: true,
  },
  labels: ['ID: 29', 'ID: 39', 'ID: 45', 'ID: 54', 'ID: 93'],
};

const options = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[300],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    type: 'datetime',
    axisBorder: {
      color: theme.colors.gray[300],
    },
    axisTricks: {
      color: theme.colors.gray[300],
    },
    categories: [
      '2021-12-31T00:00:00.000Z',
      '2022-01-01T00:00:00.000Z',
      '2022-01-06T00:00:00.000Z',
      '2022-01-15T00:00:00.000Z',
      '2022-01-22T00:00:00.000Z',
      '2022-02-05T00:00:00.000Z',
      '2022-02-10T00:00:00.000Z',
    ],
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3,
    },
  },
} as const;

const series = [
  {
    name: 'series-1',
    data: [20, 14, 10, 18, 12, 9, 15],
  },
];

export default function Dashboard() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });
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
          <Box p={['6', '8']} bg="blue.800" borderRadius={8} pb="4">
            <Text fontSize="lg" mb="4">
              Quantidade em estoque:{' '}
              <Badge
                colorScheme={total < 50 ? 'red' : 'green'}
                variant="solid"
                fontSize="md"
                ml="3"
              >
                {' '}
                {total} L{' '}
              </Badge>
            </Text>
            {isWideVersion ? (
              <Chart
                options={optionsPie}
                series={seriesPie}
                type="donut"
                height={173}
              />
            ) : (
              <Chart
                options={optionsPieMobile}
                series={seriesPie}
                type="donut"
                height={173}
              />
            )}
          </Box>

          <Box p={['6', '8']} bg="blue.800" borderRadius={8} pb="4">
            <Text fontSize="lg" mb="4">
              Consumo
            </Text>
            <Chart options={options} series={series} type="area" height={160} />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
