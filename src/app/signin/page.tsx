"use client";
import React, { useState } from "react";
import "./first.css";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleFocus = (e: {
    target: { classList: { add: (arg0: string) => void } };
  }) => {
    e.target.classList.add("focus");
  };

  return (
    <div>
      <header className="Top-menu">
        <a className="manu-item brand" href="#">
          Nukward
        </a>
      </header>
      <div className="all">
      <form
        onSubmit={(e) => {
        e.preventDefault();
        if (email && password){
          signIn('credentials', {email, password, redirect: true, callbackUrl: '/'});
        }
        if (!email || password){
          alert("your email or password is wrong")
        }
        }}
        className="card"
      >
          <div className="sign-in">Sign in</div>
          <i id="logo" className="fa-solid fa-users"></i>
          {/* Username */}
          <div className="login-form">
            <i className="fa-solid fa-user" id="logo-input"></i>
            <input
              className="input"
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              onChange={(e) => setEmail(e.target.value)}
              onFocus={handleFocus}
              required
            />
            <span data-placeholder="Username"></span>
          </div>
          {/* Password */}
          <div className="login-form">
            <i className="fa-solid fa-lock" id="logo-input"></i>
            <input
              className="input"
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
              required
              onFocus={handleFocus}
            />
            <span data-placeholder="Password"></span>
          </div>
          <p>
            Don't have account? <a href="/signup">Sign up</a>
          </p>
          <input
            type="submit"
            
            disabled={!email || !password}
            className="btn-submit"
          />
        </form>
      </div>
    </div>
  );
}
