import axios from "axios";
import { AppRoutes } from "./routes";

const api = axios.create({
  baseURL: AppRoutes.BASE_URL_DRAGON_BALL,
});

export default api;
