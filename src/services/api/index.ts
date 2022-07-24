import axios from 'axios';
import { Platform } from 'react-native';

const host = Platform.OS === 'web' ? '' : process.env.HOST;

const api = axios.create({
  baseURL: `${host}/api/`,
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' },
});

export default api;
