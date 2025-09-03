import axios from "axios";

const api = axios.create({
  baseURL: "http://https://lettfaktura-product-list.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});


export const getProducts = () =>
  api.get(`/products/`);

export default api;
