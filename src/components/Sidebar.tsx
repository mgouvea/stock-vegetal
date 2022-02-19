import { Box, Icon, Link, Stack, Text } from '@chakra-ui/react';
import {
  // RiAddCircleLine,
  RiContactsLine,
  RiDashboardLine,
} from 'react-icons/ri';
// import { HiOutlineViewGridAdd } from 'react-icons/hi';
import { GiGlassShot, GiWaterBottle } from 'react-icons/gi';

export function SideBar() {
  return (
    <Box
      as="aside"
      w="64"
      mr="8"
      bg="blue.900"
      borderRight="1px"
      borderColor="blue.700"
      p="1"
      h="xl"
    >
      <Stack spacing="12" align="flex-start">
        {/* GERAL */}
        <Box>
          <Text fontWeight="bold" color="gray.400" fontSize="small">
            GERAL
          </Text>

          <Stack spacing="4" mt="8" align="stretch">
            <Link display="flex" color="teal.400" alignItems="center">
              <Icon as={RiDashboardLine} fontSize="20" />
              <Text ml="4" fontWeight="medium">
                Dashboard
              </Text>
            </Link>
          </Stack>
        </Box>

        {/* Registos */}
        <Box>
          <Text fontWeight="bold" color="gray.400" fontSize="small">
            REGISTROS
          </Text>

          <Stack spacing="4" mt="8" align="stretch">
            <Link display="flex" alignItems="center">
              <Icon as={GiWaterBottle} fontSize="25" />
              <Text ml="4" fontWeight="medium">
                Entrada de vegetal
              </Text>
            </Link>
            <Link display="flex" alignItems="center">
              <Icon as={GiGlassShot} fontSize="22" />
              <Text ml="4" fontWeight="medium">
                Consumo
              </Text>
            </Link>
          </Stack>
        </Box>

        {/* Acessos */}
        <Box>
          <Text fontWeight="bold" color="gray.400" fontSize="small">
            ACESSOS
          </Text>

          <Stack spacing="4" mt="8" align="stretch">
            <Link display="flex" alignItems="center">
              <Icon as={RiContactsLine} fontSize="20" />
              <Text ml="4" fontWeight="medium">
                Usuários
              </Text>
            </Link>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}
