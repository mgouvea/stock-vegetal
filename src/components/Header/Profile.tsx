import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex>
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Fulano de Tal</Text>
          <Text color="gray.400" fontSize="small">
            fulanoDeTal@udv.com
          </Text>
        </Box>
      )}

      {/* Foto de perfil */}
      <Avatar
        size="md"
        name="Fulano Tal"
        // src="https://github.com/mgouvea.png"
      />
    </Flex>
  );
}
