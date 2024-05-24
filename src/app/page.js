'use client'
import { Component, useEffect } from "react";
import Chart from 'react-apexcharts'

import Link from "next/link";
import Products from "./components/products";
import Order from "./order/page";

// import icons 
import { MdOutlineNewspaper } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { TbTruckLoading } from "react-icons/tb";
import { MdChevronLeft } from "react-icons/md";

class Donut extends Component {

  constructor(props) {
    super(props);

    this.state = {
      options: {},
      series: [44, 55, 41, 17, 15],
      labels: ['A', 'B', 'C', 'D', 'E']
    }
  }

  render() {
    return (
      <div className="scale-[1]">
        <Chart options={this.state.options} series={this.state.series} type="donut" width="380" />
      </div>
    )
  }
}



export default function Home() {
  useEffect(() => { document.title = ' الرئيسية' }, [])

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
    <div className="w-full flex flex-col items-start  gap-10 mt-8 pr-8 " style={{ direction: 'rtl' }}>
      <div className="flex items-start flex-wrap gap-2">
        {/* Sales statistics  */}
        <div className="">
          <h1 className="text-[#142433] text-[24px] font-semibold">.احصائيات المبيعات</h1>
          <div className="w-[318px] h-[360px] px-[26px] py-[27px] bg-[#DAE6F2] flex items-center justify-start flex-col gap-[24px] rounded-md">
            <div>
              <h3 className="text-[#142433] font-bold text-[16px] ">إجمالي إيرادات المبيعات</h3>
              <div className="w-[267px] h-[113px] bg-white mt-[8px] rounded-md flex flex-col items-center justify-around">
                <div className="flex items-center gap-1">
                  <h1 className="text-[#224971] text-[40px] font-bold">$250 ألف</h1>
                  <span className="text-[#8797A8] text-[16px] relative top-[10px]">/ في الشهر </span>
                </div>
                <div className="flex items-center justify-start gap-1">
                  <span className="w-[57px] h-[24px] rounded-full flex items-center justify-center text-[#2da905] bg-[#2ea90541]">k8.2+</span>
                  <span className="text-[#8797A8] text-[14px] relative">مقارنة بالشهر الماضي</span>
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
        <div>
          <h1 className="text-[#142433] text-[24px] font-semibold">ألمنتجات</h1>

          <div className="w-[421px] p-6 bg-[#DAE6F2] rounded-md flex flex-col items-start justify-center">
            <div className="w-full flex items-center justify-between">
              <h3 className="text-[#142433] font-bold text-[16px] ">الأكثر مبيعا</h3>
              <p>xx</p>
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
                  <h4 className=" w-[170px] [font-semibold text-[#224971]">$ 20 الف</h4>
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
        <div>

          <h1 className="text-white text-[24px] font-semibold">.</h1>
          <div className="w-[350px] bg-[#DAE6F2] h-[360px] rounded-md flex flex-col items-center justify-center">
            <Donut />
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
