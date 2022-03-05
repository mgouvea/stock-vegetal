import axios from 'axios';

let baseURL = '';

if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3000/api';
} else {
  baseURL = 'https://sala-vegetal.vercel.app/api';
}

export const api = axios.create({
  baseURL: baseURL,
});
