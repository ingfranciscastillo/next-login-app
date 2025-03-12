import RegisterForm from "@/components/RegisterForm";
import Link from "next/link";
import React from "react";

const RegisterPage = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-md">
      <Link href="/" className="btn btn-ghost mb-6">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.3284 11.0001V13.0001L7.50011 13.0001L10.7426 16.2426L9.32842 17.6568L3.67157 12L9.32842 6.34314L10.7426 7.75735L7.49988 11.0001L20.3284 11.0001Z"
            fill="currentColor"
          />
        </svg>
        <p className="flex items-center">Back to home</p>
      </Link>

      <div className="space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Create an account</h1>
          <p className="text-muted-foreground">
            Enter your information below to create your account
          </p>
        </div>

        <RegisterForm />

        <div className="text-center text-sm">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-medium underline underline-offset-4 hover:text-primary"
          >
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
