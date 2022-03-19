import { Box, Text, theme } from '@chakra-ui/react';
import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
});

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

export function LineBarConsumo() {
  return (
    <Box p={['6', '8']} bg="blue.800" borderRadius={8} pb="4">
      <Text fontSize="lg" mb="4">
        Consumo
      </Text>
      <Chart options={options} series={series} type="area" height={160} />
    </Box>
  );
}
