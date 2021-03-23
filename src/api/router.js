import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://rickandmortyapi.com/api/",
});

export default axiosInstance;
