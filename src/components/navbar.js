"use client";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { dataDelivered } from "../app/order/delivered/dataDelivered.js"; // import data delivered

import logo from "../app/public/logo/logo.png";

// import icons
import { IoSearchOutline } from "react-icons/io5";
import { IoCubeOutline } from "react-icons/io5";
import { PiList } from "react-icons/pi";
import { IoCartOutline } from "react-icons/io5";
import { GrHomeRounded } from "react-icons/gr";
import { GrAppsRounded } from "react-icons/gr";
import { IoMdNotifications } from "react-icons/io";
import { CiLogout } from "react-icons/ci";

// notification component
import toast, { Toaster } from "react-hot-toast";
import secureLocalStorage from "react-secure-storage";
import { jwtDecode } from "jwt-decode";

// notification card
const notify = () =>
  toast(
    <div
      className="w-[280px] rounded-lg pointer-events-auto flex  items-center justify-center"
      style={{ direction: "rtl" }}
    >
      <div className=" flex-1 ">
        <div className="w-full flex items-center justify-center gap-2">
          <div className="">
            <p className="text-sm font-medium text-gray-900">وائل مأمون</p>
            <div className=" flex justify-between gap-4 w-full mt-1">
              <div className=" text-sm text-center text-gray-500">
                <p>رقم الطلب </p>
                {dataDelivered[0].numberOrders}
              </div>
              <div className=" text-sm text-center text-gray-500">
                <p>عدد المنتجات</p>
                {dataDelivered[0].numberProducts}
              </div>
              <div className=" text- text-center text-gray-500">
                <p>عدد القطع</p>
                {dataDelivered[0].numberPieces}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
    {
      duration: 2000,
    }
  );

function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [pageTitle, setPageTitle] = useState("");
  const [changes, setChanges] = useState(0);
  const [notification, setNotification] = useState(0);
  const [profile, setprofile] = useState({
    name: "",
    phone: "",
    address: "",
    email: "",
    image: "",
  });

  useEffect(() => {
    document.title = "لوحة التحكم";
  }, []);

  useEffect(() => {
    setChanges((prev) => prev + 1);
  }, [pathname]);

  useEffect(() => {
    setPageTitle(document.title);
    setNotification(2);
  }, [changes]);

  // close sidebar on click
  const handleLinkClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  async function getprofile() {
    if (secureLocalStorage.getItem("_tocken") !== null) {
      const jwtsecure = secureLocalStorage.getItem("_tocken");
      console.log(jwtsecure);
      const accessToken = jwtDecode(jwtsecure);
      console.log(accessToken);
      const jsonString = JSON.stringify({});
      let result = await fetch("/api/auth/supplier/profile.php?view", {
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
      const state = result.user.status;
      if (state == "success") {
        const profile = {
          name: `${result.user.data.firstname} ${result.user.data.lastname}`,
          phone: result.user.data.phone,
          address: result.user.data.address[0].address1,
          email: result.user.data.email,
          image: result.user.data.image,
        };
        setprofile(profile);
      } else {
        setprofile({
          name: "",
          phone: "",
          address: "",
          email: "",
          image: "",
        });
      }
    } else {
      setprofile({
        name: "",
        phone: "",
        address: "",
        email: "",
        image: "",
      });
    }
  }
  useEffect(() => {
    getprofile();
  }, []);
  async function logout() {
    console.log("logout clicked");
    if (secureLocalStorage.getItem("_tocken") !== null) {
      const jwtsecure = secureLocalStorage.getItem("_tocken");
      // console.log(jwtsecure)
      const accessToken = jwtDecode(jwtsecure);
      console.log(accessToken);
      const jsonString = JSON.stringify({});
      let result = await fetch("/api/auth/supplier/profile.php?logout", {
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
      const state = result.user.status;
      if (state == "success") {
        secureLocalStorage.setItem("_tocken", null);
        router.push("/login");
      }
    } else {
    }
  }
  // classes style
  const links_sidebar_style =
    "w-[90%] text-[#8797A8] flex items-center justify-end gap-3 p-2 rounded-md hover:bg-gray-200 hover:pr-4 transition-[all_.2s]";

  return (
    <div className="w-full h-[80px] px-[3%] flex items-center justify-between bg-[#dae6f2] text-[#224971] fixed top-0 z-50">
      <div className="w-[12%] flex items-center justify-between gap-10">
        <Image src={logo} width={50} height={50} alt="" />
        <Link href="/notification" className="relative">
          <IoMdNotifications className="scale-[2]" onClick={notify} />
          {notification > 0 && (
            <p className="absolute top-[-15px] right-[-10px] w-[20px] h-[20px] flex items-center justify-center bg-red-500 rounded-full text-white font-semibold ">
              {notification}
            </p>
          )}
        </Link>
        <Toaster />
      </div>

      {/* search */}
      <div className="w-[35%] flex items-center justify-between gap-3 px-5 bg-white text-[#224971] rounded-lg">
        <input
          type="text"
          className="w-[90%] h-full py-[10px] outline-none "
          placeholder="بحث..."
          style={{ direction: "rtl" }}
        />
        <IoSearchOutline className="scale-[1.5] text-gray-400" />
      </div>

      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center justify-between gap-3 max-lg:hidden">
          <h1 className="text-[21px] font-semibold">{pageTitle}</h1>
          <IoCubeOutline className="scale-[1.5]" />
        </div>
        <PiList
          className="scale-[1.8] cursor-pointer lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
      </div>

      {/* side bar */}
      <div
        className={` ${
          isMenuOpen ? "mr-[-270px]" : ""
        }  w-[250px] h-[90vh] py-2 absolute top-[80px]  right-0 flex flex-col justify-between bg-white shadow-[5px_10px_8px_0_black] lg:mr-0 transition-[all_.3s]`}
      >
        <div
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`fixed left-0 top-[80px] w-[770px] h-[100vh] ${
            isMenuOpen ? "hidden" : ""
          } `}
        ></div>
        {/* links */}
        <div className=" w-full text-[19px] flex flex-col justify-center items-center gap-2 ">
          <Link
            href="/"
            onClick={handleLinkClick}
            className={`${
              pathname == "/"
                ? "bg-gray-200 pr-4 text-[#3E5F83] font-semibold"
                : ""
            } ${links_sidebar_style} `}
          >
            <span>الرئيسية</span>
            <GrHomeRounded />
          </Link>
          <Link
            href="/order"
            onClick={handleLinkClick}
            className={`${
              pathname == "/order"
                ? "bg-gray-200 pr-4 text-[#3E5F83] font-semibold"
                : ""
            } ${links_sidebar_style}`}
          >
            <span>الطلبات</span>
            <IoCartOutline className="scale-[1.3]" />
          </Link>
          <Link
            href="/products"
            onClick={handleLinkClick}
            className={`${
              pathname == "/products"
                ? "bg-gray-200 pr-4 text-[#3E5F83] font-semibold"
                : ""
            }  ${links_sidebar_style}`}
          >
            <span>المنتجات</span>
            <GrAppsRounded className="scale-[1.3]" />
          </Link>
        </div>

        {/* profile user */}
        <div className="w-full flex items-center justify-between pl-[20px]">
          <CiLogout
            className="scale-[2] cursor-pointer"
            onClick={() => logout()}
          />
          <Link
            href="/profile"
            className="w-full pr-3 pb-3 flex items-center justify-start gap-2 hover:bg-gray-200 transition-[all_.2s]"
            style={{ direction: "rtl" }}
          >
            <Image
              src={profile.image !== "" ? profile.image : "/ZKZg.gif"}
              alt=""
              width={50}
              height={50}
              className="rounded-full border "
            />
            <div>
              <h3 className="text-[#142433] font-semibold">خزين البيت</h3>
              <p className="text-[#65717d] text-sm ">0123456789</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
