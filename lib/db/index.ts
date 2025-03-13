import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";

if (!process.env.TURSO_DATABASE_URL || !process.env.TURSO_AUTH_TOKEN) {
  throw new Error(
    "Missing TURSO_DATABASE_URL or TURSO_AUTH_TOKEN environment variables"
  );
}

const client = createClient({
  url: process.env.TURSO_DATABASE_URL!,
  authToken: process.env.TURSO_AUTH_TOKEN!,
});

export const db = drizzle(client);
