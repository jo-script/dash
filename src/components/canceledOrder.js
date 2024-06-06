"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { dataOrders } from "../app/order/new-order/dataOrder.js"; // import data order

// import icons
import { MdDone } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { BiShow } from "react-icons/bi";
import secureLocalStorage from "react-secure-storage";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation.js";
// import jwtDecode from 'jwt-decode'; // Corrected import

function NewOrder() {
  const router = useRouter();
  const [orders, setOrders] = useState(null); // Initialize as null
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
        setOrders(data.cart.data.orders);
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
    }
  };
  useEffect(() => {
    cancelledOrders();
    document.title = "الطلبات المرفوضة";
  }, []);

  if (!orders) {
    return <div>Loading...</div>; // Display a loading state until data is fetched
  }

  // Use optional chaining to prevent errors if data is not present
  // const orders = newDeliveredOrders?.cart?.data?.orders || [];
  // console.log(orders);
  async function approveorder(cartid) {
    if (secureLocalStorage.getItem("_tocken") !== null) {
      const jwtsecure = secureLocalStorage.getItem("_tocken");
      // console.log(jwtsecure)
      const accessToken = jwtDecode(jwtsecure);
      const jsonString = JSON.stringify({});
      let result = await fetch(
        "/api/auth/supplier/orders.php?approve=" + cartid,
        {
          method: "POST",
          body: jsonString,
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${accessToken}`,
            // 'X-Custom-Header': `Bearer ${jwtsecure}`
          },
        }
      ).catch((e) => console.log(e));
      result = await result.json();
      console.log(result);
      // const messages = result.login.message
      const state = result.cart.status;
      if (state == "success") {
        console.log("approved", result);
      } else {
      }
    } else {
    }
  }
  return (
    <div className="w-full flex flex-col items-center gap-3 mt-10">
      {orders.map((order) => (
        <div
          key={order.cartid}
          className="w-[98%] h-[120px] max-[750px]:h-auto rounded-md bg-[#dae6f2] border shadow-sm flex items-center justify-around max-[750px]:justify-start gap-4 max-[750px]:overflow-x-scroll max-[750px]:px-5  hover:scale-[1.01] transition-[all_.02s]"
        >
          <div className="max-[750px]:min-w-[100px] flex flex-col items-start justify-start gap-2 text-[#364e64]">
            <Link
              href={`/order/canceled-order/${order.cartid}`}
              className="flex items-center gap-2 px-2 pb-[2px] rounded-full hover:bg-blue-400 hover:text-white transition-[all_.1s]"
            >
              <span>عرض</span>
              <BiShow />
            </Link>
            <button
              onClick={async () => {
                await approveorder(order.cartid);
                router.push(`/order/prepare-order/${order.cartid}`);
              }}
              className="flex items-center gap-2 px-2 pb-[2px] rounded-full hover:bg-blue-400 hover:text-white transition-[all_.1s]"
            >
              <span>الموافقة علي الطلب</span>
              <BiShow />
            </button>
          </div>
          <div className=" max-[750px]:min-w-[100px] flex flex-col items-center justify-center text-[#224971]">
            <p className="text-[18px]">رقم الطلب</p>
            <p className="text-[#364e64] font-bold text-[17px]">
              {order.cartid}
            </p>
            <p className="text-[15px]">{order.cartstatear}</p>
          </div>
          <div className="max-[750px]:min-w-[100px]  flex flex-col items-center justify-center text-[#224971]">
            <p className="text-[18px]">عدد المنتجات</p>
            <p className="text-[#364e64] font-bold text-[17px]">
              {order.products.length}
            </p>
            <p className="text-[15px]">منتج</p>
          </div>
          <div className="max-[750px]:min-w-[100px] flex flex-col items-center justify-center text-[#224971]">
            <p className="text-[18px]">عدد القطع</p>
            <p className="text-[#364e64] font-bold text-[17px]">
              {order.productsnumber}
            </p>
            <p className="text-[15px]">قطعة</p>
          </div>
          <div className="max-[750px]:min-w-[100px] flex flex-col items-center justify-center">
            <p className="text-[18px]">اسم العميل</p>

            <p className="text-[#364e64] text-[17px]">{order.user.firstname}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default NewOrder;
