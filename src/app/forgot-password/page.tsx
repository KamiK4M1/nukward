'use client';

import React, { useState } from 'react';
import './style.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../auth/firebase';
import Link from 'next/dist/client/link';

export default function ForgetPassword() {
  const [email, setEmail] = useState('');
  const resetEmail = () => {
    sendPasswordResetEmail(auth, email);
  }
  const handleFocus = (e: {
    target: { classList: { add: (arg0: string) => void } };
  }) => {
    e.target.classList.add("focus");
  };

  return (
    <div className="all">
      <form action="index.html" className="card">
        <div className="sign-in">Forgot Password</div>
        <i id="logo" className="fa-solid fa-lock">
          <FontAwesomeIcon icon={faLock} />
        </i>
        {/* Email */}
        <div className="login-form">
          <i className="fa-solid fa-envelope" id="logo-input">
            <FontAwesomeIcon icon={faEnvelope} />
          </i>
          <input 
            type="email" 
            className="input" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            onFocus={handleFocus}
            id="email"
            name="email"
            autoComplete="email"
            required
             />
          <span data-placeholder="Email"></span>
        </div>
        <Link href="/signin">
          <input type="submit" 
            className="btn-submit" 
            onClick={() => resetEmail()}
            disabled={!email}
            value="submit">
          </input>
        </Link>
      </form>
    </div>
  );
}
