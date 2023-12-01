"use client"

import React, { useState } from 'react';
import './style.css';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../auth/firebase';
import Link from 'next/dist/client/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faKey } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordAgain, setPasswordAgain] = useState('');

  const signup = () => {
    createUserWithEmailAndPassword(auth, email, password,);
  }
    const handleFocus = (e: {
      target: { classList: { add: (arg0: string) => void } };
    }) => {
      e.target.classList.add("focus");
    };

    return (
      <div className="all">
        <form action="index.html" className="card">
          <div className="sign-in">Sign Up</div>
          <i id="logo" className="fa-solid fa-users">
            <FontAwesomeIcon icon={faUsers} />
          </i>
          {/* Email */}
          <div className="login-form">
            <i className="fa-solid fa-user" id="logo-input">
              <FontAwesomeIcon icon={faEnvelope} />
            </i>
            <input type="email"
              className="input"
              id="email"
              name="email"
              autoComplete="email"
              onChange={(e) => setEmail(e.target.value)}
              required
              onFocus={handleFocus} />
            <span data-placeholder="Email"></span>
          </div>
          {/* Password */}
          <div className="login-form">
            <i className="fa-solid fa-lock" id="logo-input">
              <FontAwesomeIcon icon={faKey} />
            </i>
            <input type="password"
              className="input"
              id="password"
              name="password"
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
              required
              onFocus={handleFocus} />
            <span data-placeholder="Password"></span>
          </div>
          {/* PasswordAgain */}
          <div className="login-form">
            <i className="fa-solid fa-envelope" id="logo-input">
              <FontAwesomeIcon icon={faLock} />
            </i>
            <input type="password"
              className="input"
              id="passwordAgain"
              name="passwordAgain"
              autoComplete="current-password"
              onChange={(e) => setPasswordAgain(e.target.value)}
              required
              onFocus={handleFocus} />
            <span data-placeholder="Password Agian"></span>
          </div>
          <div>
            <Link href="/signin">
              <input
                type='submit'
                className='btn-submit'
                disabled={(!email || !password || !passwordAgain) || (password !== passwordAgain)}
                onClick={() => signup()} 
                value="Submit">
              </input>
            </Link>
          </div>
        </form>
      </div>
    );
  }