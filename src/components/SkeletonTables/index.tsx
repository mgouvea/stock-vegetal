import { Flex, Skeleton, Stack } from '@chakra-ui/react';
import { SkeletonLines } from './SkeletonLines';

export function SkeletonTables() {
  return (
    <Flex justify="center">
      <Stack justify="center">
        <SkeletonLines />
        <SkeletonLines />
        <SkeletonLines />
        <SkeletonLines />
        <SkeletonLines />
      </Stack>
    </Flex>
  );
}
