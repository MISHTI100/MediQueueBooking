import axios from "axios";

const API = axios.create({
  baseURL: "https://mediqueuebooking.onrender.com"
});

export default API;