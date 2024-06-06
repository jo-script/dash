"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { dataOrders } from "../../../order/new-order/dataOrder.js";
import Link from "next/link.js";
import Image from "next/image";
import secureLocalStorage from "react-secure-storage";
import { jwtDecode } from "jwt-decode";

const OrderDetail = ({ params }) => {
  const { id } = params;
  const [order, setOrder] = useState(null);
  const router = useRouter();
  const GetOrderDetails = async () => {
    const token = secureLocalStorage.getItem("_tocken");
    if (token) {
      const accessToken = jwtDecode(token);
      try {
        const response = await fetch(
          `/api/auth/supplier/orders.php?cart=${id}`,
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
        setOrder(data.orders.data);
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
    }
  };

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
  useEffect(() => {
    GetOrderDetails();
  }, []);
  if (!order) {
    return <div>Order not found</div>;
  }

  return (
    <div className=" flex flex-col max-[900px]:items-center ">
      <div class="w-3/4 max-[900px]:w-full overflow-x-auto shadow-md sm:rounded-lg mt-10 ">
        <table class="w-full text-sm text-start rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-[#dae6f2] uppercase bg-[#224971] ">
            <tr>
              <th scope="col" class=" text-start px-6 py-3 text-[16px]">
                معلومات الطلب
              </th>
              <th scope="col" class="px-6 py-3">
                {" "}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white text-black">
              <th scope="row" class="w-2/4 text-start px-6 py-4 font-medium">
                {" "}
                رقم الطلب{" "}
              </th>
              <td class=" text-start px-6 py-4">{order.cartid}</td>
            </tr>
            <tr class="bg-gray-200 text-black">
              <th scope="row" class=" text-start px-6 py-4 font-medium ">
                حالة الطلب
              </th>
              <td class="px-6 py-4">{order.cartstatear}</td>
            </tr>
            <tr class="bg-white text-black">
              <th scope="row" class=" text-start px-6 py-4 font-medium ">
                عدد المنتجات
              </th>
              <td class="px-6 py-4">{order.productsnumber}</td>
            </tr>
            <tr class="bg-gray-200 text-black">
              <th scope="row" class="text-start px-6 py-4 font-medium ">
                عدد القطع
              </th>
              <td class="px-6 py-4">{order.sumpieces}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="w-3/4 max-[900px]:w-full overflow-x-auto shadow-md sm:rounded-lg mt-10">
        <table class="w-full text-sm text-start rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-[#dae6f2] uppercase bg-[#224971] ">
            <tr>
              <th scope="col" class=" text-start px-6 py-3 text-[16px]">
                معلومات العميل
              </th>
              <th scope="col" class="px-6 py-3">
                {" "}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white text-black">
              <th scope="row" class="w-2/4 text-start px-6 py-4 font-medium">
                اسم العميل
              </th>
              <td class=" text-start px-6 py-4">
                {order.user.firstname} {order.user.lastname}
              </td>
            </tr>
            <tr class="bg-gray-200 text-black">
              <th scope="row" class=" text-start px-6 py-4 font-medium ">
                الرقم التعريفي للعميل
              </th>
              <td class="px-6 py-4">{order?.user?.email}</td>
            </tr>
            <tr class="bg-white text-black">
              <th scope="row" class=" text-start px-6 py-4 font-medium ">
                {" "}
                البريد الالكتروني{" "}
              </th>
              <td class="px-6 py-4">{order.user.email}</td>
            </tr>
            <tr class="bg-gray-200 text-black">
              <th scope="row" class="text-start px-6 py-4 font-medium ">
                رقم الهاتف{" "}
              </th>
              <td class="px-6 py-4">{order.user.phone}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="w-3/4 max-[900px]:w-full overflow-x-auto shadow-md sm:rounded-lg mt-10">
        <table class="w-full text-sm text-start rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-[#dae6f2] uppercase bg-[#224971] ">
            <tr>
              <th scope="col" class=" text-start px-6 py-3 text-[16px]">
                معلومات التوصيل
              </th>
              <th scope="col" class="px-6 py-3">
                {" "}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white text-black">
              <th scope="row" class="w-2/4 text-start px-6 py-4 font-medium">
                عنوان العميل{" "}
              </th>
              <td class=" text-start px-6 py-4">
                {order?.user?.address[0]?.address1},{" "}
                {order?.user?.address[0]?.address2},{" "}
                {order?.user?.address[0]?.address3}
              </td>
            </tr>
            <tr class="bg-gray-200 text-black">
              <th scope="row" class=" text-start px-6 py-4 font-medium ">
                رقم التواصل
              </th>
              <td class="px-6 py-4">{order?.user?.phone}</td>
            </tr>
            <tr class="bg-white text-black">
              <th scope="row" class=" text-start px-6 py-4 font-medium ">
                خطوط الطول{" "}
              </th>
              <td class="px-6 py-4">{order?.user?.address[0]?.lat}</td>
            </tr>
            <tr class="bg-gray-200 text-black">
              <th scope="row" class="text-start px-6 py-4 font-medium ">
                دوائر العرض{" "}
              </th>
              <td class="px-6 py-4">{order?.user?.address[0]?.long}</td>
            </tr>
            <tr class="bg-white text-black">
              <th scope="row" class=" text-start px-6 py-4 font-medium ">
                خط طول المتجر
              </th>
              <td class="px-6 py-4">{order?.storeinfo?.longitude}</td>
            </tr>
            <tr class="bg-gray-200 text-black">
              <th scope="row" class="text-start px-6 py-4 font-medium ">
                دائرة عرض المتجر
              </th>
              <td class="px-6 py-4">{order?.storeinfo?.latitude}</td>
            </tr>
            <tr class="bg-white text-black">
              <th scope="row" class="text-start px-6 py-4 font-medium ">
                المسافة
              </th>
              <td class="px-6 py-4">{order?.deliverydestance}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="w-3/4 max-[900px]:w-full overflow-x-auto shadow-md sm:rounded-lg mt-10">
        <table class="w-full text-sm text-start rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-[#dae6f2] uppercase bg-[#224971] ">
            <tr>
              <th scope="col" class=" text-start px-6 py-3 text-[16px]">
                معلومات المنتجات
              </th>
              <th scope="col" class="px-6 py-3">
                {" "}
              </th>
            </tr>
          </thead>
          {order &&
            order.products &&
            order.products.length !== 0 &&
            order?.products?.map((product) => (
              <tbody key={product.id}>
                <tr class="bg-white text-black">
                  <th
                    scope="row"
                    class="w-2/4 text-start px-6 py-4 font-medium"
                  >
                    اسم المنتج
                  </th>
                  <td class=" text-start px-6 py-4">{product.name_ar}</td>
                </tr>
                <tr class="bg-gray-200 text-black">
                  <th scope="row" class=" text-start px-6 py-4 font-medium ">
                    صورة المنتج
                  </th>
                  <td class="px-6 py-4">
                    {" "}
                    <Image
                      src={product.image}
                      alt=""
                      width={150}
                      height={150}
                    />
                  </td>
                </tr>
                <tr class="bg-white text-black">
                  <th scope="row" class=" text-start px-6 py-4 font-medium ">
                    رقم المنتج
                  </th>
                  <td class="px-6 py-4">{product.id}</td>
                </tr>

                <tr class="bg-white text-black">
                  <th scope="row" class=" text-start px-6 py-4 font-medium ">
                    التصنيف
                  </th>
                  <td class="px-6 py-4">{product?.category?.name_ar}</td>
                </tr>
                <tr class="bg-gray-200 text-black">
                  <th scope="row" class="text-start px-6 py-4 font-medium ">
                    الكمية المطلوبة
                  </th>
                  <td class="px-6 py-4">{product.quantity}</td>
                </tr>
                <tr className="bg-[#224971] text-black">
                  <th
                    scope="row"
                    className=" text-start px-2 py-1 font-medium "
                  ></th>
                  <td className="px-2 py-1">{"."}</td>
                </tr>
              </tbody>
            ))}
        </table>
      </div>

      <div class="w-3/4 max-[900px]:w-full overflow-x-auto shadow-md sm:rounded-lg mt-10">
        <table class="w-full text-sm text-start rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-[#dae6f2] uppercase bg-[#224971] ">
            <tr>
              <th scope="col" class=" text-start px-6 py-3 text-[16px]">
                معلومات الدفع
              </th>
              <th scope="col" class="px-6 py-3">
                {" "}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white text-black">
              <th scope="row" class="w-2/4 text-start px-6 py-4 font-medium">
                طريقة الدفع
              </th>
              <td class=" text-start px-6 py-4">{order?.paymentmethodar}</td>
            </tr>
            <tr class="bg-gray-200 text-black">
              <th scope="row" class=" text-start px-6 py-4 font-medium ">
                المبلغ المطلوب{" "}
              </th>
              <td class="px-6 py-4">{order?.endprice}</td>
            </tr>
            <tr class="bg-white text-black">
              <th scope="row" class=" text-start px-6 py-4 font-medium ">
                العملة
              </th>
              <td class="px-6 py-4">{order?.currancy}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="my-10 flex items-center gap-6">
        <button
          className="w-40 bg-[#224971] text-white px-2 py-[6px] rounded transition-[all_.1s]"
          onClick={async () => {
            await approveorder(id);
            router.push("/order");
          }}
        >
          قبول الطلب
        </button>
      </div>
    </div>
  );
};

export default OrderDetail;
