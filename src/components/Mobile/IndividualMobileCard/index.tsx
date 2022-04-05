import { Badge, Box, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import { ApexOptions } from 'apexcharts';
import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
});

interface IndividualMobileCardProps {
  dataAtual: number;
  dataEntrada: number;
  dataId: number;
  dataTipoVegetal: string;
  dataMestreDirigente: string;
  dataObs: string;
}

export function IndividualMobileCard({
  dataAtual,
  dataEntrada,
  dataId,
  dataTipoVegetal,
  dataMestreDirigente,
  dataObs,
}: IndividualMobileCardProps) {
  const series = [
    {
      name: 'Atual',
      data: [dataAtual],
      color: '#3FA169',
    },
    {
      name: 'Entrada',
      data: [dataEntrada],
      color: '#718096',
    },
  ];

  const options: ApexOptions = {
    chart: {
      type: 'bar',
      height: 430,
      toolbar: {
        show: false,
      },
      foreColor: '#EDF2F7',
    },

    plotOptions: {
      bar: {
        horizontal: true,
        dataLabels: {
          position: 'top',
        },
      },
    },
    dataLabels: {
      enabled: true,
      offsetX: -6,
      style: {
        fontSize: '14px',
        fontWeight: 'bold',
        colors: ['#fff'],
      },
    },
    stroke: {
      show: true,
      width: 1,
      colors: ['#1A365D'],
    },

    tooltip: {
      enabled: false,
      // shared: false,
      // intersect: false,
    },

    xaxis: {
      categories: [dataId],
      labels: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
  };

  return (
    <Box bg="blue.800" borderRadius="0.25rem" w="10rem">
      <Flex align="center" justify="space-between" ml="1rem" pt="0.5rem">
        <Flex>
          <Flex
            bg="gray.600"
            w="2.5rem"
            h="2.5rem"
            borderRadius="100%"
            alignItems="center"
            justify="center"
          >
            <Text fontSize="xl" fontWeight="bold" color="gray.100">
              {dataId}
            </Text>
          </Flex>
          <Stack>
            <Box>
              <Text
                ml="0.5rem"
                fontWeight="bold"
                color="gray.100"
                fontSize="xl"
              >
                {dataTipoVegetal}
              </Text>
            </Box>
            <Box>
              <Text color="gray.400" mt="-0.7rem" ml="0.5rem" fontSize="sm">
                {dataMestreDirigente}
              </Text>
            </Box>
          </Stack>
        </Flex>
      </Flex>
      <Flex justify="center">
        <Badge
          colorScheme={dataAtual < 10 ? 'red' : 'green'}
          variant="solid"
          mt="0.5rem"
        >
          <Text fontSize="sm" fontWeight="bold" color="gray.100">
            {`${dataAtual} Litros`}
          </Text>
        </Badge>
      </Flex>
      {dataObs ? (
        <>
          <Flex justify="center" mt="0.3rem" px="0.5rem">
            <Text
              fontSize="xs"
              color="gray.400"
              fontWeight="bold"
              overflow-wrap="break-word"
              textAlign="center"
            >
              {dataObs}
            </Text>
          </Flex>
          <Chart options={options} series={series} type="bar" height={120} />
        </>
      ) : (
        <Flex h="9.83rem">
          <Chart options={options} series={series} type="bar" height={120} />
        </Flex>
      )}
    </Box>
  );
}
