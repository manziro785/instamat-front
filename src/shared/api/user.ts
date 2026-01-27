import { api } from "@/shared/htttp/axiosInstance";

export const getUserProfile = async (userId: number) => {
  const res = await api.get(`/api/users/${userId}`);
  return res.data;
};
