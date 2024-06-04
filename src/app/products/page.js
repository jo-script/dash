"use client";
import { useEffect } from "react";
import Products from "../../components/products";

import useProducts from "./fetchProducts";

function Page() {
  //use state for products here
  useEffect(() => {
    const products = useProducts();
    console.log(products);
  }, []);
  return (
    <div
      className="w-full mt-8 flex content-center justify-start flex-wrap gap-3"
      style={{ direction: "rtl" }}
    >
      <Products />
    </div>
  );
}

export default Page;
