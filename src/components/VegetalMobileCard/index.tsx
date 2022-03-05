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
//   vegetal: string;
//   nucleo: string;
//   mestre: string;
//   qtd: number;
//   grau: string;
//   data: string;
// }

export function VegetalMobileCard({ data }) {
  return (
    <>
      {data?.map((veg) => (
        <Center py={6} key={veg.id}>
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
                {veg.cod}
              </Box>
            </Flex>

            <Box p={6}>
              <Stack spacing={0} align={'center'} mb={2}>
                <Heading fontSize={'2xl'} fontWeight="bold" color="green.900">
                  {veg.tipoMariri}
                </Heading>
                <Text color={'gray.600'}>M. {veg.mpreparo}</Text>
                <Text color={'gray.500'} fontSize="sm">
                  {veg.npreparo}
                </Text>
              </Stack>

              <Stack direction={'row'} justify={'center'} spacing={6}>
                <Stack spacing={0} align={'center'}>
                  <Text fontWeight={600}>
                    <Badge
                      colorScheme={'green'}
                      variant="solid"
                      fontSize="md"
                      borderRadius="md"
                    >
                      {veg.qtd}
                    </Badge>
                  </Text>
                  <Text fontSize={'sm'} color={'gray.500'}>
                    Litros
                  </Text>
                </Stack>
                <Stack spacing={0} align={'center'}>
                  <Text fontWeight={600} color="gray.500">
                    {veg.grau}
                  </Text>
                  <Text fontSize={'sm'} color={'gray.500'}>
                    {veg.dataPreparo}
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
