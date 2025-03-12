import Navbar from "@/components/navbar";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Welcome to our platform
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Join our community today and discover all the amazing features we
            have to offer.
          </p>
          <Link href="/register" className="btn mt-6">
            Sign Up
          </Link>
        </div>
      </div>
    </main>
  );
}
