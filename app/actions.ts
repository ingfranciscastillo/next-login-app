"use server";

import { hashPassword } from "@/lib/auth/password";
import { db } from "@/lib/db";
import { users } from "@/lib/db/schema";
import { LoginSchema, registerSchema } from "@/lib/schemas";
import { createSession } from "@/lib/session";

export async function signUp(state, formData) {
  // Validate the fields
  const validationResult = registerSchema.safeParse({
    name: formData.name,
    email: formData.email,
    password: formData.password,
    confirmPassword: formData.confirmPassword,
  });

  if (!validationResult.success) {
    return {
      errors: validationResult.error.flatten().fieldErrors,
    };
  }

  const { name, email, password } = validationResult.data;

  // create user
  const hashedPassword = hashPassword(password);

  const [user] = await db
    .insert(users)
    .values({
      name: name,
      email: email,
      password: hashedPassword,
    })
    .returning({
      id: users.id,
    });

  // create session
  await createSession(user.id);
}

export async function signIn(state, formData) {}
