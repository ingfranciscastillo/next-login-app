import { createHash } from "crypto";

export const hashPassword = (password: string) => {
  return createHash("sha256").update(password).digest("hex");
};

export const verifyPassword = (password: string, hash: string) => {
  return hashPassword(password) === hash;
};
