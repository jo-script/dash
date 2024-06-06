"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { dataDelivered } from "../../../order/delivered/dataDelivered.js";
import Link from "next/link.js";
import Image from "next/image";
import secureLocalStorage from "react-secure-storage";
import { jwtDecode } from "jwt-decode";

const OrderDetail = ({ params }) => {
  const { id } = params;
  const [order, setOrder] = useState({});

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
  useEffect(() => {
    GetOrderDetails();
  }, [id]);

  console.log("order", order);
  if (!order) {
    return <div>Order not found</div>;
  }

  return (
    <>
      {order && order.user && order.products && (
        <div className="flex flex-col max-[900px]:items-center">
          <div className="w-3/4 max-[900px]:w-full overflow-x-auto shadow-md sm:rounded-lg mt-10">
            <table className="w-full text-sm text-start rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-[#dae6f2] uppercase bg-[#224971] ">
                <tr>
                  <th scope="col" className=" text-start px-6 py-3 text-[16px]">
                    معلومات الطلب
                  </th>
                  <th scope="col" className="px-6 py-3">
                    {" "}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white text-black">
                  <th
                    scope="row"
                    className="w-2/4 text-start px-6 py-4 font-medium"
                  >
                    {" "}
                    رقم الطلب{" "}
                  </th>
                  <td className=" text-start px-6 py-4">{order.cartid}</td>
                </tr>
                <tr className="bg-gray-200 text-black">
                  <th
                    scope="row"
                    className=" text-start px-6 py-4 font-medium "
                  >
                    حالة الطلب
                  </th>
                  <td className="px-6 py-4">{order.cartstatear}</td>
                </tr>
                <tr className="bg-white text-black">
                  <th
                    scope="row"
                    className=" text-start px-6 py-4 font-medium "
                  >
                    عدد المنتجات
                  </th>
                  <td className="px-6 py-4">{order.productsnumber}</td>
                </tr>
                <tr className="bg-gray-200 text-black">
                  <th scope="row" className="text-start px-6 py-4 font-medium ">
                    عدد القطع
                  </th>
                  <td className="px-6 py-4">{order.sumpieces}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="w-3/4 max-[900px]:w-full overflow-x-auto shadow-md sm:rounded-lg mt-10">
            <table className="w-full text-sm text-start rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-[#dae6f2] uppercase bg-[#224971] ">
                <tr>
                  <th scope="col" className=" text-start px-6 py-3 text-[16px]">
                    معلومات العميل
                  </th>
                  <th scope="col" className="px-6 py-3">
                    {" "}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white text-black">
                  <th
                    scope="row"
                    className="w-2/4 text-start px-6 py-4 font-medium"
                  >
                    اسم العميل
                  </th>
                  <td className=" text-start px-6 py-4">
                    {order.user.firstname} {order.user.lastname}
                  </td>
                </tr>
                <tr className="bg-gray-200 text-black">
                  <th
                    scope="row"
                    className=" text-start px-6 py-4 font-medium "
                  >
                    الرقم التعريفي للعميل
                  </th>
                  <td className="px-6 py-4">{order.user.username}</td>
                </tr>
                <tr className="bg-white text-black">
                  <th
                    scope="row"
                    className=" text-start px-6 py-4 font-medium "
                  >
                    {" "}
                    البريد الالكتروني{" "}
                  </th>
                  <td className="px-6 py-4">{order.user.email}</td>
                </tr>
                <tr className="bg-gray-200 text-black">
                  <th scope="row" className="text-start px-6 py-4 font-medium ">
                    رقم الهاتف{" "}
                  </th>
                  <td className="px-6 py-4">{order.user.phone}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="w-3/4 max-[900px]:w-full overflow-x-auto shadow-md sm:rounded-lg mt-10">
            <table className="w-full text-sm text-start rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-[#dae6f2] uppercase bg-[#224971] ">
                <tr>
                  <th scope="col" className=" text-start px-6 py-3 text-[16px]">
                    معلومات التوصيل
                  </th>
                  <th scope="col" className="px-6 py-3">
                    {" "}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white text-black">
                  <th
                    scope="row"
                    className="w-2/4 text-start px-6 py-4 font-medium"
                  >
                    عنوان العميل{" "}
                  </th>
                  <td className=" text-start px-6 py-4">
                    {order?.user?.address[0]?.address1},{" "}
                    {order?.user?.address[0]?.address2},{" "}
                    {order?.user?.address[0]?.address3}
                  </td>
                </tr>
                <tr className="bg-gray-200 text-black">
                  <th
                    scope="row"
                    className=" text-start px-6 py-4 font-medium "
                  >
                    رقم التواصل
                  </th>
                  <td className="px-6 py-4">{order?.user?.phone}</td>
                </tr>
                <tr className="bg-white text-black">
                  <th
                    scope="row"
                    className=" text-start px-6 py-4 font-medium "
                  >
                    خطوط الطول{" "}
                  </th>
                  <td className="px-6 py-4">{order?.user?.address[0]?.lat}</td>
                </tr>
                <tr className="bg-gray-200 text-black">
                  <th scope="row" className="text-start px-6 py-4 font-medium ">
                    دوائر العرض{" "}
                  </th>
                  <td className="px-6 py-4">{order?.user?.address[0]?.long}</td>
                </tr>
                <tr className="bg-white text-black">
                  <th
                    scope="row"
                    className=" text-start px-6 py-4 font-medium "
                  >
                    خط طول المتجر
                  </th>
                  <td className="px-6 py-4">{order?.storeinfo?.longitude}</td>
                </tr>
                <tr className="bg-gray-200 text-black">
                  <th scope="row" className="text-start px-6 py-4 font-medium ">
                    دائرة عرض المتجر
                  </th>
                  <td className="px-6 py-4">{order?.storeinfo?.latitude}</td>
                </tr>
                <tr className="bg-white text-black">
                  <th scope="row" className="text-start px-6 py-4 font-medium ">
                    المسافة
                  </th>
                  <td className="px-6 py-4">{order?.deliverydestance}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="w-3/4 max-[900px]:w-full overflow-x-auto shadow-md sm:rounded-lg mt-10">
            <table className="w-full text-sm text-start rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-[#dae6f2] uppercase bg-[#224971] ">
                <tr>
                  <th scope="col" className=" text-start px-6 py-3 text-[16px]">
                    معلومات المنتجات
                  </th>
                  <th scope="col" className="px-6 py-3">
                    {" "}
                  </th>
                </tr>
              </thead>
              {order &&
                order.products &&
                order.products.length !== 0 &&
                order?.products?.map((product) => (
                  <tbody key={product.id}>
                    <tr className="bg-white text-black">
                      <th
                        scope="row"
                        className="w-2/4 text-start px-6 py-4 font-medium"
                      >
                        اسم المنتج
                      </th>
                      <td className=" text-start px-6 py-4">
                        {product.name_ar}
                      </td>
                    </tr>
                    <tr className="bg-gray-200 text-black">
                      <th
                        scope="row"
                        className=" text-start px-6 py-4 font-medium "
                      >
                        صورة المنتج
                      </th>
                      <td className="px-6 py-4">
                        <Image
                          src={product.image}
                          alt=""
                          width={150}
                          height={150}
                        />
                      </td>
                    </tr>
                    <tr className="bg-white text-black">
                      <th
                        scope="row"
                        className=" text-start px-6 py-4 font-medium "
                      >
                        رقم المنتج
                      </th>
                      <td className="px-6 py-4">{product.id}</td>
                    </tr>

                    <tr className="bg-white text-black">
                      <th
                        scope="row"
                        className=" text-start px-6 py-4 font-medium "
                      >
                        التصنيف
                      </th>
                      <td className="px-6 py-4">
                        {product?.category?.name_ar}
                      </td>
                    </tr>
                    <tr className="bg-gray-200 text-black">
                      <th
                        scope="row"
                        className="text-start px-6 py-4 font-medium "
                      >
                        الكمية المطلوبة
                      </th>
                      <td className="px-6 py-4">{product.quantity}</td>
                    </tr>
                    <tr className="bg-white text-black">
                      <th
                        scope="row"
                        className=" text-start px-6 py-4 font-medium "
                      >
                        السعر
                      </th>
                      <td className="px-6 py-4">{product.product_end_price}</td>
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

          <div className="w-3/4 max-[900px]:w-full overflow-x-auto shadow-md sm:rounded-lg mt-10">
            <table className="w-full text-sm text-start rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-[#dae6f2] uppercase bg-[#224971] ">
                <tr>
                  <th scope="col" className=" text-start px-6 py-3 text-[16px]">
                    معلومات الدفع
                  </th>
                  <th scope="col" className="px-6 py-3">
                    {" "}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white text-black">
                  <th
                    scope="row"
                    className="w-2/4 text-start px-6 py-4 font-medium"
                  >
                    طريقة الدفع
                  </th>
                  <td className=" text-start px-6 py-4">
                    {order?.paymentmethodar}
                  </td>
                </tr>
                <tr className="bg-gray-200 text-black">
                  <th
                    scope="row"
                    className=" text-start px-6 py-4 font-medium "
                  >
                    المبلغ المطلوب{" "}
                  </th>
                  <td className="px-6 py-4">{order?.endprice}</td>
                </tr>
                <tr className="bg-white text-black">
                  <th
                    scope="row"
                    className=" text-start px-6 py-4 font-medium "
                  >
                    العملة
                  </th>
                  <td className="px-6 py-4">{order?.currancy}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
};

export default OrderDetail;
