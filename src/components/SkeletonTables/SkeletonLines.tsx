import { Skeleton, Stack } from '@chakra-ui/react';

export function SkeletonLines() {
  return (
    <>
      <Stack direction="row">
        <Skeleton
          height={30}
          // mt="3"
          w={16}
          startColor="blue.900"
          endColor="blue.800"
        />
        <Skeleton
          height={30}
          mt="3"
          w="xs"
          startColor="blue.900"
          endColor="blue.800"
        />
        <Skeleton
          height={30}
          mt="3"
          w="xs"
          startColor="blue.900"
          endColor="blue.800"
        />
        <Skeleton
          height={30}
          mt="3"
          w="xs"
          startColor="blue.900"
          endColor="blue.800"
        />
      </Stack>
    </>
  );
}
