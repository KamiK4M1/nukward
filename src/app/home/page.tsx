'use client';

import React from 'react';
import './style.css';
import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function Home() {
  const session = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/signin');
    },
  });
  return (
    <div>
      <header className="Top">
        <div className='text-white session'>{session?.data?.user?.email }</div>
        <button className="text-white signout" onClick={() => signOut()}>Logout</button>
          <i id="icon" className="fa-solid fa-right-from-bracket">
          </i> 
          
        <a><input type="search" className="search"/></a> 
        <a className="manu-item signin " href="/signin">
          Sign in        
        </a>
      </header>
      <div className="ok">
        {/* Repeat this block for each box */}
        <div className="box">
          <div className="in-box">
            <img src="https://cdn.discordapp.com/attachments/1178971739443707937/1179776216610373642/digital-illustration-brian-edward-miller-1280x720.png?ex=657b0339&is=65688e39&hm=9fbd3840465a286fb3c0bbf96adf3706cfb649114ba3449644357bb8bf8db23f&" className="image"/>
            <h1>ไข่ย้อย1</h1>
            <p>input here</p>
            <p>input here</p>
            <p>input here</p>
            <p>input here</p>
          </div>
        </div>
        <div className="box">
          <div className="in-box">
            <img src="https://cdn.discordapp.com/attachments/1178971739443707937/1179776216610373642/digital-illustration-brian-edward-miller-1280x720.png?ex=657b0339&is=65688e39&hm=9fbd3840465a286fb3c0bbf96adf3706cfb649114ba3449644357bb8bf8db23f&" className="image"/>
            <h1>ไข่ย้อย1</h1>
            <p>input here</p>
            <p>input here</p>
            <p>input here</p>
            <p>input here</p>
          </div>
        </div>
        <div className="box">
          <div className="in-box">
            <img src="https://cdn.discordapp.com/attachments/1178971739443707937/1179776216610373642/digital-illustration-brian-edward-miller-1280x720.png?ex=657b0339&is=65688e39&hm=9fbd3840465a286fb3c0bbf96adf3706cfb649114ba3449644357bb8bf8db23f&" className="image"/>
            <h1>ไข่ย้อย1</h1>
            <p>input here</p>
            <p>input here</p>
            <p>input here</p>
            <p>input here</p>
          </div>
        </div>
        <div className="box">
          <div className="in-box">
            <img src="https://cdn.discordapp.com/attachments/1178971739443707937/1179776216610373642/digital-illustration-brian-edward-miller-1280x720.png?ex=657b0339&is=65688e39&hm=9fbd3840465a286fb3c0bbf96adf3706cfb649114ba3449644357bb8bf8db23f&" className="image"/>
            <h1>ไข่ย้อย1</h1>
            <p>input here</p>
            <p>input here</p>
            <p>input here</p>
            <p>input here</p>
          </div>
        </div>
        <div className="box">
          <div className="in-box">
            <img src="https://cdn.discordapp.com/attachments/1178971739443707937/1179776216610373642/digital-illustration-brian-edward-miller-1280x720.png?ex=657b0339&is=65688e39&hm=9fbd3840465a286fb3c0bbf96adf3706cfb649114ba3449644357bb8bf8db23f&" className="image"/>
            <h1>ไข่ย้อย1</h1>
            <p>input here</p>
            <p>input here</p>
            <p>input here</p>
            <p>input here</p>
          </div>
        </div>
        <div className="box">
          <div className="in-box">
            <img src="https://cdn.discordapp.com/attachments/1178971739443707937/1179776216610373642/digital-illustration-brian-edward-miller-1280x720.png?ex=657b0339&is=65688e39&hm=9fbd3840465a286fb3c0bbf96adf3706cfb649114ba3449644357bb8bf8db23f&" className="image"/>
            <h1>ไข่ย้อย1</h1>
            <p>input here</p>
            <p>input here</p>
            <p>input here</p>
            <p>input here</p>
          </div>
        </div>
        <div className="box">
          <div className="in-box">
            <img src="https://cdn.discordapp.com/attachments/1178971739443707937/1179776216610373642/digital-illustration-brian-edward-miller-1280x720.png?ex=657b0339&is=65688e39&hm=9fbd3840465a286fb3c0bbf96adf3706cfb649114ba3449644357bb8bf8db23f&" className="image"/>
            <h1>ไข่ย้อย1</h1>
            <p>input here</p>
            <p>input here</p>
            <p>input here</p>
            <p>input here</p>
          </div>
        </div>
        <div className="box">
          <div className="in-box">
            <img src="https://cdn.discordapp.com/attachments/1178971739443707937/1179776216610373642/digital-illustration-brian-edward-miller-1280x720.png?ex=657b0339&is=65688e39&hm=9fbd3840465a286fb3c0bbf96adf3706cfb649114ba3449644357bb8bf8db23f&" className="image"/>
            <h1>ไข่ย้อย1</h1>
            <p>input here</p>
            <p>input here</p>
            <p>input here</p>
            <p>input here</p>
          </div>
        </div>
        <div className="box">
          <div className="in-box">
            <img src="https://cdn.discordapp.com/attachments/1178971739443707937/1179776216610373642/digital-illustration-brian-edward-miller-1280x720.png?ex=657b0339&is=65688e39&hm=9fbd3840465a286fb3c0bbf96adf3706cfb649114ba3449644357bb8bf8db23f&" className="image"/>
            <h1>ไข่ย้อย1</h1>
            <p>input here</p>
            <p>input here</p>
            <p>input here</p>
            <p>input here</p>
          </div>
        </div>
        <div className="box">
          <div className="in-box">
            <img src="https://cdn.discordapp.com/attachments/1178971739443707937/1179776216610373642/digital-illustration-brian-edward-miller-1280x720.png?ex=657b0339&is=65688e39&hm=9fbd3840465a286fb3c0bbf96adf3706cfb649114ba3449644357bb8bf8db23f&" className="image"/>
            <h1>ไข่ย้อย1</h1>
            <p>input here</p>
            <p>input here</p>
            <p>input here</p>
            <p>input here</p>
          </div>
        </div>
        
        {/* End of block */}
      </div>
    </div>
  );
};

Home.requireAuth = true;