import { ProfilePage, UserProfile } from "@/pages";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/profile/$userId/")({
  component: UserProfile,
});
