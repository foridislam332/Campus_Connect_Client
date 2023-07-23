import axios from 'axios';

const useAxios = axios.create({
    baseURL: 'https://campus-connect-server-delta.vercel.app',
});

export default useAxios;