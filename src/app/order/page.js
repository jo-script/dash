"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

// import icons
import { MdOutlineNewspaper } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { TbTruckLoading } from "react-icons/tb";
import { MdChevronLeft } from "react-icons/md";
import secureLocalStorage from "react-secure-storage";
import { jwtDecode } from "jwt-decode";

function Order() {
  const [newNumber, setNewNumber] = useState(0);
  const [deliveredNumber, setDeliveredNumber] = useState(0);
  const [preparedNumber, setPreparedNumber] = useState(0);
  const [cancelledNumber, setCancelledNumber] = useState(0);

  // title page
  useEffect(() => {
    document.title = "الطلبات";
  }, []);

  const NewDeliveredOrders = async () => {
    const token = secureLocalStorage.getItem("_tocken");
    if (token) {
      const accessToken = jwtDecode(token);
      try {
        const response = await fetch(
          "/api/auth/supplier/orders.php?cartstate=1",
          {
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        console.log(data);
        setNewNumber(data.cart.data.orders.length);
        console.log(newNumber);
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
    }
  };
  const DeliveredOrders = async () => {
    const token = secureLocalStorage.getItem("_tocken");
    if (token) {
      const accessToken = jwtDecode(token);
      try {
        const response = await fetch(
          "/api/auth/supplier/orders.php?cartstate=4",
          {
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        console.log(data);
        setDeliveredNumber(data.cart.data.orders.length);
        console.log(deliveredNumber);
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
    }
  };
  const PreparedOrders = async () => {
    const token = secureLocalStorage.getItem("_tocken");
    if (token) {
      const accessToken = jwtDecode(token);
      try {
        const response = await fetch(
          "/api/auth/supplier/orders.php?cartstate=2",
          {
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        console.log(data);
        setPreparedNumber(data.cart.data.orders.length);
        console.log(preparedNumber);
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
    }
  };
  const cancelledOrders = async () => {
    const token = secureLocalStorage.getItem("_tocken");
    if (token) {
      const accessToken = jwtDecode(token);
      try {
        const response = await fetch(
          "/api/auth/supplier/orders.php?cartstate=5",
          {
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        console.log(data);
        setCancelledNumber(data.cart.data.orders.length);
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
    }
  };
  useEffect(() => {
    NewDeliveredOrders();
    DeliveredOrders();
    PreparedOrders();
    cancelledOrders();
  }, []);
  // data order card
  let orderCard = [
    {
      title: "الطلبات الجديدة",
      icon: <MdOutlineNewspaper className="scale-[1.3]" />,
      number: newNumber,
      link: "/order/new-order",
    },
    {
      title: "طلبات جاري تحضيرها",
      icon: <TbTruckDelivery className="scale-[1.3]" />,
      number: preparedNumber,
      link: "/order/prepare-order",
    },
    {
      title: "طلبات تم توصيلها",
      icon: <TbTruckDelivery className="scale-[1.3]" />,
      number: deliveredNumber,
      link: "/order/delivered",
    },
    // {
    //   title: 'الطلبات مجدولة',
    //   icon: <TbTruckLoading className='scale-[1.3]' />,
    //   number: '22',
    //   link: '/order/canceled-order'
    // },
    {
      title: "طلبات مرفوضه",
      icon: <IoMdCloseCircleOutline className="scale-[1.3]	" />,
      number: cancelledNumber,
      link: "/order/canceled-order",
    },
  ];

  return (
    <div
      className="w-full mt-8 flex flex-wrap gap-3 max-[]"
      style={{ direction: "rtl" }}
    >
      {
        // Create an order card by looping a variable orderCard
        orderCard.map((data, index) => (
          <Link
            key={index}
            href={data.link}
            className="flex items-center justify-between gap-[60px] rounded-lg p-6 bg-[#DAE6F2] border border-[#2249711e] hover:scale-[1.03] transition-[all_.2s]"
          >
            <div>
              <p className="mb-2 text-[16px] font-semibold tracking-tight text-[#142433] max-[690px]:text-[16px]">
                {data.title}
              </p>
              <div className="flex items-center gap-4 text-[19px] ">
                <div className="bg-white text-[#21303f89] rounded-md w-[34px] h-[37px] flex items-center justify-center box-border">
                  {data.icon}
                </div>
                <span className="text-[#8797A8]">
                  <span className="font-semibold text-[23px] text-[#142433]">
                    {data.number}
                  </span>{" "}
                  طلب
                </span>
              </div>
            </div>
            <MdChevronLeft className="scale-[1.8] text-[#142433a0]" />
          </Link>
        ))
      }
    </div>
  );
}

export default Order;
