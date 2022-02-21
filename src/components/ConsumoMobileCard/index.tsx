import {
  Heading,
  Box,
  Center,
  Flex,
  Text,
  Stack,
  Badge,
} from '@chakra-ui/react';

interface VegetalMobileCardProps {
  cod: number;
  tipoSessao: string;
  data: string;
  dirigente: string;
  consumo: number;
  assistente: string;
  pessoas: number;
}

export function ConsumoMobileCard({
  cod,
  tipoSessao,
  data,
  dirigente,
  consumo,
  assistente,
  pessoas,
}: VegetalMobileCardProps) {
  return (
    <>
      <Center py={6}>
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
              {cod}
            </Box>
          </Flex>

          <Box p={6}>
            <Stack spacing={0} align={'center'} mb={2}>
              <Heading fontSize={'2xl'} fontWeight="bold" color="green.900">
                {tipoSessao}
              </Heading>
              <Text color={'gray.600'}>{dirigente}</Text>
              <Text color={'gray.500'} fontSize="sm">
                {data}
              </Text>
            </Stack>

            <Stack direction={'row'} justify={'center'} spacing={6}>
              <Stack spacing={0} align={'center'}>
                <Text fontWeight={600}>
                  <Badge colorScheme={'green'} variant="solid" fontSize="md">
                    {consumo}
                  </Badge>
                </Text>
                <Text fontSize={'sm'} color={'gray.500'}>
                  Litros
                </Text>
              </Stack>
              <Stack spacing={0} align={'center'}>
                <Text fontWeight={600} color="gray.500">
                  {assistente}
                </Text>
                <Text fontSize={'sm'} color={'gray.500'}>
                  {pessoas} pessoas
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Box>
      </Center>
    </>
  );
}
