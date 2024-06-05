'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { dataOrders } from '../app/order/new-order/dataOrder.js'; // import data order 

// import icons
import { MdDone } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { BiShow } from "react-icons/bi";
import secureLocalStorage from 'react-secure-storage';
import { jwtDecode } from 'jwt-decode';
// import jwtDecode from 'jwt-decode'; // Corrected import

function NewOrder() {
  const [newDeliveredOrders, setNewDeliveredOrders] = useState(null); // Initialize as null
  
  useEffect(() => {
    const NewDeliveredOrders = async () => {
      const token = secureLocalStorage.getItem('_tocken');
      if (token) {
        const accessToken = jwtDecode(token);
        try {
          const response = await fetch('/api/auth/supplier/orders.php?cartstate=3', {
            headers: {
              Accept: 'application/json',
              Authorization: `Bearer ${accessToken}`,
            },
          }); 

          if (!response.ok) {
            throw new Error('Network response was not ok');
          }

          const data = await response.json();
          setNewDeliveredOrders(data);
        } catch (error) {
          console.error('There was a problem with the fetch operation:', error);
        }
      }
    };

    NewDeliveredOrders();
    document.title = ' طلبات جاري تحضيرها';
  }, []);
  
  if (!newDeliveredOrders) {
    return <div>Loading...</div>; // Display a loading state until data is fetched
  }

  // Use optional chaining to prevent errors if data is not present
  const orders = newDeliveredOrders?.cart?.data?.orders || [];
  // console.log(orders);

  return (
    <div className='w-full flex flex-col items-center gap-3 mt-10'>
      {orders.map((order) => (      
        <div key={order.cartid} className='w-[98%] h-[120px] max-[750px]:h-auto rounded-md bg-[#dae6f2] border shadow-sm flex items-center justify-around max-[750px]:justify-start gap-4 max-[750px]:overflow-x-scroll max-[750px]:px-5  hover:scale-[1.01] transition-[all_.02s]'>
          <div className='max-[750px]:min-w-[100px] flex flex-col items-start justify-start gap-2 text-[#364e64]'>
          <Link href={`/order/prepare-order/${order.cartid}`} className='flex items-center gap-2 px-2 pb-[2px] rounded-full hover:bg-blue-400 hover:text-white transition-[all_.1s]'>
              <span>عرض</span>
              <BiShow />
            </Link>
            <Link href={`/order/canceled-order/${order.cartid}`} className='flex items-center gap-2 px-2 pb-[2px] rounded-full hover:bg-blue-400 hover:text-white transition-[all_.1s]'>
              <span> تم تحضير الطلب</span>
              <BiShow />
            </Link>
            <Link href={`/order/canceled-order/${order.cartid}`} className='flex items-center gap-2 px-2 pb-[2px] rounded-full hover:bg-blue-400 hover:text-white transition-[all_.1s]'>
              <span>رفض الطلب</span>
              <BiShow />
            </Link>
          </div>
          <div className=' max-[750px]:min-w-[100px] flex flex-col items-center justify-center text-[#224971]'>
            <p className='text-[18px]'>رقم الطلب</p>
            <p className='text-[#364e64] font-bold text-[17px]'>{order.cartid}</p>
            <p className='text-[15px]'>{order.cartstatear}</p>
          </div>
          <div className='max-[750px]:min-w-[100px]  flex flex-col items-center justify-center text-[#224971]'>
            <p className='text-[18px]'>عدد المنتجات</p>
            <p className='text-[#364e64] font-bold text-[17px]'>{order.products.length}</p>
            <p className='text-[15px]'>منتج</p>
          </div>
          <div className='max-[750px]:min-w-[100px] flex flex-col items-center justify-center text-[#224971]' >
            <p className='text-[18px]'>عدد القطع</p>
            <p className='text-[#364e64] font-bold text-[17px]'>{order.productsnumber}</p>
            <p className='text-[15px]'>قطعة</p>
          </div>
          <div className='max-[750px]:min-w-[100px] flex flex-col items-center justify-center'>
          <p className='text-[18px]'>اسم العميل</p>
            
            <p className='text-[#364e64] text-[17px]'>{order.user.firstname }</p>
          </div>

        </div>
      ))}
    </div>
  );
}

export default NewOrder;
