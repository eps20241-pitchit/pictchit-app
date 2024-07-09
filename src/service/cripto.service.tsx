import axios from 'axios';

const ApiCripto = axios.create({
  baseURL: '/api',
});

export default ApiCripto;
