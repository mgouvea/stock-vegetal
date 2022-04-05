import {
  Badge,
  Box,
  Button,
  Flex,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useToast,
} from '@chakra-ui/react';

import { AiOutlineCloseCircle } from 'react-icons/ai';
import { FiEdit } from 'react-icons/fi';
import { useMutation, useQueryClient } from 'react-query';
import { api } from '../../services/api';
import { useVegetal } from '../../services/hooks/useVegetal';

const textTitleColor = 'byellow.500';
const textFieldColor = 'gray.300';

type DeleteVegetalRow = {
  id: object;
  cod: number;
  tipoMariri: string;
  tipoChacrona: string;
  qtd: number;
  qtdAtual: number;
  dataPreparo: string;
  npreparo: string;
  mpreparo: string;
  origemMariri: string;
  origemChacrona: string;
  obs: string;
};

export function TableVegetal({}) {
  const { data } = useVegetal();
  const toast = useToast();

  // let orderCod = data?.map((i) => i.cod);
  let newOrderCod = data?.sort((a, b) => a.cod - b.cod);

  const queryClient = useQueryClient();
  // const deleteVegetal = useMutation(
  //   async (vegetalToDelete: DeleteVegetalRow) => {
  //     const response = await api.delete(`/vegetal/${vegetalToDelete.id}`, {
  //       data: vegetalToDelete,
  //     });
  //     return response.data.consumo;
  //   },
  //   {
  //     onSuccess: () => {
  //       queryClient.invalidateQueries('vegetal');
  //     },
  //   }
  // );

  async function handleDelete(id) {
    toast({
      title: `Funcionalidade sendo implementada`,
      status: 'info',
      isClosable: true,
    });
    // try {
    //   // await deleteVegetal.mutateAsync(id);

    //   // routes.push('/consumo');
    // } catch (err) {
    //   console.log('error', err.message);
    // }
  }
  // console.log(data);

  return (
    <>
      <Table colorScheme="whiteAlpha">
        <Thead>
          <Tr>
            <Th color={textTitleColor} width="6">
              ID
            </Th>
            <Th color={textTitleColor} width="10">
              VEGETAL
            </Th>
            <Th color={textTitleColor}>PREPARO</Th>
            <Th color={textTitleColor}>QTD</Th>
            <Th color={textTitleColor}>QTD ATUAL</Th>
            <Th color={textTitleColor}>OBS</Th>
            <Th color={textTitleColor}>Ações</Th>
          </Tr>
        </Thead>
        <Tbody>
          {newOrderCod?.map((veg) => (
            <Tr key={veg.cod}>
              <Td fontWeight="bold">{veg.cod}</Td>
              <Td color={textFieldColor}>{veg.tipoMariri}</Td>
              <Td>
                <Box>
                  <Text color={textFieldColor} fontWeight="bold">
                    M. {veg.mpreparo}
                  </Text>
                  <Text fontSize="sm" color="gray.400">
                    {veg.npreparo}
                  </Text>
                  <Text fontSize="sm" color="gray.400">
                    {veg.dataPreparo}
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
              <Td color={textFieldColor}>{veg.obs}</Td>
              <Td fontSize={'2xl'}>
                <Flex>
                  <Box
                    cursor="pointer"
                    color="gray.300"
                    mr={5}
                    ml={1}
                    _hover={{ color: 'red.500' }}
                    onClick={() => handleDelete(veg.id)}
                  >
                    <AiOutlineCloseCircle size={25} />
                  </Box>
                  <Box
                    cursor="pointer"
                    color="gray.300"
                    _hover={{ color: 'orange.300' }}
                    onClick={() => handleDelete(veg.id)}
                  >
                    <FiEdit />
                  </Box>
                </Flex>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </>
  );
}
