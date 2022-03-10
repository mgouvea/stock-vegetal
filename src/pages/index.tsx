import {
  Flex,
  Button,
  Stack,
  Text,
  Icon,
  useBreakpointValue,
} from '@chakra-ui/react';
import { RiStarFill } from 'react-icons/ri';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { Input } from '../components/Forms/Input';
import { useForm } from 'react-hook-form';
import Footer from '../components/Footer';

import { useRouter } from 'next/dist/client/router';

type SignInFormData = {
  email: string;
  password: string;
};

const signInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória'),
});

export default function Home() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema),
  });

  const { errors } = formState;

  return (
    <Stack justify="space-between" h="100vh">
      <Flex
        w="100vw"
        h="100vh"
        align="center"
        justify="center"
        direction="column"
      >
        <Flex mb="7">
          {/* LOGO */}
          <Icon
            fontSize="3xl"
            mr="2"
            mt="1"
            color="orange.300"
            as={RiStarFill}
          />
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
          // onSubmit={handleSubmit(handleSignIn)}
        >
          <Stack spacing="4">
            <Input
              type="email"
              name="email"
              label="E-mail"
              error={errors.email}
              {...register('email')}
            />
            <Input
              type="password"
              name="password"
              label="Senha"
              error={errors.password}
              {...register('password')}
            />
          </Stack>

          <Button
            type="submit"
            mt="6"
            colorScheme="teal"
            isLoading={formState.isSubmitting}
          >
            Entrar
          </Button>
          {/* <IconButton
            aria-label="Entrar com google"
            // colorScheme="whiteAlpha"
            mt="4"
            icon={<FcGoogle fontSize="20" />}
            onClick={sigInGoogle}
          /> */}
          {/* <Text color="gray.400" fontSize="sm" textAlign="center" mt="1">
            Entrar com google
          </Text> */}
        </Flex>
      </Flex>
      <Footer />
    </Stack>
  );
}
