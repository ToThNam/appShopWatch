import axios from 'axios';

export const instance = axios.create({
  baseURL: 'http://10.0.2.2:3000',
  //   timeout: 60000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
});

export const getProduct = () => instance.get('/product')
export const getCategory = () => instance.get('/manufacturer')
export const getStore = () => instance.get('/storelist')