'use client'
import { useEffect, useState } from 'react';
import Image from 'next/image';

// import icons
import { IoSearchOutline } from "react-icons/io5";
import { IoCubeOutline } from "react-icons/io5";
import { PiList } from "react-icons/pi";
import { IoCartOutline } from "react-icons/io5";
import { GrHomeRounded } from "react-icons/gr";
import { GrAppsRounded } from "react-icons/gr";

import { FaChartPie } from "react-icons/fa";
import Link from 'next/link';
import { usePathname } from 'next/navigation';


{/* <FaChartPie /> */ }


function Navbar() {

  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => { document.title = 'لوحة التحكم' }, [])

  const links_sidebar_style = 'w-[90%] flex items-center justify-end gap-3 p-2 rounded-md hover:bg-gray-200 hover:pr-4 transition-[all_.2s]'

  return (
    <div className="w-full h-[80px] px-[3%] flex items-center justify-between bg-[#dae6f2] text-[#224971] fixed top-0">
      <Image src="/" width={50} height={50} />

      {/* search */}
      <div className='w-[35%] flex items-center justify-between gap-3 px-5 bg-white text-[#224971] rounded-lg'>
        <input type="text" className='w-[90%] h-full py-[6px] outline-none ' placeholder='بحث...' style={{ direction: 'rtl' }} />
        <IoSearchOutline className='scale-[1.5] text-gray-400' />
      </div>

      <div className='flex items-center justify-between gap-3'>
        <div className='flex items-center justify-between gap-3 max-lg:hidden'>
          {/* <h1 className='text-[25px] font-semibold'>{document.title}</h1> */}
          <IoCubeOutline className='scale-[1.5]' />
        </div>
        <PiList className='scale-[1.8] cursor-pointer lg:hidden' onClick={() => setIsMenuOpen(!isMenuOpen)} />
      </div>


      {/* side bar */}
      <div className={` ${isMenuOpen ? 'mr-[-270px]' : ''} w-[250px] h-[89vh] absolute top-[80px]  right-0 flex flex-col bg-white shadow-[5px_10px_10px_0_black] lg:mr-0 transition-[all_.3s]`}>
        {/* links */}
        <div className=' w-full text-[19px] flex flex-col justify-center items-center gap-2 pt-2'>

          <Link href='/' className={`${pathname == '/' ? "bg-gray-200 pr-4" : ''} ${links_sidebar_style} `}>
            <span>الرئيسية</span>
            <GrHomeRounded />
          </Link>
          <Link href='/order' className={`${pathname == '/order' ? "bg-gray-200 pr-4" : ''} ${links_sidebar_style}`}>
            <span>الطلبات</span>
            <IoCartOutline className='scale-[1.3]'/>
          </Link>
          <Link href='/products' className={`${pathname == '/products' ? "bg-gray-200 pr-4" : ''}  ${links_sidebar_style}`}>
            <span>المنتجات</span>
            <GrAppsRounded className='scale-[1.3]'/>
          </Link>


        </div>
      </div>
    </div>
  );
};

export default Navbar;
