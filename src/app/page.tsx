'use client';
import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Signin from "./signin/page";
import Link from "next/dist/client/link";

export default function Home() {

  return (
    <div className="p-8">
      <button className="text-white" onClick={() => signOut()}>Logout</button>
      <Link href="/signin">
        <p className="text-white">Signin</p>
      </Link>
    </div>
  )
}

Home.requireAuth = true;