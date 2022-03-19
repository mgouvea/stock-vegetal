import { Icon, Text, useBreakpointValue } from '@chakra-ui/react';
import { RiStarFill } from 'react-icons/ri';

export function Logo() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <>
      <Icon
        fontSize={['3xl', '3xl']}
        mr="2"
        ml={['3', '0']}
        mb="1"
        color="byellow.500"
        as={RiStarFill}
      />
      {isWideVersion && (
        <Text
          fontSize={['2xl', '3xl']}
          fontWeight="bold"
          letterSpacing="tight"
          w="64"
        >
          Sala do Vegetal
          <Text as="span" ml="1" color="byellow.500">
            .
          </Text>
        </Text>
      )}
    </>
  );
}
