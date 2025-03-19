import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";

const TOKEN_EXPIRATION = "24h";

export const JWT_COOKIE_NAME = "auth_token";

const secretKey = new TextEncoder().encode(process.env.JWT_SECRET!);

export type UserJwtPayload = {
  id: number;
  email: string;
  name: string;
};

export async function createJwtToken(payload: UserJwtPayload): Promise<string> {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(TOKEN_EXPIRATION)
    .sign(secretKey);
}

export const verifyJwt = async (
  token: string
): Promise<UserJwtPayload | null> => {
  try {
    const { payload } = await jwtVerify(token, secretKey);
    return payload as UserJwtPayload;
  } catch (e) {
    return null;
  }
};

export const getCurrentUser = async (): Promise<UserJwtPayload | null> => {
  const cookieStore = await cookies();
  const token = cookieStore.get(JWT_COOKIE_NAME)?.value;

  if (!token) {
    return null;
  }

  return verifyJwt(token);
};
