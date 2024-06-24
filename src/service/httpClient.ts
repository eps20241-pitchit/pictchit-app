import axios from 'axios';

export const httpClient = axios.create({
  baseURL: "http://localhost:3000/",
});

httpClient.interceptors.response.use(async data => {return data;});
