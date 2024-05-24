import Link from "next/link";

// import icons
import { PiList } from "react-icons/pi";
import { MdOutlineNewspaper } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { TbTruckLoading } from "react-icons/tb";

export default function RootLayout({ children }) {

  // data links order
  const linksOrder = [
    {
      name: ' المنتجات',
      link: '/order/new-order',
      icon: <MdOutlineNewspaper className="scale-[1.5]" />
    },
    {
      name: 'التصنيفات',
      link: '/order/prepare-order',
      icon: <TbTruckLoading className="scale-[1.5]" />
    },
    {
      name: 'اضافة منتج جديد',
      link: '/products/add-product',
      icon: <TbTruckDelivery className="scale-[1.5]" />
    },
  
  ]

  return (
    <div style={{ direction: 'rtl' }} className="py-5 px-7">

      <div className=" linksOrder flex items-center justify-start gap-2 flex-wrap overflow-auto ">
        { // Create an order links by looping a variable linksOrder
          linksOrder.map((data, index) => (
            <Link key={index} href={data.link} className=" text-[#f0f7ff] bg-[#224971] hover:bg-[#285480] font-medium rounded-lg text-[14px] px-5 py-2.5 text-center flex items-center flex-nowrap justify-between gap-4 active:bg-[#18334f] transition-[all_.2s] dark:focus:ring-[#3b5998]/55 max-sm:text-sm max-sm:min-w-[160px] ">
              {data.name}
              {data.icon}
            </Link>
          ))
        }
      </div>
      {children}
    </div>
  );
}
