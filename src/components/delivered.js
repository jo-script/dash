'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import secureLocalStorage from 'react-secure-storage';
// import jwtDecode from 'jwt-decode';
import { BiShow } from 'react-icons/bi';
import { jwtDecode } from 'jwt-decode';

function Delivered() {
  const [deliveredOrders, setDeliveredOrders] = useState([]);

  useEffect(() => {
    const fetchDeliveredOrders = async () => {
      const token = secureLocalStorage.getItem('_tocken');
      if (token) {
        const accessToken = jwtDecode(token);
        try {
          const response = await fetch('/api/auth/admin/orders.php?cartstate=4', {
            headers: {
              Accept: 'application/json',
              Authorization: `Bearer ${accessToken}`,
            },
          });

          if (!response.ok) {
            throw new Error('Network response was not ok');
          }

          const data = await response.json();
          setDeliveredOrders(data);
        } catch (error) {
          console.error('There was a problem with the fetch operation:', error);
        }
      }
    };

    fetchDeliveredOrders();
    document.title = 'طلبات تم توصيلها';
  }, []);

  console.log(deliveredOrders);

  return (
    <div className='w-full flex flex-col items-center gap-3 mt-10'>
      {/* {deliveredOrders.length != 0 ?  (
        <div  className='w-[98%] h-[120px] max-[750px]:h-auto rounded-md bg-[#dae6f2] border shadow-sm flex items-center justify-around max-[750px]:justify-start gap-4 max-[750px]:overflow-x-scroll max-[750px]:px-5 max-[750px]:py-1 hover:scale-[1.01] transition-[all_.02s]'>
          <div className='max-[750px]:min-w-[100px] flex flex-col items-start justify-start gap-2 text-[#364e64]'>
            <Link href={`/order/delivered/${deliveredOrders.orders.data.cartid}`} className='flex items-center gap-2 px-2 pb-[2px] rounded-full hover:bg-blue-400 hover:text-white transition-[all_.1s]'>
              <span>عرض</span>
              <BiShow />
            </Link>
          </div>
          <div className='max-[750px]:min-w-[100px] flex flex-col items-center justify-center text-[#224971]'>
            <p className='text-[18px]'>رقم الطلب</p>
            <p className='text-[#364e64] font-bold text-[17px]'>{deliveredOrders.orders.data.cartid}</p>
            <p className='text-[15px]'>{deliveredOrders.orders.data.cartstatear}</p>
          </div>
          <div className='max-[750px]:min-w-[100px] flex flex-col items-center justify-center text-[#224971]'>
            <p className='text-[18px]'>عدد المنتجات</p>
            <p className='text-[#364e64] font-bold text-[17px]'></p>
            <p className='text-[15px]'>منتج</p>
          </div>
          <div className='max-[750px]:min-w-[100px] flex flex-col items-center justify-center text-[#224971]'>
            <p className='text-[18px]'>عدد القطع</p>
            <p className='text-[#364e64] font-bold text-[17px]'></p>
            <p className='text-[15px]'>قطعة</p>
          </div>
          <div className='max-[750px]:min-w-[100px] flex flex-col items-center justify-center'>
            <Image src='/' alt='' width={50} height={50} />
            <p className='text-[#364e64] text-[17px]'></p>
          </div>
          <div className='max-[750px]:min-w-[100px] flex flex-col items-center justify-center'>
            <Image src='/' alt='' width={50} height={50} />
            <p className='text-[#364e64] text-[17px]'></p>
          </div>
        </div>
      ) : <div>لا توجد طلبات تم توصيلها</div>} */}
    </div>
  );
}

export default Delivered;
