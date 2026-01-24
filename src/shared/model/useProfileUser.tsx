import { useQuery } from "@tanstack/react-query";
import { getUserProfile } from "../api/user";

export const useGetUserProfileQuery = (userId: number) => {
  return useQuery({
    queryKey: ["user", "followStatus", userId],
    queryFn: async () => getUserProfile(userId),
    enabled: !!userId,
  });
};
