import {
  Flex,
  Stack,
  Heading,
  Text,
  Button,
  useColorModeValue,
  useBreakpointValue,
  Image,
} from '@chakra-ui/react';
import Link from 'next/link';

const imgLink =
  'https://cdn-icons.flaticon.com/png/512/4380/premium/4380752.png?token=exp=1647722385~hmac=2c8bba796e6af188289635468a38cf8e';

export default function NoData() {
  // const isWideVersion = useBreakpointValue({
  //   base: false,
  //   lg: true,
  // });

  return (
    <Flex mx={'auto'} mt="3">
      <Stack
        boxShadow={'2xl'}
        // bg={useColorModeValue('blue.800', 'gray.900')}
        bg="blue.800"
        rounded={'xl'}
        p={10}
        spacing={8}
        align={'center'}
        justify={'center'}
      >
        {/* <Icon as={DataBaseIcon} w={24} h={24} /> */}
        <Image src={imgLink} w={24} h={24} />
        <Stack align={'center'} spacing={2}>
          <Heading
            textTransform={'uppercase'}
            fontSize={['xl', '3xl']}
            alignItems={'center'}
            color={useColorModeValue('byellow.500', 'gray.200')}
          >
            Não existem registros
          </Heading>
          <Text fontSize={'lg'} align={['center', 'start']} color={'gray.400'}>
            Em nossos bancos de dados. Começe a cadastrar agora mesmo !
          </Text>
        </Stack>
        <Stack spacing={4} direction={{ base: 'column', md: 'row' }} w={'full'}>
          <Link as="a" href="/vegetal" passHref>
            <Button
              bg={'blue.400'}
              rounded={'full'}
              color={'white'}
              flex={'1 0 auto'}
              _hover={{ bg: 'blue.500' }}
              _focus={{ bg: 'blue.500' }}
            >
              Ir para Registros de Entrada
            </Button>
          </Link>
        </Stack>
      </Stack>
    </Flex>
  );
}

// const NotificationIcon = createIcon({
//   displayName: 'Notification',
//   viewBox: '0 0 128 128',
//   path: (
//     <g>
// 	<g>
// 		<path style="fill:#545E73;" d="M49.455,8L49.455,8C48.724,3.538,38.281,0,25.5,0S2.276,3.538,1.545,8l0,0H1.5v0.5V20v0.5V21v11
// 			v0.5V33v12h0.045c0.731,4.461,11.175,8,23.955,8s23.224-3.539,23.955-8H49.5V33v-0.5V32V21v-0.5V20V8.5V8H49.455z"/>
// 		<g>
// 			<path style="fill:#38454F;" d="M25.5,41c-13.255,0-24-3.806-24-8.5V45h0.045c0.731,4.461,11.175,8,23.955,8
// 				s23.224-3.539,23.955-8H49.5V32.5C49.5,37.194,38.755,41,25.5,41z"/>
// 			<path style="fill:#38454F;" d="M1.5,32v0.5c0-0.168,0.018-0.334,0.045-0.5H1.5z"/>
// 			<path style="fill:#38454F;" d="M49.455,32c0.027,0.166,0.045,0.332,0.045,0.5V32H49.455z"/>
// 		</g>
// 		<g>
// 			<path style="fill:#556080;" d="M25.5,29c-13.255,0-24-3.806-24-8.5V33h0.045c0.731,4.461,11.175,8,23.955,8
// 				s23.224-3.539,23.955-8H49.5V20.5C49.5,25.194,38.755,29,25.5,29z"/>
// 			<path style="fill:#556080;" d="M1.5,20v0.5c0-0.168,0.018-0.334,0.045-0.5H1.5z"/>
// 			<path style="fill:#556080;" d="M49.455,20c0.027,0.166,0.045,0.332,0.045,0.5V20H49.455z"/>
// 		</g>
// 		<ellipse style="fill:#91BAE1;" cx="25.5" cy="8.5" rx="24" ry="8.5"/>
// 		<g>
// 			<path style="fill:#8697CB;" d="M25.5,17c-13.255,0-24-3.806-24-8.5V21h0.045c0.731,4.461,11.175,8,23.955,8
// 				s23.224-3.539,23.955-8H49.5V8.5C49.5,13.194,38.755,17,25.5,17z"/>
// 			<path style="fill:#8697CB;" d="M1.5,8v0.5c0-0.168,0.018-0.334,0.045-0.5H1.5z"/>
// 			<path style="fill:#8697CB;" d="M49.455,8C49.482,8.166,49.5,8.332,49.5,8.5V8H49.455z"/>
// 		</g>
// 	</g>
// 	<g>
// 		<circle style="fill:#ED7161;" cx="42.5" cy="44" r="12"/>
// 		<path style="fill:#FFFFFF;" d="M43.914,44l3.536-3.536c0.391-0.391,0.391-1.023,0-1.414s-1.023-0.391-1.414,0L42.5,42.586
// 			l-3.536-3.536c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414L41.086,44l-3.536,3.536c-0.391,0.391-0.391,1.023,0,1.414
// 			c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293l3.536-3.536l3.536,3.536c0.195,0.195,0.451,0.293,0.707,0.293
// 			s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414L43.914,44z"/>
// 	</g>
// </g>

// });
