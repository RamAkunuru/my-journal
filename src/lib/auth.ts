import { cookies } from "next/headers";

export async function setAuthCookie(userId: number) {
  const cookieStore = await cookies();
  cookieStore.set("user", userId.toString(), {
    httpOnly: true,
    path: "/",
  });
}

export async function getUserFromCookie() {
  const cookieStore = await cookies();
  const user = cookieStore.get("user");
  return user?.value;
}
