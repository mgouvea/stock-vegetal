import { Flex, Text, Input, Icon, HStack, Box, Avatar } from '@chakra-ui/react';
import {
  RiNotificationLine,
  RiSearchLine,
  RiUserAddLine,
} from 'react-icons/ri';
import { RiStarFill } from 'react-icons/ri';

export function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      // mt="4"
      px="6"
      align="center"
      bg="blue.900"
      borderBottom="1px"
      borderColor="blue.700"
    >
      {/* LOGO */}
      <Icon fontSize="3xl" mr="2" mb="1" color="orange.300" as={RiStarFill} />
      <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight" w="64">
        Sala do Vegetal
        <Text as="span" ml="1" color="orange.300">
          .
        </Text>
      </Text>

      {/* Campo de busca */}
      <Flex
        as="label"
        flex="1"
        py="4"
        px="8"
        ml="6"
        maxWidth={400}
        alignSelf="center"
        color="blue.300"
        position="relative"
        bg="blue.800"
        borderRadius="full"
      >
        <Input
          color="blue.50"
          variant="unstyled"
          px="4"
          mr="4"
          placeholder="Buscar na plataforma"
          _placeholder={{ color: 'gray.400' }}
        />
        <Icon as={RiSearchLine} fontSize="20" />
      </Flex>

      {/* Área direita do Header */}
      <Flex align="center" ml="auto">
        {/* Botão de ações */}
        <HStack
          spacing="8"
          mx="8"
          pr="8"
          py="1"
          color="blue.300"
          borderRightWidth={1}
          borderColor="blue.700"
        >
          <Icon as={RiNotificationLine} fontSize="20" />
          <Icon as={RiUserAddLine} fontSize="20" />
        </HStack>

        {/* Usuário */}
        <Flex>
          <Box mr="4" textAlign="right">
            <Text>Mateus Gouvêa</Text>
            <Text color="gray.400" fontSize="small">
              falamateus.gouvea@gmail.com
            </Text>
          </Box>

          {/* Foto de perfil */}
          <Avatar
            size="md"
            name="Mateus Gouvea"
            src="https://github.com/mgouvea.png"
          />
        </Flex>
      </Flex>
    </Flex>
  );
}
