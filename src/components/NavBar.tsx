import { Flex, Link } from '@chakra-ui/core';
import NextLink from 'next/link';
import { useMeQuery } from '../generated/graphql';

interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = ({}) => {
  const [{ data, fetching }] = useMeQuery();

  return (
    <Flex bg='#7159c1' p={4} justifyContent={'space-between'}>
      <NextLink href='/login'>
        <Link>Login</Link>
      </NextLink>
      <NextLink href='/register'>
        <Link>Register</Link>
      </NextLink>
    </Flex>
  );
}