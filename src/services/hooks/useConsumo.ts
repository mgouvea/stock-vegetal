import { useQuery } from 'react-query';
import { api } from '../api';

type Vegetal = {
  id: string;
  cod: number;
  tipoSessao: string;
  dirigente: string;
  consumo: number;
  dataSessao: string;
  assistente: string;
  auxiliar: string;
  leitura: string;
  explanacao: string;
  pessoas: number;
  repeticoes: number;
};

export async function getConsumo(): Promise<Vegetal[]> {
  const { data } = await api.get('consumo');
  // console.log(data);

  // formatar dados e carregar só uma vez
  const consumo = data?.consumos?.map((cons) => {
    return {
      id: cons.id,
      cod: cons.cod,
      tipoSessao: cons.tipoSessao,
      dirigente: cons.dirigente,
      consumo: cons.consumo,
      dataSessao: cons.dataSessao,
      assistente: cons.assistente,
      auxiliar: cons.auxiliar,
      leitura: cons.leitura,
      explanacao: cons.explanacao,
      pessoas: cons.pessoas,
      repeticoes: cons.repeticoes,
    };
  });

  return consumo;
}

export function useConsumo() {
  return useQuery('consumo', getConsumo, {
    staleTime: 1000 * 7,
  });
}
