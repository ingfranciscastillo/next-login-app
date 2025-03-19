import "server-only";
import { cookies } from "next/headers";
import { createJwtToken, verifyJwt } from "./auth/jwt";
import { redirect } from "next/navigation";

const cookie = {
  name: "session",
  options: {
    httpOnly: true,
    secure: true,
    path: "/",
  },
  duration: 24 * 60 * 60 * 1000,
};

export async function createSession(userId: number) {
  const expires = new Date(Date.now() + cookie.duration);
  const session = await createJwtToken({ userId, expires });

  (await cookies()).set(cookie.name, session, {
    ...cookie.options,
    sameSite: "lax",
    expires,
  });
  redirect("/dashboard");
}

export async function verifySession() {
  const sessionCookie = (await cookies()).get(cookie.name)?.value;
  const session = await verifyJwt(sessionCookie);
  if (!session?.id) {
    redirect("/login");
  }

  return { userId: session.id };
}

export async function deleteSession() {
  (await cookies()).delete(cookie.name);
  redirect("/login");
}
