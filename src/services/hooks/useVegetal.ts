import { useQuery } from 'react-query';
import { api } from '../api';

import { firebase, auth } from '../../services/firebase';
import { useState } from 'react';

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
  // const [data, setData] = useState([]);

  // const vegetal = listaVegetal.map((v) => {
  //   return {
  //     id: v.id,
  //     cod: v.cod,
  //     tipoMariri: v.tipoMariri,
  //     mpreparo: v.mpreparo,
  //     npreparo: v.npreparo,
  //     qtd: v.qtd,
  //     grau: v.grau,
  //     obs: v.obs,
  //     dataPreparo: v.dataPreparo,
  //   };
  // });

  // formatar dados e carregar só uma vez MIRAGE JS
  // const vegetal = data?.vegetals?.map((v) => {
  //   return {
  //     id: v.id,
  //     cod: v.cod,
  //     tipoMariri: v.tipoMariri,
  //     mpreparo: v.mpreparo,
  //     npreparo: v.npreparo,
  //     qtd: v.qtd,
  //     grau: v.grau,
  //     obs: v.obs,
  //     dataPreparo: v.dataPreparo,
  //   };
  // });

  return data;
}

export function useVegetal() {
  return useQuery('vegetal', getVegetal, {
    staleTime: 1000 * 7,
  });
}
