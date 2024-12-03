import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://new.pochta.uz',
  headers: {
    'X-API-TOKEN': 'abdullo',
    'Content-Type': 'application/json',
  },
});

// Interceptors - zarur bo‘lsa
apiClient.interceptors.request.use(
  (config) => {
    // Dinamik token (agar kerak bo‘lsa)
    const token = localStorage.getItem('apiToken');
    if (token) {
      config.headers['X-API-TOKEN'] = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiClient;
