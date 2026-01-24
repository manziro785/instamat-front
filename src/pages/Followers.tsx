import { Route } from "@/app/routes/_layout/profile/$userId.followers";
import React from "react";

const Followers = () => {
  const { userId } = Route.useParams();

  return <div>Followers {userId}</div>;
};

export { Followers };
