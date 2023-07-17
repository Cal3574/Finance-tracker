"use client";
import { useSession } from "next-auth/react";

export default function useUserSession() {
  const { data: session, status } = useSession();
  const loading = status === "loading";
  const user = session?.user;
  const userId = user?.id;
  const userName = user?.name;
  const userEmail = user?.email;
  return { loading, userId, userName, userEmail };
}
