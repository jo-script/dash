"use client"
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useParams } from 'next/navigation';

const OrderDetail = () => {
  const { id } = useParams();
  const [order, setOrder] = useState([]);

  useEffect(() => {
    const fetchOrderDetail = async () => {
      try {
        const response = await fetch(`/api/auth/supplier/orders.php?cartstate=1`);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setOrder(data);
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }
    };

    fetchOrderDetail();
  }, [id]);

  console.log(order);

  if (!order) {
    return <div>Loading...</div>;
  }

  return (
    <div className='flex flex-col max-[900px]:items-center'>
      <div className="w-3/4 max-[900px]:w-full overflow-x-auto shadow-md sm:rounded-lg mt-10">
        <table className="w-full text-sm text-start rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-[#dae6f2] uppercase bg-[#224971] ">
            <tr>
              <th scope="col" className=" text-start px-6 py-3 text-[16px]">معلومات الطلب</th>
              <th scope="col" className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white text-black">
              <th scope="row" className="w-2/4 text-start px-6 py-4 font-medium"> رقم الطلب </th>
              <td className=" text-start px-6 py-4">{order.cartid}</td>
            </tr>
            <tr className="bg-gray-200 text-black">
              <th scope="row" className=" text-start px-6 py-4 font-medium ">حالة الطلب</th>
              <td className="px-6 py-4">{order.cartstatear}</td>
            </tr>
            <tr className="bg-white text-black">
              <th scope="row" className=" text-start px-6 py-4 font-medium ">عدد المنتجات</th>
              <td className="px-6 py-4">{order.productsnumber}</td>
            </tr>
            <tr className="bg-gray-200 text-black">
              <th scope="row" className="text-start px-6 py-4 font-medium ">عدد القطع</th>
              <td className="px-6 py-4">{order.sumpieces}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="w-3/4 max-[900px]:w-full overflow-x-auto shadow-md sm:rounded-lg mt-10">
        <table className="w-full text-sm text-start rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-[#dae6f2] uppercase bg-[#224971] ">
            <tr>
              <th scope="col" className=" text-start px-6 py-3 text-[16px]">معلومات العميل</th>
              <th scope="col" className="px-6 py-3"> </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white text-black">
              <th scope="row" className="w-2/4 text-start px-6 py-4 font-medium">اسم العميل</th>
              <td className=" text-start px-6 py-4">{order.firstname} {order.lastname} </td>
            </tr>
            <tr className="bg-gray-200 text-black">
              <th scope="row" className=" text-start px-6 py-4 font-medium ">الرقم التعريفي للعميل</th>
              <td className="px-6 py-4">{order.username}</td>
            </tr>
            <tr className="bg-gray-200 text-black">
              <th scope="row" className=" text-start px-6 py-4 font-medium ">البريد الالكتروني	</th>
              <td className="px-6 py-4">{order.email}</td>
            </tr>
            <tr className="bg-gray-200 text-black">
              <th scope="row" className=" text-start px-6 py-4 font-medium ">رقم الهاتف	</th>
              <td className="px-6 py-4">{order.phone}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderDetail;
