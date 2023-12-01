'use client';
import { signOut, useSession } from "next-auth/react";
import Link from "next/dist/client/link";

export default function Home() {

  return (
    <div className="p-8">
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