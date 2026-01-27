import { useMutation, useQuery } from "@tanstack/react-query";
import { fetchComments, postComment } from "../api/comments";
import { queryClient } from "@/app/lib/QueryClient";

export const useGetCommentsQuery = (postId: number) => {
  return useQuery({
    queryKey: ["comments", postId],
    queryFn: async () => fetchComments(postId),
    enabled: !!postId,
  });
};

export const usePostCommentMutation = (postId: number) => {
  const handleSuccess = () => {
    queryClient.invalidateQueries({ queryKey: ["comments", postId] });
  };

  const handleError = (error: unknown) => {
    const msg = error instanceof Error ? error.message : String(error);
    console.error(msg);
  };

  return useMutation({
    mutationFn: (content: string) => postComment(postId, content),
    onSuccess: handleSuccess,
    onError: handleError,
  });
};
