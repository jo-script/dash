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
      number: '8',
      link: '/order/prepare-order'
    },
    {
      title: 'طلبات تم توصيلها',
      icon: <IoMdCloseCircleOutline className='scale-[1.3]' />,
      number: '8',
      link: '/order/delivered'
    },
    {
      title: 'الطلبات الجديدة',
      icon: <TbTruckLoading className='scale-[1.3]' />,
      number: '8',
      link: '/order/canceled-order'
    },
    {
      title: 'طلبات مرفوضه',
      icon: <MdOutlineNewspaper className='scale-[1.3]' />,
      number: '8',
      link: ''
    },
  ]


  return (
    <div className='w-full mt-8 flex flex-wrap gap-3 max-[]' style={{ direction: 'rtl' }}>
      {
        // Create an order card by looping a variable orderCard
        orderCard.map((data, index) => (
          <Link key={index} href={data.link} className='flex items-center justify-between gap-[60px] rounded-lg p-6 bg-[#dae6f2] border border-[#2249711e] hover:scale-[1.03] transition-[all_.2s]'>
            <div>
              <p className="mb-2 text-xl font-semibold tracking-tight text-[#224971] max-[690px]:text-[16px]">{data.title}</p>
              <div className='flex items-center gap-4 text-[19px] text-[#506b86]'>
                {data.icon}
                <span><span className='font-semibold text-[23px]'>{data.number}</span> طلب</span>
              </div>
            </div>
            <MdChevronLeft className='scale-[2] text-[#224971]' />
          </Link>
        ))
      }
    </div>
  )
}

export default Order
