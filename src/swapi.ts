import axios from "axios";

export const swapi = axios.create({
  baseURL: "https://swapi.py4e.com/api/",
  timeout: 20000,
});
