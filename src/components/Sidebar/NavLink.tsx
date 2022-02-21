import {
  Icon,
  Link as ChakraLink,
  Text,
  LinkProps as ChakraLinkProps,
} from '@chakra-ui/react';
import { ElementType, ReactNode } from 'react';
import { ActiveLink } from '../ActiveLink';

interface NavLinkProps extends ChakraLinkProps {
  icon: ElementType;
  children: ReactNode;
  fontSize?: number;
  href: string;
}

export function NavLink({
  icon,
  children,
  fontSize,
  href,
  ...rest
}: NavLinkProps) {
  return (
    <ActiveLink href={href} passHref>
      <ChakraLink display="flex" alignItems="center" {...rest}>
        <Icon as={icon} fontSize={fontSize} />
        <Text ml="4" fontWeight="medium">
          {children}
        </Text>
      </ChakraLink>
    </ActiveLink>
  );
}
