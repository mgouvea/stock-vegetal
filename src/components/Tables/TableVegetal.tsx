import {
  Badge,
  Box,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';

export function TableVegetal({ data }) {
  return (
    <>
      <Table colorScheme="whiteAlpha">
        <Thead>
          <Tr>
            <Th color="gray.500" width="6">
              ID
            </Th>
            <Th color="gray.500" width="10">
              VEGETAL
            </Th>
            <Th color="gray.500">PREPARO</Th>
            <Th color="gray.500">QTD</Th>
            <Th color="gray.500">QTD ATUAL</Th>
            <Th color="gray.500">OBS</Th>
            <Th color="gray.500">DATA</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data?.map((veg) => (
            <Tr key={veg.id}>
              <Td>{veg.cod}</Td>
              <Td>{veg.tipoMariri}</Td>
              <Td>
                <Box>
                  <Text fontWeight="bold">M. {veg.mpreparo}</Text>
                  <Text fontSize="sm" color="gray.300">
                    {veg.npreparo}
                  </Text>
                </Box>
              </Td>
              <Td>
                <Badge colorScheme={'gray'} variant="solid" fontSize="md">
                  {veg.qtd} L
                </Badge>
              </Td>
              <Td>
                <Badge
                  colorScheme={veg.qtdAtual < 21 ? 'red' : 'green'}
                  variant="solid"
                  fontSize="md"
                >
                  {veg.qtdAtual} L
                </Badge>
              </Td>
              <Td>{veg.obs}</Td>
              <Td>{veg.dataPreparo}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </>
  );
}
