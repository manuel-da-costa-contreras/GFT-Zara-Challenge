import api from "./axiosConfig";

export async function get<T>(url: string, config = {}): Promise<T> {
  const { data } = await api.get<T>(url, config);
  return data;
}
