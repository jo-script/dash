'use client'
import React, { useEffect, useState } from 'react';
import { useMutation } from '@apollo/client';
import client from '@/lib/client';
import { LOGIN_MUTATION } from '@/lib/mutations';
import logo from '../public/logo/logo.png';
import Image from 'next/image';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [login, { data, loading, error }] = useMutation(LOGIN_MUTATION, {
    client: client,
    onCompleted: (data) => {
      console.log('Login successful', data);
      localStorage.setItem('token', data.login.token);
    },
    onError: (error) => {
      console.error('Error logging in', error);
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ variables: { username, password } });
  };

  useEffect(() => { document.title = 'طلبات مرفوضه' }, []);

  return (
    <div className='flex items-center justify-center ' style={{ direction: 'rtl' }}>
      <div className='w-[300px] flex flex-col items-center justify-center gap-6 lg:relative lg:left-32'>
        <Image src={logo} width={200} height={200} alt='' />
        <form className='w-full flex flex-col items-start justify-center' onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder='اسم المستخدم'
            className='w-full border-b-2 border-[#00000033] outline-none p-3 text-[16px] focus:border-[#438ac8]'
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder='الرقم السري'
            className='w-full border-b-2 border-[#00000033] outline-none p-3 text-[16px] focus:border-[#438ac8]'
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type='submit'
            className='w-full h-[45px] mt-8 rounded-md bg-[#438ac8] text-white cursor-pointer font-semibold hover:bg-[#3f81bc] transition-[all_.2s]'
          >
            تسجيل الدخول
          </button>
        </form>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
      </div>
    </div>
  )
}

export default Login;
