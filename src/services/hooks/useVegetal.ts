import { useQuery } from 'react-query';
import { api } from '../api';

type Vegetal = {
  id: string;
  cod: number;
  tipoMariri: string;
  mpreparo: string;
  npreparo: string;
  qtd: number;
  grau: string;
  obs: string;
  dataPreparo: string;
};

export async function getVegetal(): Promise<Vegetal[]> {
  const { data } = await api.get('vegetal');

  // formatar dados e carregar só uma vez
  const vegetal = data?.map((v) => {
    return {
      id: v.id,
      cod: v.cod,
      tipoMariri: v.tipoMariri,
      tipoChacrona: v.tipoChacrona,
      qtd: v.qtd,
      dataPreparo: v.dataPreparo,
      grau: v.grau,
      npreparo: v.npreparo,
      mpreparo: v.mpreparo,
      origemMariri: v.origemMariri,
      origemChacrona: v.origemChacrona,
      obs: v.obs,
    };
  });

  return vegetal;
}

export function useVegetal() {
  return useQuery('vegetal', getVegetal, {
    staleTime: 1000 * 7,
  });
}
