import React from 'react'


import logo from '../public/logo/logo.png'
import Image from 'next/image'

function Login() {
  return (
    <div className='w-full h-[90vh] flex items-center justify-center'>
      <div>
        <Image src={logo} width={300} height={300} alt=''  />
        <h1>لوحة التحكم</h1>

        <form>
          <input type="text" placeholder='اسم المستخدم' className='border-b border-[2px_solid_#00000033]'  />
        </form>
      </div>
    </div>
  )
}

export default Login
