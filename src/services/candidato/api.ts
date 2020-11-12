import axios, { AxiosInstance } from 'axios';

export const api: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_HOME_CARTEIRITAS_API_URL,
});

