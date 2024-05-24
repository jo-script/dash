'use client'
import { Component, useEffect, useState } from "react";
import dynamic from 'next/dynamic';



import Link from "next/link";
import Products from "./components/products";
import Order from "./order/page";

// import icons 
import { MdOutlineNewspaper } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { TbTruckLoading } from "react-icons/tb";
import { MdChevronLeft } from "react-icons/md";




export default function Home() {
  useEffect(() => { document.title = ' الرئيسية' }, [])

  const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const [chartData, setChartData] = useState({
  options1: {
    colors: ['#faa000', '#00E396', '#775DD0', '#FEB019', '#008FFB'], // Custom colors for the first chart
    labels: ['A', 'B', 'C', 'D', 'E'],
    chart: {
      fontFamily: 'Helvetica, Arial, sans-serif', // Setting the font style for the chart
      foreColor: '#333333', // Setting the font color for the chart
      fontSize: '30px' // Setting the font size for the chart
    }
  },
  series1: [44, 55, 41, 17, 44],
})

  // data order card
  let orderCard = [
    {
      title: 'كل الطلبات',
      icon: <MdOutlineNewspaper className='scale-[1.3]' />,
      number: '8',
      link: '/order/new-order'
    },
    {
      title: '  الطلبات الجديدة',
      icon: <TbTruckDelivery className='scale-[1.3]' />,
      number: '8',
      link: '/order/prepare-order'
    },
    {
      title: 'طلبات تم توصيلها',
      icon: <TbTruckDelivery className='scale-[1.3]' />,
      number: '8',
      link: '/order/delivered'
    },
    {
      title: 'طلبات مرفوضه',
      icon: <IoMdCloseCircleOutline className='scale-[1.3]	' />,
      number: '8',
      link: ''
    },
  ]


  return (
    <div className="w-full flex flex-col items-start  gap-10 mt-8 pr-8 max-[500px]:px-2 " style={{ direction: 'rtl' }}>
      <div className="flex items-start flex-wrap gap-2">
        {/* Sales statistics  */}
        <div className="max-[500px]:w-full">
          <h1 className="text-[#142433] text-[24px] font-semibold">احصائيات المبيعات</h1>
          <div className="w-[318px] max-[500px]:w-full max-[500px]:h-auto h-[360px] px-[26px] py-[27px] bg-[#DAE6F2] flex items-center justify-start flex-col gap-[24px] rounded-md">
            <div className="max-[500px]:w-full">
              <h3 className="text-[#142433] font-bold text-[16px] ">إجمالي إيرادات المبيعات</h3>
              <div className="w-[267px] max-[500px]:w-full max-[500px]:pr-3 h-[113px] bg-white mt-[8px] rounded-md flex flex-col items-center justify-around">
                <div className=" max-[500px]:w-full flex items-center gap-1">
                  <h1 className="text-[#224971] text-[40px] font-bold">250 ألف</h1>
                  <span className="text-[#8797A8] text-[16px] relative top-[10px]">/ في الشهر </span>
                </div>
              </div>
            </div>

            <div className="w-full text-start">
              <h3 className="text-[#142433] font-bold text-[16px] "> الإيرادات الأكثر مبيعا  </h3>
              <span className="text-[#8797A8] text-[16px] relative"> إجمالي <span className="font-semibold"> 20.6 ألف </span> عميل</span>
            </div>

          </div>
        </div>

        {/* ------------- */}
        <div className="max-[500px]:w-[300px]">
          <h1 className="text-[#142433] text-[24px] font-semibold">المنتجات</h1>

          <div className="w-[421px] max-[500px]:w-full p-6 bg-[#DAE6F2] rounded-md flex flex-col items-start justify-center">
            <div className="w-full flex items-center justify-between">
              <h3 className="text-[#142433] font-bold text-[16px] ">الأكثر مبيعا</h3>
        
            </div>
            <div className="mt-[26px] w-full">
              <div className="w-full flex  items-center justify-start">
                <h3 className="w-[133px] text-[#142433] font-bold text-[16px] text-start">إسم المنتج</h3>
                <h3 className="w-[170px] text-[#142433] font-bold text-[16px] text-start ">إجمالي المبيعات</h3>
                <h3 className=" text-[#142433] font-bold text-[16px] text-start ">الحالة</h3>
              </div>

              <div className="mt-[30px] w-full">
                <div className="w-full flex items-start justify-start">
                  <div className="w-[133px]">
                    <h4 className="text-[#506173] text-[16px] font-semibold">الاسم هنا</h4>
                    <p className="text-[#506173] text-[16px]">القسم</p>
                  </div>
                  <h4 className=" w-[170px] [font-semibold text-[#224971]"> 20 الف</h4>
                  <p className="font-semibold text-[#2DA905] text-[14px]">في المخزون </p>
                </div>
              </div>
              <div className="mt-[30px] w-full">
                <div className="w-full flex items-start justify-start">
                  <div className="w-[133px]">
                    <h4 className="text-[#506173] text-[16px] font-semibold">الاسم هنا</h4>
                    <p className="text-[#506173] text-[16px]">القسم</p>
                  </div>
                  <h4 className=" w-[170px] [font-semibold text-[#224971]">20 الف</h4>
                  <p className="font-semibold text-[#2DA905] text-[14px]">في المخزون </p>
                </div>
              </div>
              <div className="mt-[30px] w-full">
                <div className="w-full flex items-start justify-start">
                  <div className="w-[133px]">
                    <h4 className="text-[#506173] text-[16px] font-semibold">الاسم هنا</h4>
                    <p className="text-[#506173] text-[16px]">القسم</p>
                  </div>
                  <h4 className=" w-[170px] [font-semibold text-[#224971]">$ 20 الف</h4>
                  <p className="font-semibold text-[#2DA905] text-[14px]">في المخزون </p>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className="max-[500px]:w-full">

          <h1 className="text-white text-[24px] font-semibold">.</h1>
          <div className="w-[350px] max-[500px]:w-full bg-[#DAE6F2] h-[360px] rounded-md flex flex-col items-center justify-center">
          <Chart options={chartData.options1} series={chartData.series1} type="donut" width="380" />

          </div>
        </div>
      </div>


      <div className='w-full' style={{ direction: 'rtl' }}>
        <h1 className="text-[#142433] text-[24px] font-semibold">. الطلبات</h1>

        <div className="w-full mt-3 flex flex-wrap gap-3">
          {/* // Create an order card by looping a variable orderCard */}
          {
            orderCard.map((data, index) => (
              <Link key={index} href={data.link} className='w-[260px] h-[126px] flex items-center justify-between gap-[60px] rounded-lg p-6 bg-[#DAE6F2] border border-[#2249711e] hover:scale-[1.03] transition-[all_.2s]'>
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

      </div>
    </div>
  );
}
