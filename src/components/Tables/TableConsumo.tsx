import {
  Badge,
  Box,
  HStack,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';

export function TableConsumo({ data }) {
  return (
    <Table colorScheme="whiteAlpha">
      <Thead>
        <Tr>
          <Th color="gray.500" width="6">
            ID
          </Th>
          <Th color="gray.500" width="10">
            TIPO SESSÃO
          </Th>
          <Th color="gray.500" w="6">
            DIRIGENTE
          </Th>
          <Th color="gray.500" w="6">
            CONSUMO
          </Th>
          <Th color="gray.500" w="6">
            ASSISTENTE - AUXILIAR(ES)
          </Th>
          <Th color="gray.500" w="6">
            INFORMAÇÕES SESSÃO
          </Th>
          <Th color="gray.500" w="6">
            PESSOAS
          </Th>
        </Tr>
      </Thead>
      <Tbody>
        {data?.map((cons) => (
          <Tr key={cons.id}>
            <Td>{cons.cod}</Td>
            <Td>
              <Box>
                <Text fontWeight="bold">{cons.tipoSessao}</Text>
                <Text fontSize="sm" color="gray.300">
                  {cons.dataSessao}
                </Text>
              </Box>
            </Td>
            <Td fontWeight="bold">{cons.dirigente}</Td>
            <Td>
              <Badge colorScheme={'red'} variant="solid" fontSize="md">
                {cons.consumo} L
              </Badge>
            </Td>
            <Td>
              <Box>
                <Text fontWeight="bold">{cons.assistente}</Text>
                <Text fontSize="sm" color="gray.300">
                  {cons.auxiliar}
                </Text>
              </Box>
            </Td>
            <Td>
              <Box>
                <HStack spacing="2">
                  <Text fontWeight="bold">Leitura:</Text>
                  <Text fontSize="sm" color="gray.300">
                    {cons.leitura}
                  </Text>
                </HStack>
                <HStack spacing="2">
                  <Text fontWeight="bold">Explanação:</Text>
                  <Text fontSize="sm" color="gray.300">
                    {cons.explanacao}
                  </Text>
                </HStack>
              </Box>
            </Td>
            <Td>
              <Box>
                <HStack spacing="2">
                  <Text fontWeight="bold">Pessoas:</Text>
                  <Text fontSize="sm" color="gray.300">
                    {cons.qtdPessoas}
                  </Text>
                </HStack>
                <HStack spacing="2">
                  <Text fontWeight="bold">Repetições:</Text>
                  <Text fontSize="sm" color="gray.300">
                    {cons.repeticoes}
                  </Text>
                </HStack>
              </Box>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
}
