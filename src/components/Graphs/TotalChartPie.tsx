import { Badge, Box, Text, theme, useBreakpointValue } from '@chakra-ui/react';

import dynamic from 'next/dynamic';
import { ApexOptions } from 'apexcharts';
import { useVegetal } from '../../services/hooks/useVegetal';
import { useConsumo } from '../../services/hooks/useConsumo';

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
});

export function TotalChartPie() {
  const { data } = useVegetal();
  const dataConsumo = useConsumo();

  // const consumoSessao = dataConsumo?.data?.map((item) => ({
  //   cod: item.cod,
  //   consumo: item.consumo,
  // }));

  // const arrayQtd = isLoading
  //   ? ''
  //   : data?.map((item) => ({
  //       cod: item.cod,
  //       qtdAtual: item.qtdAtual,
  //     }));

  // let qtdAtualArray = [];
  // const arrayQtdArrayAux = arrayQtd.find(
  //   (i) => i.cod ===
  // );

  // OPTIONS GRAPH PIE
  // __________________________________

  const qtdAtual = data?.map((item) => item.qtdAtual);
  const seriesPie = qtdAtual;

  const sum = (accumulator, count) => accumulator + count;
  const total = qtdAtual?.reduce(sum);

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
    labels: data?.map((item) => `ID: ${item.cod}`),
  };

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
    // labels: ['ID: 29', 'ID: 39', 'ID: 45', 'ID: 54', 'ID: 93'],
    labels: data?.map((item) => `ID: ${item.cod}`),
  };

  //______________________________________

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
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
  );
}
