"use client";
import { Component, useEffect, useState } from "react";
import dynamic from "next/dynamic";

import Link from "next/link";
import Products from "../components/products.js";

// import icons
import { MdOutlineNewspaper } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { TbTruckLoading } from "react-icons/tb";
import { MdChevronLeft } from "react-icons/md";
import secureLocalStorage from "react-secure-storage";
import useAuth from "@/HOC/isAuthenticated.js";
import { useRouter } from "next/navigation.js";
import { jwtDecode } from "jwt-decode";

export default function Home() {
  const router = useRouter();
  const isAuthenticated = useAuth();
  const [analytics, setAnalytics] = useState({
    customer_count: 0,
    total_revenue: 0,
    top_sold_products: [],
  });
  async function getAnalytics() {
    if (secureLocalStorage.getItem("_tocken") !== null) {
      const jwtsecure = secureLocalStorage.getItem("_tocken");
      console.log(jwtsecure);
      const accessToken = jwtDecode(jwtsecure);
      console.log(accessToken);
      const jsonString = JSON.stringify({});
      let result = await fetch("/api/auth/supplier/orders.php?analytics", {
        method: "POST",
        body: jsonString,
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${accessToken}`,
          // 'X-Custom-Header': `Bearer ${jwtsecure}`
        },
      }).catch((e) => console.log(e));
      result = await result.json();
      console.log(result);
      // const messages = result.login.message
      const state = result.status;
      if (state == "success") {
        console.log(result);
        setAnalytics({
          customer_count: result.data.customer_count,
          total_revenue: result.data.total_revenue,
          top_sold_products: result.data.top_sold_products,
        });
      } else {
      }
    } else {
    }
  }
  useEffect(() => {
    document.title = " الرئيسية";
    // if (!isAuthenticated) router.push("/login");
    console.log(isAuthenticated);
    if (isAuthenticated === false) router.push("/login");
    getAnalytics();
  }, []);

  useAuth();
  const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

  const [chartData, setChartData] = useState({
    options1: {
      colors: ["#faa000", "#00E396", "#775DD0", "#FEB019", "#008FFB"], // Custom colors for the first chart
      labels: ["A", "B", "C", "D", "E"],
      chart: {
        fontFamily: "Helvetica, Arial, sans-serif", // Setting the font style for the chart
        foreColor: "#333333", // Setting the font color for the chart
        fontSize: "30px", // Setting the font size for the chart
      },
    },
    series1: [44, 55, 41, 17, 44],
  });

  // data order card
  let orderCard = [
    {
      title: "كل الطلبات",
      icon: <MdOutlineNewspaper className="scale-[1.3]" />,
      number: "8",
      link: "/order/new-order",
    },
    {
      title: "  الطلبات الجديدة",
      icon: <TbTruckDelivery className="scale-[1.3]" />,
      number: "8",
      link: "/order/prepare-order",
    },
    {
      title: "طلبات تم توصيلها",
      icon: <TbTruckDelivery className="scale-[1.3]" />,
      number: "8",
      link: "/order/delivered",
    },
    {
      title: "طلبات مرفوضه",
      icon: <IoMdCloseCircleOutline className="scale-[1.3]	" />,
      number: "8",
      link: "",
    },
  ];

  return (
    <div
      className="w-full flex flex-col items-start  gap-10 mt-8 pr-8 max-[500px]:px-0  max-[500px]:justify-center "
      style={{ direction: "rtl" }}
    >
      <div className="flex items-start flex-wrap gap-2 max-[500px]:justify-center">
        {/* Sales statistics  */}
        <div className="max-[500px]:w-[350px]">
          <h1 className="text-[#142433] text-[24px] font-semibold">
            احصائيات المبيعات
          </h1>
          <div className="w-[318px] max-[500px]:w-full max-[500px]:h-auto h-[360px] px-[26px] py-[27px] bg-[#DAE6F2] flex items-center justify-start flex-col gap-[24px] rounded-md">
            <div className="max-[500px]:w-full">
              <h3 className="text-[#142433] font-bold text-[16px] ">
                إجمالي إيرادات المبيعات
              </h3>
              <div className="w-[267px] max-[500px]:w-full max-[500px]:pr-3 h-[113px] bg-white mt-[8px] rounded-md flex flex-col items-center justify-center">
                <div className=" max-[500px]:w-full flex items-center justify-center gap-1">
                  <h1 className="text-[#224971] text-[40px] font-bold">
                    {analytics.total_revenue}
                  </h1>
                </div>
              </div>
            </div>
            <div className="max-[500px]:w-full">
              <h3 className="text-[#142433] font-bold text-[16px]">
                {" "}
                عدد العملاء
              </h3>
              <div className="w-[267px] max-[500px]:w-full max-[500px]:pr-3 h-[113px] bg-white mt-[8px] rounded-md flex flex-col items-center justify-center">
                <div className=" max-[500px]:w-full flex items-center justify-center gap-1">
                  <h1 className="text-[#224971] text-[40px] font-bold">
                    {analytics.customer_count}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ------------- */}
        <div className="max-[500px]:w-[350px]">
          <h1 className="text-[#142433] text-[24px] font-semibold">المنتجات</h1>

          <div className="w-[421px] max-[500px]:w-full p-6 bg-[#DAE6F2] rounded-md flex flex-col items-start justify-center">
            <div className="w-full flex items-center justify-between">
              <h3 className="text-[#142433] font-bold text-[16px] ">
                الأكثر مبيعا
              </h3>
            </div>
            <div className="mt-[26px] w-full">
              <div className="w-full flex  items-center justify-around">
                <h3 className="w-[133px] text-[#142433] font-bold text-[16px] text-start">
                  إسم المنتج
                </h3>
                <h3 className="w-[160px] text-[#142433] font-bold text-[16px] text-start ">
                  إجمالي المبيعات
                </h3>
              </div>

              {analytics.top_sold_products.length !== 0 &&
                analytics.top_sold_products.map((product) => (
                  <div className="mt-[30px] w-full" key={product.id}>
                    <div className="w-full flex items-start justify-start">
                      <div className="w-[133px]">
                        <h4 className="text-[#506173] text-[16px] font-semibold">
                          {" "}
                          {product.name_ar}
                        </h4>
                        <p className="text-[#506173] text-[16px]">
                          {product.supcategory.name_ar}
                        </p>
                      </div>
                      <h4 className=" w-[160px] [font-semibold pr-10 text-[#224971]">
                        {" "}
                        {product.price}
                      </h4>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className="w-full max-[500px]:justify-center max-[580px]:px-[5%]"
        style={{ direction: "rtl" }}
      >
        <h1 className="text-[#142433] text-[24px] font-semibold">الطلبات</h1>

        <div className="w-full mt-3 flex flex-wrap gap-3 max-[500px]:justify-center">
          {/* // Create an order card by looping a variable orderCard */}
          {orderCard.map((data, index) => (
            <Link
              key={index}
              href={data.link}
              className="w-[260px] h-[126px] flex items-center justify-between gap-[60px] rounded-lg p-6 bg-[#DAE6F2] border border-[#2249711e] hover:scale-[1.03] transition-[all_.2s] max-[580px]:w-full"
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
          ))}
        </div>
      </div>
    </div>
  );
}
