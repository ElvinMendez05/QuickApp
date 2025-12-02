import axios from 'axios';

const quickShopApi = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
}) 

export {quickShopApi}