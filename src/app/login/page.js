'use client'
import React, { useEffect } from 'react'


import logo from '../public/logo/logo.png'
import Image from 'next/image'

function Login() {
  useEffect(() => { document.title = 'طلبات مرفوضه' }, [])
  return (
    <div className='flex items-center justify-center ' style={{ direction: 'rtl' }}>
      <div className='w-[300px] flex flex-col items-center justify-center gap-6 lg:relative lg:left-32'>
        <Image src={logo} width={200} height={200} alt='' />
        <form className='w-full flex flex-col items-start justify-center'>
          {/* <h1 className='font-semibold text-[17px] mb-3 text-[#1d3e5b] '>لوحة التحكم</h1> */}
          <input type="text" placeholder='اسم المستخدم' className='w-full border-b-2 border-[#00000033] outline-none p-3 text-[16px] focus:border-[#438ac8]' required />
          <input type="password" placeholder='الرقم السري' className='w-full border-b-2 border-[#00000033] outline-none p-3 text-[16px] focus:border-[#438ac8]' required />
          <button type='submit' className='w-full h-[45px] mt-8 rounded-md bg-[#438ac8] text-white cursor-pointer font-semibold hover:bg-[#3f81bc]  transition-[all_.2s]'>تسجيل الدخول</button>
        </form>
      </div>
    </div>
  )
}

export default Login
