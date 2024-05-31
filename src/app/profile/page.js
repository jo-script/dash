'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'

import logo from '../public/logo/logo.png'


function Page() {

  

  let dataUser = [
    {
      name: ' وائل مأمون',
      phone: '0123456789',
      address: 'اسكندريه / سموحه'
    }
  ]

  useEffect(() => {
    document.title = dataUser[0].name
  }, [])



 
  return (
    <div className='w-full pt-10 pr-11' style={{ direction: 'rtl' }}>
      {
        dataUser.map((data, index) => (
          <div key={index} className='flex flex-col justify-start '>
            <Image src={logo} width={220} height={220} alt='' className='rounded-full border' />
            <div className='mt-10 flex flex-col justify-start gap-4 border-t pt-8'>
              <div className='pr-4'>
                <h2 className='font-semibold text-[#142433] '>الإسم:</h2>
                <p className='font-sm text-[#8797A8] '>{data.name}</p>
              </div>
              <div className='pr-4 '>
                <h2 className='font-semibold text-[#142433]'>الموبايل:</h2>
                <p className='font-sm text-[#8797A8] '>{data.phone}</p>
              </div>
              <div className='pr-4 '>
                <h2 className='font-semibold text-[#142433]'>ألعنوان:</h2>
                <p className='font-sm text-[#8797A8] '>{data.address}</p>
              </div>
            </div>
          </div>
        ))
      }

    </div>
  )
}

export default Page
