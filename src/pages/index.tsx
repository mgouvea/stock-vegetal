import { Flex, Button, Stack, Text, Icon } from '@chakra-ui/react';
import { RiStarFill } from 'react-icons/ri';

import { Input } from '../components/Forms/Input';

export default function Home() {
  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
      direction="column"
    >
      <Flex mb="7">
        {/* LOGO */}
        <Icon fontSize="3xl" mr="2" mt="1" color="orange.300" as={RiStarFill} />
        <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight">
          Sala do Vegetal
          <Text as="span" ml="1" color="orange.300">
            .
          </Text>
        </Text>
      </Flex>
      <Flex
        as="form"
        w="100%"
        maxWidth={360}
        bg="blue.800"
        p="8"
        borderRadius={8}
        flexDir="column"
      >
        <Stack spacing="4">
          <Input type="email" name="email" label="E-mail" />
          <Input type="password" name="password" label="Senha" />
        </Stack>

        <Button type="submit" mt="6" colorScheme="teal">
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
