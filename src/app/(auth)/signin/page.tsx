import React from 'react';
import Link from "next/link";
import { getServerAuthSession } from "~/server/auth";
import Heading from '~/app/_components/Heading';

export default async function Signin() {
  const session = await getServerAuthSession();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Heading title='Sign In' />
      <Link
        href={session ? "/api/auth/signout" : "/api/auth/signin"}
        className="bg-secondary text-light rounded-lg px-6 py-2"
      >
        {session ? "Sign out" : "Connect with Google"}
      </Link>
    </div>
  );
}
