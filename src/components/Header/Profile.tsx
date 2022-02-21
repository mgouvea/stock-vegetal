import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex>
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Mateus Gouvêa</Text>
          <Text color="gray.400" fontSize="small">
            falamateus.gouvea@gmail.com
          </Text>
        </Box>
      )}

      {/* Foto de perfil */}
      <Avatar
        size="md"
        name="Mateus Gouvea"
        src="https://github.com/mgouvea.png"
      />
    </Flex>
  );
}
