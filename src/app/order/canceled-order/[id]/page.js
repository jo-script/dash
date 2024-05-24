"use client"
import React from 'react';
import { useRouter } from 'next/navigation';
import { dataOrders } from '../../../order/new-order/dataOrder.js';
import Link from 'next/link.js';
import Image from 'next/image';

const OrderDetail = ({ params }) => {
  const { id } = params;
  const order = dataOrders.find((order) => order.id === parseInt(id));

  if (!order) {
    return <div>Order not found</div>;
  }

  return (

    <div>

      <div class="w-3/4 overflow-x-auto shadow-md sm:rounded-lg mt-10">
        <table class="w-full text-sm text-start rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-[#dae6f2] uppercase bg-[#224971] ">
            <tr>
              <th scope="col" class=" text-start px-6 py-3 text-[16px]">معلومات الطلب</th>
              <th scope="col" class="px-6 py-3"> </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white text-black">
              <th scope="row" class="w-2/4 text-start px-6 py-4 font-medium"> رقم الطلب </th>
              <td class=" text-start px-6 py-4">{order.numberOrders}</td>
            </tr>
            <tr class="bg-gray-200 text-black">
              <th scope="row" class=" text-start px-6 py-4 font-medium ">حالة الطلب</th>
              <td class="px-6 py-4">White</td>
            </tr>
            <tr class="bg-white text-black">
              <th scope="row" class=" text-start px-6 py-4 font-medium ">عدد المنتجات</th>
              <td class="px-6 py-4">{order.numberProducts}</td>
            </tr>
            <tr class="bg-gray-200 text-black">
              <th scope="row" class="text-start px-6 py-4 font-medium ">عدد القطع</th>
              <td class="px-6 py-4">{order.numberPieces}</td>
            </tr>

          </tbody>
        </table>
      </div>

      <div class="w-3/4 overflow-x-auto shadow-md sm:rounded-lg mt-10">
        <table class="w-full text-sm text-start rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-[#dae6f2] uppercase bg-[#224971] ">
            <tr>
              <th scope="col" class=" text-start px-6 py-3 text-[16px]">معلومات العميل</th>
              <th scope="col" class="px-6 py-3"> </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white text-black">
              <th scope="row" class="w-2/4 text-start px-6 py-4 font-medium">اسم العميل</th>
              <td class=" text-start px-6 py-4">{order.numberOrders}</td>
            </tr>
            <tr class="bg-gray-200 text-black">
              <th scope="row" class=" text-start px-6 py-4 font-medium ">الرقم التعريفي للعميل</th>
              <td class="px-6 py-4">White</td>
            </tr>
            <tr class="bg-white text-black">
              <th scope="row" class=" text-start px-6 py-4 font-medium "> البريد الالكتروني	</th>
              <td class="px-6 py-4">{order.numberProducts}</td>
            </tr>
            <tr class="bg-gray-200 text-black">
              <th scope="row" class="text-start px-6 py-4 font-medium ">رقم الهاتف	</th>
              <td class="px-6 py-4">{order.numberPieces}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="w-3/4 overflow-x-auto shadow-md sm:rounded-lg mt-10">
        <table class="w-full text-sm text-start rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-[#dae6f2] uppercase bg-[#224971] ">
            <tr>
              <th scope="col" class=" text-start px-6 py-3 text-[16px]">معلومات التوصيل</th>
              <th scope="col" class="px-6 py-3"> </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white text-black">
              <th scope="row" class="w-2/4 text-start px-6 py-4 font-medium">عنوان العميل	</th>
              <td class=" text-start px-6 py-4">{order.numberOrders}</td>
            </tr>
            <tr class="bg-gray-200 text-black">
              <th scope="row" class=" text-start px-6 py-4 font-medium ">رقم التواصل</th>
              <td class="px-6 py-4">White</td>
            </tr>
            <tr class="bg-white text-black">
              <th scope="row" class=" text-start px-6 py-4 font-medium ">خطوط الطول	</th>
              <td class="px-6 py-4">{order.numberProducts}</td>
            </tr>
            <tr class="bg-gray-200 text-black">
              <th scope="row" class="text-start px-6 py-4 font-medium ">دوائر العرض	</th>
              <td class="px-6 py-4">{order.numberPieces}</td>
            </tr>
            <tr class="bg-white text-black">
              <th scope="row" class=" text-start px-6 py-4 font-medium ">خط طول المتجر</th>
              <td class="px-6 py-4">{order.numberProducts}</td>
            </tr>
            <tr class="bg-gray-200 text-black">
              <th scope="row" class="text-start px-6 py-4 font-medium ">دائرة عرض المتجر</th>
              <td class="px-6 py-4">{order.numberPieces}</td>
            </tr>
            <tr class="bg-white text-black">
              <th scope="row" class="text-start px-6 py-4 font-medium ">المسافة</th>
              <td class="px-6 py-4">{order.numberPieces}</td>
            </tr>
            <tr class="bg-gray-200 text-black">
              <th scope="row" class="text-start px-6 py-4 font-medium ">مكان المتجر</th>
              <td class="px-6 py-4">{order.numberPieces}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="w-3/4 overflow-x-auto shadow-md sm:rounded-lg mt-10">
        <table class="w-full text-sm text-start rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-[#dae6f2] uppercase bg-[#224971] ">
            <tr>
              <th scope="col" class=" text-start px-6 py-3 text-[16px]">معلومات المنتجات</th>
              <th scope="col" class="px-6 py-3"> </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white text-black">
              <th scope="row" class="w-2/4 text-start px-6 py-4 font-medium">اسم المنتج</th>
              <td class=" text-start px-6 py-4">{order.numberOrders}</td>
            </tr>
            <tr class="bg-gray-200 text-black">
              <th scope="row" class=" text-start px-6 py-4 font-medium ">صورة المنتج</th>
              <td class="px-6 py-4">White</td>
            </tr>
            <tr class="bg-white text-black">
              <th scope="row" class=" text-start px-6 py-4 font-medium ">رقم المنتج</th>
              <td class="px-6 py-4">{order.numberProducts}</td>
            </tr>
            <tr class="bg-gray-200 text-black">
              <th scope="row" class="text-start px-6 py-4 font-medium ">التاجر</th>
              <td class="px-6 py-4">{order.numberPieces}</td>
            </tr>
            <tr class="bg-white text-black">
              <th scope="row" class=" text-start px-6 py-4 font-medium ">التصنيف</th>
              <td class="px-6 py-4">{order.numberProducts}</td>
            </tr>
            <tr class="bg-gray-200 text-black">
              <th scope="row" class="text-start px-6 py-4 font-medium ">الكمية المطلوبة</th>
              <td class="px-6 py-4">{order.numberPieces}</td>
            </tr>
            <tr class="bg-white text-black">
              <th scope="row" class=" text-start px-6 py-4 font-medium ">السعر</th>
              <td class="px-6 py-4">{order.numberProducts}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="w-3/4 overflow-x-auto shadow-md sm:rounded-lg mt-10">
        <table class="w-full text-sm text-start rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-[#dae6f2] uppercase bg-[#224971] ">
            <tr>
              <th scope="col" class=" text-start px-6 py-3 text-[16px]">معلومات الدفع</th>
              <th scope="col" class="px-6 py-3"> </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white text-black">
              <th scope="row" class="w-2/4 text-start px-6 py-4 font-medium">طريقة الدفع</th>
              <td class=" text-start px-6 py-4">{order.numberOrders}</td>
            </tr>
            <tr class="bg-gray-200 text-black">
              <th scope="row" class=" text-start px-6 py-4 font-medium ">المبلغ المطلوب	</th>
              <td class="px-6 py-4">White</td>
            </tr>
            <tr class="bg-white text-black">
              <th scope="row" class=" text-start px-6 py-4 font-medium ">العملة</th>
              <td class="px-6 py-4">{order.numberProducts}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='my-10 flex items-center gap-6'>
        <button className="w-40 bg-blue-500 hover:bg-blue-700 text-white px-2 py-[6px] rounded transition-[all_.1s]">قبول الطلب</button>
      </div>

    </div>

  );
};

export default OrderDetail;
