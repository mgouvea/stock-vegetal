import { useQuery } from 'react-query';
import { api } from '../api';

type User = {
  id: string;
  name: string;
  email: string;
  grau: string;
};

export async function getUsers(): Promise<User[]> {
  const { data } = await api.get('users');

  // formatar dados e carregar só uma vez
  const users = data?.users?.map((user) => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      grau: user.grau,
    };
  });

  return users;
}

export function useUsers() {
  return useQuery('users', getUsers, {
    staleTime: 1000 * 7,
  });
}
