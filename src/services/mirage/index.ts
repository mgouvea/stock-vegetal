import { createServer, Factory, Model, Response } from 'miragejs';
import faker from 'faker';

type User = {
  name: string;
  email: string;
  grau: string;
};

type Vegetal = {
  cod: number;
  tipoMariri: string;
  tipoChacrona: string;
  qtd: number;
  dataPreparo: string;
  grau: string;
  npreparo: string;
  mpreparo: string;
  origemMariri: string;
  origemChacrona: string;
  obs: string;
};

type Consumo = {
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

export function makeServer() {
  const server = createServer({
    models: {
      user: Model.extend<Partial<User>>({}),
      vegetal: Model.extend<Partial<Vegetal>>({}),
      consumo: Model.extend<Partial<Consumo>>({}),
    },

    factories: {
      user: Factory.extend({
        name(i: number) {
          return `User ${i + 1}`;
        },
        email() {
          return faker.internet.email().toLowerCase();
        },
        grau(i: number) {
          return `Grau ${i + 1}`;
        },
      }),
      vegetal: Factory.extend({
        cod(i: number) {
          return `${i + 3}`;
        },
        tipoMariri() {
          return 'Tucunacá';
        },
        mpreparo() {
          return `Paulo Afonso`;
        },
        npreparo() {
          return `Rei Hoasqueiro`;
        },
        qtd(i: number) {
          return `${i + 15} `;
        },
        grau() {
          return 'Forte';
        },
        obs() {
          return '-';
        },
        dataPreparo(i: number) {
          return '10/02/2022';
        },
      }),
      consumo: Factory.extend({
        cod(i: number) {
          return `${i + 3}`;
        },
        tipoSessao() {
          return 'Escala';
        },
        dirigente() {
          return `Paulo Afonso`;
        },
        consumo(i: number) {
          return `${i + 3}`;
        },

        assistente() {
          return 'Zé Mauro';
        },
        auxiliar() {
          return 'Jordan';
        },
        dataSessao(i: number) {
          return '10/02/2022';
        },
        leitura() {
          return 'Marcos';
        },
        explanacao() {
          return 'Carlos';
        },
        pessoas(i: number) {
          return `${i + 15}`;
        },
        repeticoes(i: number) {
          return `${i}`;
        },
      }),
    },

    seeds(server) {
      server.createList('user', 200);
      server.createList('vegetal', 10);
      server.createList('consumo', 10);
    },

    routes() {
      this.namespace = 'api';
      this.timing = 1750;

      this.get('/users', function (schema, request) {
        const { page = 1, per_page = 10 } = request.queryParams;

        const total = schema.all('user').length;

        const pageStart = (Number(page) - 1) * Number(per_page);
        const pageEnd = pageStart + Number(per_page);

        const users = this.serialize(schema.all('user')).users.slice(
          pageStart,
          pageEnd
        );

        return new Response(200, { 'x-total-count': String(total) }, { users });
      });

      this.post('/users');

      this.get('/vegetal');
      this.post('/vegetal');

      this.get('/consumo');
      this.post('/consumo');

      this.namespace = '';
      this.passthrough();
    },
  });
}
