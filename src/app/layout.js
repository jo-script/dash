"use client";
import { Cairo, Inter, Tajawal } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { ApolloWrapper } from "@/lib/apollo-wrapper";
import "./metadata";
import { useEffect, useState } from "react";
import secureLocalStorage from "react-secure-storage";
import { jwtDecode } from "jwt-decode";
// import { isLoginPage } from "@/HOC/isLoginPage";
const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["200", "300", "400", "500", "700", "900"],
});
const isLoginPage = false;
export default function RootLayout({ children }) {
  const [profile, setprofile] = useState({
    name: "",
    phone: "",
    address: "",
    email: "",
    image: "",
  });

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
        console.log(profile);
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
  return (
    <html lang="en">
      <body className={tajawal.className}>
        {!isLoginPage && (
          <Navbar
            profileImg={profile.image}
            profileName={profile.name}
            profilePhone={profile.phone}
          />
        )}{" "}
        {/* Render Navbar except on login page */}
        {children}
      </body>
    </html>
  );
}
