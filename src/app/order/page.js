'use client'
import Link from 'next/link';
import { useEffect, useState } from 'react';


// import icons 
import { MdOutlineNewspaper } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { TbTruckLoading } from "react-icons/tb";
import { MdChevronLeft } from "react-icons/md";

function Order() {
  // title page 
  useEffect(() => { document.title = 'الطلبات' }, [])


  // data order card
  let orderCard = [
    {
      title: 'الطلبات الجديدة',
      icon: <MdOutlineNewspaper className='scale-[1.3]' />,
      number: '8',
      link: '/order/new-order'
    },
    {
      title: 'طلبات جاري تحضيرها',
      icon: <TbTruckDelivery className='scale-[1.3]' />,
      number: '18',
      link: '/order/prepare-order'
    },
    {
      title: 'طلبات تم توصيلها',
      icon: <TbTruckDelivery className='scale-[1.3]' />,
      number: '8',
      link: '/order/delivered'
    },
    {
      title: 'الطلبات مجدولة',
      icon: <TbTruckLoading className='scale-[1.3]' />,
      number: '22',
      link: '/order/canceled-order'
    },
    {
      title: 'طلبات مرفوضه',
      icon: <IoMdCloseCircleOutline className='scale-[1.3]	' />,
      number: '3',
      link: '/order/canceled-order'
    },
  ]


  return (
    <div className='w-full mt-8 flex flex-wrap gap-3 max-[]' style={{ direction: 'rtl' }}>
      {
        // Create an order card by looping a variable orderCard
        orderCard.map((data, index) => (
          <Link key={index} href={data.link} className='flex items-center justify-between gap-[60px] rounded-lg p-6 bg-[#DAE6F2] border border-[#2249711e] hover:scale-[1.03] transition-[all_.2s]'>
            <div>
              <p className="mb-2 text-[16px] font-semibold tracking-tight text-[#142433] max-[690px]:text-[16px]">{data.title}</p>
              <div className='flex items-center gap-4 text-[19px] '>
                <div className='bg-white text-[#21303f89] rounded-md w-[34px] h-[37px] flex items-center justify-center box-border'>
                  {data.icon}
                </div>
                <span className='text-[#8797A8]'><span className='font-semibold text-[23px] text-[#142433]'>{data.number}</span> طلب</span>
              </div>
            </div>
            <MdChevronLeft className='scale-[1.8] text-[#142433a0]' />
          </Link>
        ))
      }
    </div>
  )
}

export default Order
