import { BASE_URL } from '@/components/helper';
import axios from 'axios';

export const Axios = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    'Content-type': 'application/json',
    Accept: 'application/json',
  },
});