'use client'
import Link from "next/link";

// import icons
import { PiList } from "react-icons/pi";
import { MdOutlineNewspaper } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { TbTruckLoading } from "react-icons/tb";
import { useRouter } from "next/navigation";

import { upgrade } from "@/components/checkUpgrade";

export default function RootLayout({ children }) {

  const router = useRouter()

  const nextPage = () => {
    if (upgrade) {
      router.push('/products/add-product')
    }
    else {
      return <div>noo</div>
    }
  }



  return (
    <div style={{ direction: 'rtl' }} className="py-5 px-7">

      <div className=" linksOrder flex items-center justify-start gap-2 flex-wrap overflow-auto ">
        {/* // Create an order links by looping a variable linksOrder */}

        <Link href='/products' className=" text-[#f0f7ff] bg-[#224971] hover:bg-[#285480] font-medium rounded-lg text-[14px] px-5 py-2.5 text-center flex items-center flex-nowrap justify-between gap-2 active:bg-[#18334f] transition-[all_.2s]  max-sm:text-sm max-sm:w-auto ">
          <p>المنتجات</p>
          <MdOutlineNewspaper className="scale-[1.5]" />
        </Link>
        <Link href='/products' className=" text-[#f0f7ff] bg-[#224971] hover:bg-[#285480] font-medium rounded-lg text-[14px] px-5 py-2.5 text-center flex items-center flex-nowrap justify-between gap-2 active:bg-[#18334f] transition-[all_.2s]  max-sm:text-sm max-sm:w-auto ">
          <p>التصنيفات</p>
          <TbTruckLoading className="scale-[1.5]" />
        </Link>
        <button onClick={nextPage} style={{background:upgrade ? '#224971': '#2249716e', cursor:upgrade ? 'pointer': 'no-drop',}} className={` text-[#f0f7ff] bg-[#224971] hover:bg-[#285480] font-medium rounded-lg text-[14px] px-5 py-2.5 text-center flex items-center flex-nowrap justify-between gap-2 active:bg-[#18334f] transition-[all_.2s]  max-sm:text-sm max-sm:w-auto `}>
          <p>اضافة منتج جديد</p>
          <TbTruckDelivery className="scale-[1.5]" /> 
                 </button>


      </div>
      {children}
    </div>
  );
}
