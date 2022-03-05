import {
  Heading,
  Box,
  Center,
  Flex,
  Text,
  Stack,
  Badge,
} from '@chakra-ui/react';

// interface VegetalMobileCardProps {
//   cod: number;
//   tipoSessao: string;
//   data: string;
//   dirigente: string;
//   consumo: number;
//   assistente: string;
//   pessoas: number;
// }

export function ConsumoMobileCard({ data }) {
  return (
    <>
      {data?.map((c) => (
        <Center py={6} key={c.id}>
          <Box
            maxW={'270px'}
            w={210}
            bg="gray.300"
            boxShadow={'2xl'}
            rounded="xl"
            overflow="hidden"
          >
            <Box h={'50px'} w={'full'} bg="blue.800" objectFit={'cover'} />
            <Flex justify={'center'} mt={-12}>
              <Box
                bg="gray.600"
                w={100}
                h={100}
                borderRadius="full"
                display="flex"
                alignItems="center"
                justifyContent="center"
                fontSize="3xl"
              >
                {c.cod}
              </Box>
            </Flex>

            <Box p={6}>
              <Stack spacing={0} align={'center'} mb={2}>
                <Heading fontSize={'2xl'} fontWeight="bold" color="green.900">
                  {c.tipoSessao}
                </Heading>
                <Text color={'gray.600'}>{c.dirigente}</Text>
                <Text color={'gray.500'} fontSize="sm">
                  {c.dataSessao}
                </Text>
              </Stack>

              <Stack direction={'row'} justify={'center'} spacing={6}>
                <Stack spacing={0} align={'center'}>
                  <Text fontWeight={600}>
                    <Badge
                      colorScheme={'red'}
                      variant="solid"
                      fontSize="md"
                      borderRadius="md"
                    >
                      {c.consumo}
                    </Badge>
                  </Text>
                  <Text fontSize={'sm'} color={'gray.500'}>
                    Litros
                  </Text>
                </Stack>
                <Stack spacing={0} align={'center'}>
                  <Text fontWeight={600} color="gray.500">
                    {c.assistente}
                  </Text>
                  <Text fontSize={'sm'} color={'gray.500'}>
                    {c.qtdPessoas} pessoas
                  </Text>
                </Stack>
              </Stack>
            </Box>
          </Box>
        </Center>
      ))}
    </>
  );
}
