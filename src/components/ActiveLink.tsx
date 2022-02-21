import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import { cloneElement, ReactElement } from 'react';

interface ActiveinkProps extends LinkProps {
  children: ReactElement;
}

export function ActiveLink({ children, ...rest }: ActiveinkProps) {
  const { asPath } = useRouter();

  let isActive = false;
  if (asPath === rest.href || asPath === rest.as) {
    isActive = true;
  }

  return (
    <Link {...rest}>
      {cloneElement(children, {
        color: isActive ? 'teal.400' : 'gray.50',
      })}
    </Link>
  );
}
