"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, setState } from "react";
import Input from "@/components/input";
// import $ from 'jquery';
import { useRouter } from "next/navigation";
import secureLocalStorage from "react-secure-storage";
import jwtencode from "jwt-encode";
import { jwtDecode } from "jwt-decode";

function AddProduct() {
  const router = useRouter();

  const [productnamear, setProductnamear] = useState("");
  const [productnameen, setProductnameen] = useState("");
  const [productdescriptionar, setProductdescriptionar] = useState(1);
  const [productdescriptionen, setProductdescriptionen] = useState(1);
  const [productprice, setProductprice] = useState("");
  const [categories, setCategories] = useState(Array);
  const [subcategories, setsubCategories] = useState(Array);
  const [stocktype, setstocktype] = useState(Array);
  const [categoryinproduct, setcategoryinproduct] = useState(1);
  const [subcategoryinproduct, setsubcategoryinproduct] = useState(1);
  const [stocktypeinproduct, setstocktypeinproduct] = useState(0);
  const [productimage, setImage] = useState("");
  const [Spinner, setSpinner] = useState("loading");

  const changeproductnamear = (newValue) => {
    setProductnamear(newValue);
  };
  const changeproductnameen = (newValue) => {
    setProductnameen(newValue);
  };
  const changeproductdescriptionar = (newValue) => {
    setProductdescriptionar(newValue);
  };
  const changeproductdescriptionen = (newValue) => {
    setProductdescriptionen(newValue);
  };
  const changeproductprice = (newValue) => {
    setProductprice(newValue);
  };

  useEffect(() => {
    // Set the document title when the component mounts
    document.title = "اضافة منتج جديد";
    getcategory();
    getsubcategory();
    getstocktype();
    setSpinner("get");
  }, []);

  async function getcategory() {
    let result = await fetch("/api/get/categories.php", {
      method: "GET",
      headers: {
        "content-type": "application/json-patch+json",
        "Access-Control-Allow-Origin": "*",
        // Origin: '*',
        // Accept: 'application/json',
      },
    }).catch((e) => console.log(e));
    result = await result.json();
    // console.log(result)
    setCategories(result.data);
  }
  async function getsubcategory() {
    let result = await fetch("/api/get/supcategories.php", {
      method: "GET",
      headers: {
        "content-type": "application/json-patch+json",
        "Access-Control-Allow-Origin": "*",
        // Origin: '*',
        // Accept: 'application/json',
      },
    }).catch((e) => console.log(e));
    result = await result.json();
    // console.log(result)
    setsubCategories(result.data);
  }

  async function getstocktype() {
    let result = await fetch("/api/get/stocktype.php", {
      method: "GET",
      headers: {
        "content-type": "application/json-patch+json",
        "Access-Control-Allow-Origin": "*",
        // Origin: '*',
        // Accept: 'application/json',
      },
    }).catch((e) => console.log(e));
    result = await result.json();
    // console.log(result)
    setstocktype(result.data);
  }

  async function getsubcategory() {
    let result = await fetch("/api/get/supcategories.php", {
      method: "GET",
      headers: {
        "content-type": "application/json-patch+json",
        "Access-Control-Allow-Origin": "*",
        // Origin: '*',
        // Accept: 'application/json',
      },
    }).catch((e) => console.log(e));
    result = await result.json();
    // console.log(result)
    setsubCategories(result.data);
  }

  async function addproduct() {
    if (secureLocalStorage.getItem("_tocken") !== null) {
      const jwtsecure = secureLocalStorage.getItem("_tocken");
      // console.log(jwtsecure)
      const accessToken = jwtDecode(jwtsecure);
      const jsonString = JSON.stringify({});
      const formData = new FormData();

      // Add text data
      formData.append("namear", productnamear);
      formData.append("nameen", productnameen);
      formData.append("discriptionar", productdescriptionar);
      formData.append("discriptionen", productdescriptionen);
      formData.append("subcategoryid", subcategoryinproduct);
      formData.append("stocktype", stocktypeinproduct);
      formData.append("categoryid", categoryinproduct);
      formData.append("price", productprice);
      setSpinner(false);
      // Add image data
      // const imageInput = document.getElementById('fileInput'); // Adjust the ID based on your HTML input element
      // const imageFile = imageInput.files[0];
      formData.append("image", productimage);
      let result;
      try {
        result = await fetch("/api/auth/supplier/product.php?add", {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${accessToken}`,
            // 'X-Custom-Header': `Bearer ${jwtsecure}`
          },
        });
        if (result.ok) {
          setSpinner("loading");
        } else {
          throw new Error(`HTTP error! Status: ${result.status}`);
        }
      } catch (error) {
        console.error("Fetch error:", error);
        // Handle the error, e.g., display an error message or reset spinner
        setSpinner("error");
      }
      if (result) {
        result = await result.json();
        // Process the JSON response
      }
      // console.log(result)
      router.push("/products");
    } else {
      router.push("/login");
    }
  }
  async function showimage(event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = function (e) {
        const imagePreview = document.getElementById("imageinpno");
        const img = document.createElement("img");
        img.src = e.target.result;
        img.width = 200; // Set width for preview image
        imagePreview.innerHTML = ""; // Clear previous preview
        imagePreview.appendChild(img);
        document.getElementById("imageUp").remove();
      };

      reader.readAsDataURL(file);
    } else {
      imagePreview.innerHTML = "No image selected";
    }
  }
  return (
    <div
      className="addproduct w-full mx-auto p-4 flex items-center justify-center flex-col gap-5 mt-10 max-[800px]:p-1"
      style={{ direction: "rtl" }}
    >
      <div className=" flex justify-center w-full">
        <div className="addproductimage">
          <div id="imageinpno" className="productimage">
            <img id="#imageinpnocover" src="/imageup.png" width="100px" />
          </div>
          <input
            id="inputImage"
            type="file"
            name="image"
            className="opacity-0"
            onChange={(e) => {
              showimage(e), setImage(e.target.files[0]);
            }}
          />
        </div>
      </div>
      {/* form add product*/}
      <form
        className="addproductform mt-4 w-[90%] max-[800px]:w-[95%] max-[500px]:w-full"
        onSubmit={(e) => {
          e.preventDefault(), addproduct();
        }}
        method="post"
      >
        <div className="mb-4 w-full">
          <label
            className="block text-[#224971] text-sm font-bold mb-2"
            htmlFor="nameArabic"
          >
            اسم المنتج
          </label>
          <input
            type="text"
            placeholder="اسم المنتج بالعربية"
            name="productnamear"
            onChange={changeproductnamear}
            className=" w-full appearance-none border border-[#22497173] text-gray-600 rounded-md  py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4 w-full">
          <label
            className="block text-[#224971] text-sm font-bold mb-2"
            htmlFor="nameEnglish"
          >
            إسم ألمنتج بالانجليزيه{" "}
          </label>
          <input
            type="text"
            placeholder=" اسم المنتج باالانجليزية"
            name="productnameen"
            onChange={changeproductnameen}
            className=" w-full appearance-none border border-[#22497173] text-gray-600 rounded-md  py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4 w-full">
          <label
            className="block text-[#224971] text-sm font-bold mb-2"
            htmlFor="price"
          >
            {" "}
            سعر المنتج{" "}
          </label>
          <input
            type="number"
            placeholder="سعر المنتج"
            name="productprice"
            onChange={changeproductprice}
            className=" w-full appearance-none border border-[#22497173] text-gray-600 rounded-md  py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4 w-full">
          <label
            className="block text-[#224971] text-sm font-bold mb-2"
            htmlFor="detailsArabic"
          >
            {" "}
            تفاصيل المنتج بالعربية
          </label>

          <textarea
            id="discriptionar"
            name="discriptionar"
            rows="5"
            cols="33"
            placeholder="معلومات عن المنتج بالعربية"
            onChange={(e) => {
              setProductdescriptionar(e.target.value);
            }}
            className=" w-full appearance-none border border-[#22497173] text-gray-600 rounded-md  py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          ></textarea>
        </div>
        <div className="mb-4 w-full">
          <label
            className="block text-[#224971] text-sm font-bold mb-2"
            htmlFor="detailsEnglish"
          >
            {" "}
            تفاصيل المنتج بالانجليزية{" "}
          </label>
          <textarea
            id="discriptionen"
            name="discriptionen"
            rows="5"
            cols="33"
            placeholder="معلومات عن المنتج بالانجليزية"
            onChange={(e) => {
              setProductdescriptionen(e.target.value);
            }}
            className=" w-full appearance-none border border-[#22497173] text-gray-600 rounded-md  py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          ></textarea>
        </div>
        <div className="mb-4 w-full">
          <label
            className="block text-[#224971] text-sm font-bold mb-2"
            htmlFor="mainCategory"
          >
            التصنيف الرئيسي{" "}
          </label>
          <select
            className=" w-full appearance-none border border-[#22497173] text-gray-600 rounded-md  py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            id="category"
            onChange={(e) => {
              setcategoryinproduct(e.target.value);
            }}
          >
            {categories.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name_ar}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4 w-full">
          <label
            className="block text-[#224971] text-sm font-bold mb-2"
            htmlFor="mainCategory"
          >
            التصنيف الفرعي{" "}
          </label>
          <select
            className=" w-full appearance-none border border-[#22497173] text-gray-600 rounded-md  py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            id="supcategory"
            onChange={(e) => {
              setsubcategoryinproduct(e.target.value);
            }}
          >
            {subcategories.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name_ar}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4 w-full">
          <label
            className="block text-[#224971] text-sm font-bold mb-2"
            htmlFor="kilograms"
          >
            {" "}
            نوع كمية المنتج{" "}
          </label>

          <select
            className=" w-full appearance-none border border-[#22497173] text-gray-600 rounded-md  py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            id="supcategory"
            onChange={(e) => {
              setstocktypeinproduct(e.target.value);
            }}
          >
            {stocktype.map((item) => (
              <option key={item.id} value={item.id}>
                {item.stocktype_name_ar}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-center gap-5">
          <button
            type="submit"
            className=" text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-[all_.1s]"
          >
            <span className="btn long">
              <img src="/plus.svg" alt="" width={50} height={50} />
              <p>اضافة</p>
            </span>
          </button>
          <Link
            href="/products"
            type="submit"
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-[all_.1s]"
          >
            إلغاء
          </Link>
        </div>
      </form>
    </div>
  );
}

export default AddProduct;
