import axios from 'axios';

const BASE_URL = 'http://localhost:1000/api/v1/planpro';

export const apiClient = axios.create({
  baseURL: BASE_URL,
});

apiClient.interceptors.request.use(

  (config) => {

    const token = localStorage.getItem('token');
    if (token) {
      // iš config.headers.Authorization pridedame tokeną prie užklausos ir nurodome, kad tokenas yra Bearer tokena
      // header yra vienas iš užklausos savybių, kuris yra naudojamas, kad siųsti papildomus duomenis kartu su užklausa
      config.headers.Authorization = `Bearer ${token}`;
    }
    // grąžiname config objektą, kad jis būtu naudojamas užklausos siuntimui
    return config;
  },
  (error) => {
    // grąžiname klaidą, kad būtu galima ją apdoroti naudojame Promises, nes axios naudoja Promises užklausoms siųsti ir gauti atsakymą
    return Promise.reject(error);
  },
);

export const registerUser = (userData) => {
  return apiClient.post('/users/register', userData);
};

export const fetchUserData = async (userId) => {
  try {
    const response = await apiClient.get(`/users/${userId}`);
    console.log('Response:', response); // log the entire response
    return response.data;
  } catch (error) {
    console.error('Failed to fetch user data:', error);
    throw error;
  }
};
