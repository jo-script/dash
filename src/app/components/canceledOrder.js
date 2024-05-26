"use client"
import React, { useEffect } from 'react';
import Image from 'next/image';
import { dataOrders } from '../order/new-order/dataOrder.js'; // import data order 
import Link from 'next/link';

import { MdDone } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { BiShow } from "react-icons/bi";



function CanceledOrder() {
  useEffect(() => { document.title = 'طلبات مرفوضه' }, [])

  return (
    <div className='w-full flex flex-col items-center gap-3 mt-10'>

      {dataOrders.map((order) => (
        <div key={order.id} className='w-[98%] h-[120px] rounded-md bg-[#dae6f2] border shadow-sm  flex items-center justify-around gap-4 hover:scale-[1.01] transition-[all_.02s] max-[750px]:justify-start max-[750px]:overflow-x-scroll max-[750px]:px-5'>
          <div className='max-[750px]:min-w[100px] flex flex-col items-center justify-center text-[#224971]'>
            <p className=' max-[750px]:min-w[100px] text-[18px]'>رقم الطلب</p>
            <p className='text-[#364e64] font-bold text-[17px]'>{order.numberOrders}</p>
            <p className='text-[15px]'>تحت المراجعة</p>
          </div>
          <div className=' max-[750px]:min-w[100px] flex flex-col items-center justify-center text-[#224971]'>
            <p className='text-[18px]'>عدد المنتجات</p>
            <p className='text-[#364e64] font-bold text-[17px]'>{order.numberProducts}</p>
            <p className='text-[15px]'>منتج</p>
          </div>
          <div className=' max-[750px]:min-w[100px] flex flex-col items-center justify-center text-[#224971]' >
            <p className='text-[18px]'>عدد القطع</p>
            <p className='text-[#364e64] font-bold text-[17px]'>{order.numberPieces}</p>
            <p className='text-[15px]'>قطعة</p>
          </div>
          <div className=' max-[750px]:min-w[100px] flex flex-col items-center justify-center'>
            <Image src={order.store.imgProfile} alt='' width={50} height={50} />
            <p className='text-[#364e64] text-[17px]'>{order.store.name}</p>
          </div>
          <div className=' max-[750px]:min-w[100px] flex flex-col items-center justify-center'>
            <Image src={order.client.imgProfile} alt='' width={50} height={50} />
            <p className='text-[#364e64] text-[17px]'>{order.client.name}</p>
          </div>
          <div className=' max-[750px]:min-w[100px] flex flex-col items-start justify-start gap-2 text-[#364e64]'>
            <Link href={`/order/canceled-order/${order.id}`} className='flex items-center gap-2 px-2 pb-[2px] rounded-full hover:bg-blue-400 hover:text-white transition-[all_.1s]'>
              <span>عرض</span>
              <BiShow />
            </Link>
            <button className='flex items-center gap-2 px-2 pb-[2px] rounded-full hover:bg-green-400 hover:text-white transition-[all_.1s]'>
              <span>قبول</span>
              <MdDone />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CanceledOrder;
