import axios from "axios";
import { Endpoints } from "./endpoints";

const api = axios.create({
  baseURL: Endpoints.BASE_URL_DRAGON_BALL,
});

export default api;
