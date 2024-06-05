"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import { products } from "../productData.js";
import secureLocalStorage from "react-secure-storage";
import { jwtDecode } from "jwt-decode";
import { useState } from "react";

const ProductDetail = ({ params }) => {
  const [product, setProduct] = useState();
  const { id } = params;
  const getProducts = async () => {
    if (secureLocalStorage.getItem("_tocken") !== null) {
      const jwtsecure = secureLocalStorage.getItem("_tocken");
      console.log(jwtsecure);
      const accessToken = jwtDecode(jwtsecure);
      console.log(accessToken);
      const jsonString = JSON.stringify({});
      let result = await fetch(`/api/auth/supplier/product.php?view=${id}`, {
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
        setProduct(result.data[0]);
      } else {
        console.log("error fetching products");
      }
    } else {
      console.log("error fetching products");
    }
  };
  // const product = products.find((product) => product.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div
      className="w-full flex items-center flex-col mx-auto p-4 gap-y-8"
      style={{ direction: "rtl" }}
    >
      <div className="w-[60%] h-[350px] rounded-lg border flex item-center justify-center mt-3 max-[480px]:w-full max-[480px]:h-auto">
        <Image src={product.img} alt={product.name} />
      </div>

      <div className="w-full flex items-start justify-evenly gap-8 flex-wrap ">
        {/* details */}
        <div className="flex flex-col items-start gap-3  ">
          <div className="flex items-center justify-center gap-3 ">
            <h1 className="font-bold text-[16px] text-[#224971]">
              إسم ألمنتج:
            </h1>
            <p className=" text-[19px] text-[#3a5069]">{product.nameArabic}</p>
          </div>
          <div className="flex items-center justify-center gap-3">
            <h1 className="font-bold text-[16px] text-[#224971]">
              إسم ألمنتج بالانجليزيه:
            </h1>
            <p className=" text-[19px] text-[#3a5069]">{product.nameEnglish}</p>
          </div>
          <div className="flex items-center justify-center gap-3">
            <h1 className="font-bold text-[16px] text-[#224971]">الكمية:</h1>
            <p className=" text-[19px] text-[#3a5069]">{product.amount}</p>
          </div>
          <div className="flex items-center justify-center gap-3">
            <h1 className="font-bold text-[16px] text-[#224971]">
              سعر المنتج :
            </h1>
            <p className=" text-[19px] text-[#3a5069]">{product.price}$</p>
          </div>
          <div className="flex items-center justify-center gap-3">
            <h1 className="font-bold text-[16px] text-[#224971]">
              {" "}
              تفاصيل المنتج بالعربية:
            </h1>
            <p className=" text-[19px] text-[#3a5069]">
              {product.detailsArabic}
            </p>
          </div>
          <div className="flex items-center justify-center gap-3">
            <h1 className="font-bold text-[16px] text-[#224971]">
              تفاصيل المنتج بالانجليزية :
            </h1>
            <p className=" text-[19px] text-[#3a5069]">
              {product.detailsEnglish}
            </p>
          </div>
          <div className="flex items-center justify-center gap-3">
            <h1 className="font-bold text-[16px] text-[#224971]">
              {" "}
              التصنيف الرئيسي:
            </h1>
            <p className=" text-[19px] text-[#3a5069]">
              {product.mainCategory}
            </p>
          </div>
          <div className="flex items-center justify-center gap-3">
            <p className=" font-bold  text-[16px] text-[#224971]"> ألوزن:</p>
            <p className="  text-[19px] text-[#3a5069]">{product.kilograms}</p>
          </div>
        </div>

        {/* edit */}
        <div className="flex items-center flex-col gap-4 max-[480px]:flex-row  ">
          <Link
            href={`/edit-products/${product.id}`}
            type="submit"
            className=" w-[120px] bg-blue-500 hover:bg-blue-700 text-center text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-[all_.1s]"
          >
            تعديل
          </Link>
          <Link
            href="#"
            type="submit"
            className=" w-[120px] bg-red-500 hover:bg-red-700 text-center text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-[all_.1s]"
          >
            حذف
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
