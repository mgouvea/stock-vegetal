import { useQuery } from 'react-query';
import { api } from '../api';

import moment from 'moment';

type Vegetal = {
  id: object;
  cod: number;
  tipoMariri: string;
  tipoChacrona: string;
  qtd: number;
  qtdAtual: number;
  dataPreparo: string;
  dataEntrada: string;
  npreparo: string;
  mpreparo: string;
  origemMariri: string;
  origemChacrona: string;
  obs: string;
};

export async function getVegetal(): Promise<Vegetal[]> {
  const { data } = await api.get('vegetal');

  // formatar dados e carregar só uma vez
  const vegetal = data?.map((v) => {
    return {
      id: v._id,
      cod: v.cod,
      tipoMariri: v.tipoMariri,
      tipoChacrona: v.tipoChacrona,
      qtd: v.qtd,
      qtdAtual: v.qtdAtual,
      // dataPreparo: new Date(v.dataPreparo).toLocaleDateString('pt-BR'),
      dataPreparo: moment(v.dataPreparo).add(1, 'day').format('DD/MM/YYYY'),
      dataEntrada: moment(v.dataEntrada).add(1, 'day').format('DD/MM/YYYY'),
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
