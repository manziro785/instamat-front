import { useQuery } from "@tanstack/react-query";
import { fetchPostsById } from "../api/post";

export const useGetPostsById = (postId: number) => {
  return useQuery({
    queryKey: ["posts", "feed"],
    queryFn: async () => fetchPostsById(postId),
  });
};
