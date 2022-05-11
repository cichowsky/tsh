import axios from 'axios';
import { API_URL } from 'app/config';

const api = axios.create({
  baseURL: API_URL,
});

export { api };
