"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import logo from "../public/logo/logo.png";
import secureLocalStorage from "react-secure-storage";
import { jwtDecode } from "jwt-decode";

function Page() {
  const [profile, setprofile] = useState({
    name: "",
    phone: "",
    address: "",
    email: "",
    image: "",
  });
  let dataUser = [
    {
      name: " وائل مأمون",
      phone: "0123456789",
      address: "اسكندريه / سموحه",
    },
  ];

  useEffect(() => {
    getprofile();
  }, []);
  useEffect(() => {
    document.title = `${profile.name}`;
  }, [profile.name]);

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
          address:
            result.user.data?.address[0]?.address1 !== undefined
              ? result.user.data.address[0]?.address1
              : "",
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

  return (
    <div className="w-full pt-10 pr-11" style={{ direction: "rtl" }}>
      {dataUser.map((data, index) => (
        <div key={index} className="flex flex-col justify-start ">
          <Image
            src={profile.image !== "" ? profile.image : "/ZKZg.gif"}
            width={220}
            height={220}
            alt=""
            className="rounded-full border"
          />
          <div className="mt-10 flex flex-col justify-start gap-4 border-t pt-8">
            <div className="pr-4">
              <h2 className="font-semibold text-[#142433] ">الإسم:</h2>
              <p className="font-sm text-[#8797A8] ">{profile.name}</p>
            </div>
            <div className="pr-4 ">
              <h2 className="font-semibold text-[#142433]">الموبايل:</h2>
              <p className="font-sm text-[#8797A8] ">{profile.phone}</p>
            </div>
            <div className="pr-4 ">
              <h2 className="font-semibold text-[#142433]">ألعنوان:</h2>
              <p className="font-sm text-[#8797A8] ">{profile.address}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Page;
