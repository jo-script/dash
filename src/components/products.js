"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

// import data product
import { products } from "../app/products/productData.js";
import { useRouter } from "next/navigation.js";
import useAuth from "@/HOC/isAuthenticated.js";

function Products({ products }) {
  const router = useRouter();
  const isAuthenticated = useAuth();
  useEffect(() => {
    if (isAuthenticated === false) router.push("/login");
  }, []);
  useEffect(() => {
    document.title = "المنتجات";
  }, []);
  if (!products) return <div>Loading....</div>;

  return (
    <div
      className="w-full mt-8 flex content-center justify-start flex-wrap gap-5 max-[480px]:gap-3 max-[480px]:justify-center"
      style={{ direction: "rtl" }}
    >
      {products.map((product) => (
        <Link
          href={`/products/${product.id}`}
          key={product.id}
          className="w-[133px] h-[180px] overflow-hidden flex flex-col items-center justify-start bg-white rounded-xl shadow-[0_0_10px_0_#0000001f] border hover:scale-[1.05] transition-[all_.2s] "
        >
          <div>
            <Image
              src={product.image}
              alt={product.name_ar}
              width={100}
              height={100}
              className="w-full h-[100px] hover:scale-[1.03] transition-[all_.2s]"
            />
            <div className="w-full items-start flex flex-col font-semibold text-[#142433] px-2">
              <p className="mt-3 text-[16px]">{product.name_ar}</p>
              <div className="flex items-center justify-between w-full ] ">
                <p className="text-[#8797A8] text-[14px]">
                  {product.category.name_ar}
                </p>
                <p className="text-[#2DA905] text-[14px]">
                  {product.stocktype.stocktype_name_ar}{" "}
                </p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Products;
