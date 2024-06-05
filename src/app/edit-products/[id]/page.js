"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { products } from "../../products/productData.js";
import Link from "next/link";
import { useEffect, useState } from "react";
import secureLocalStorage from "react-secure-storage";
import { jwtDecode } from "jwt-decode";

const EditProduct = ({ params }) => {
  const [product, setProduct] = useState();
  const { id } = params;
  const router = useRouter();

  const [productnamear, setProductnamear] = useState("");
  const [productnameen, setProductnameen] = useState("");
  const [productdescriptionar, setProductdescriptionar] = useState(1);
  const [productdescriptionen, setProductdescriptionen] = useState(1);
  const [productprice, setProductprice] = useState(0);
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
    document.title = "تعديل منتج جديد";
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

  // const product = products.find((product) => product.id === parseInt(id)); // git product id
  async function editproduct() {
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

      console.log(formData);
      let result;
      try {
        result = await fetch(`/api/auth/supplier/product.php?edit=${id}`, {
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
        console.log(result);
        // Process the JSON response
      }
      // console.log(result)
      router.push("/products");
    } else {
      router.push("/login");
    }
  }

  const getProduct = async () => {
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
        setProductnamear(result.data.name_ar);
        setProductnameen(result.data.name_en);
        setProductdescriptionar(result.data.discription_ar);
        setProductdescriptionen(result.data.discription_en);
        setProductprice(result.data.price);
        setImage(result.data.image);
        setcategoryinproduct(result.data.category.id);
        setstocktypeinproduct(result.data.stocktype.id);
        setsubcategoryinproduct(result.data.supcategory.id);
        setProduct(result.data);
      } else {
        console.log("error fetching products");
      }
    } else {
      console.log("error fetching products");
    }
  };
  // const product = products.find((product) => product.id === parseInt(id));
  useEffect(() => {
    getProduct();
  }, []);
  if (!product) return <div>Product not found</div>;
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
      };

      reader.readAsDataURL(file);
    } else {
      imagePreview.innerHTML = "No image selected";
    }
  }
  return (
    <div
      className="w-full mx-auto p-4 flex items-center flex-col gap-5 max-[800px]:p-1"
      style={{ direction: "rtl" }}
    >
      {/* <div className="w-[60%] max-[800px]:w-[80%] h-[350px] max-[800px]:h-auto rounded-lg border flex item-center justify-center mt-3">
        
      </div> */}
      <div className=" flex justify-center w-full">
        <div className="addproductimage">
          <div id="imageinpno" className="productimage">
            {/* <img id="#imageinpnocover" src="/imageup.png" width="100px" /> */}
            <Image
              src={product.image}
              alt={product.name_ar}
              width={300}
              height={100}
            />
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
      {/* from edit product*/}
      <form
        className="mt-4 w-[60%] max-[800px]:w-[90%]"
        onSubmit={(e) => {
          e.preventDefault(), editproduct();
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
            onChange={(e) => {
              setProductnamear(e.target.value);
            }}
            defaultValue={product.name_ar}
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
            onChange={(e) => {
              setProductnameen(e.target.value);
            }}
            defaultValue={product.name_en}
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
            onChange={(e) => {
              setProductprice(e.target.value);
            }}
            id="price"
            defaultValue={product.price}
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
            defaultValue={product.discription_ar}
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
            defaultValue={product.discription_en}
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
            defaultValue={product.category.name_ar}
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
            defaultValue={product.supcategory.name_ar}
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
            defaultValue={product.stocktype.stocktype_name_ar}
          >
            {stocktype.map((item) => (
              <option key={item.id} value={item.id}>
                {item.stocktype_name_ar}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center gap-5 mb-4">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-[all_.1s]"
          >
            حفظ التعديلات
          </button>
          <Link
            href="/products"
            type="submit"
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-[all_.1s]"
          >
            إلغاء التعديلات
          </Link>
        </div>
      </form>
    </div>
  );
};

export default EditProduct;
