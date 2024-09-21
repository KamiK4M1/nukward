'use client';
import { signOut, useSession } from "next-auth/react";
import Link from "next/dist/client/link";
import { redirect } from "next/navigation";

export default function Home() {
  const session = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/signin');
    },
  });
  return (
    <div className="p-8">
      <div className='text-white'>{session?.data?.user?.email }</div>
      <button className="text-white" onClick={() => signOut()}>Logout</button>
      <Link href="/signin">
        <p className="hover:bg-indigo-300">
          <span className="text-white">Signin</span>
        </p>
      </Link>
    </div>
  )
}

Home.requireAuth = true;