/* eslint-disable react-hooks/rules-of-hooks */
// import React from 'react';
"use client";
import React from "react";
import { useState, useEffect } from "react";
import secureLocalStorage from "react-secure-storage";
import { useRouter } from "next/navigation";
import jwtencode from "jwt-encode";
import { jwtDecode } from "jwt-decode";
import LoginLayout from "./layout";
import Head from "next/head";
import { metadata } from "../metadata";

function login(props) {
  const myprops = props;
  const router = useRouter();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [loged, setloged] = useState("");

  useEffect(() => {
    // var password = document.getElementById("password");
    // var errormessage = document.getElementById("errormessage");
    // console.log(secureLocalStorage.getItem("jwt"));
    // if (secureLocalStorage.getItem("_tocken") !== null) {
    //   router.push("/profile");
    //   console.log(window?.history.length);
    //   console.log(router);
    //   if (window.history.length >= 0) {
    //     router.back();
    //   } else {
    //     router.push("/profile");
    //   }
    //   const referrer = document.referrer; // Get the referrer from the client side
    //   // Check if the referrer is an external website
    //   const isExternalReferrer = !referrer.startsWith(window.location.origin);
    //   if (isExternalReferrer) {
    //     // Redirect to the previous page within your application
    //     router.back();
    //   } else {
    //     router.push("/profile");
    //   }
    // }
    loginvalidate();
    console.log(loged);
  }, []);
  async function loginvalidate() {
    console.log(secureLocalStorage);
    if (secureLocalStorage.getItem("_tocken") !== null) {
      const jwtsecure = secureLocalStorage.getItem("_tocken");
      const accessToken = jwtDecode(jwtsecure);
      const jsonString = JSON.stringify({});
      let result = await fetch("/api/auth/supplier/login.php", {
        method: "POST",
        body: jsonString,
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${accessToken}`,
          // 'X-Custom-Header': `Bearer ${jwtsecure}`
        },
      }).catch((e) => console.log(e));
      result = await result.json();
      // const messages = result.login.message
      const state = result.login.status;
      if (state == "loged") {
        setloged("in");
      } else {
        setloged("out");
      }
    } else {
      setloged("out");
      console.log("no tocken found");
    }
  }

  async function loginfunction() {
    // var email = document.getElementById('Email')
    // var password = document.getElementById('password')

    var errormessage = document.getElementById("errormessage");
    const jsonString = JSON.stringify({ userlogin: email, password: password });
    let result = await fetch("/api/auth/supplier/login.php", {
      method: "POST",
      body: jsonString,
      headers: {
        "content-type": "application/json-patch+json",
        "Access-Control-Allow-Origin": "*",
        // 'Authorization': `Bearer ${accessToken}`,
        // Origin: '*',
        // Accept: 'application/json',
      },
    }).catch((e) => console.log(e));
    result = await result.json();

    // const messages = result.login.message
    const state = result.login.status;
    const data = result.login.data;
    const jwt = result.login.jwt;
    if (state == "success") {
      console.log("loged");
      const usersecure = jwtencode(jwt, "secret");
      secureLocalStorage.setItem("_tocken", usersecure);
      // console.log(usersecure)
      router.push("/");
    } else {
      console.log("error");
      errormessage.textContent = "اسم المستخدم او الرقم السري غير صحيح";
    }
  }

  const handleEmailChange = (newValue) => {
    setemail(newValue); // Update email state
  };

  const handlePasswordChange = (newValue) => {
    setpassword(newValue); // Update password state
  };

  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>

      {loged ? (
        <>
          {loged === "in" ? (
            <>
              <div className="loading">
                <img src="/ZKZg.gif" alt="loading" />
              </div>
              {router.push("/")}
            </>
          ) : (
            <>
              {/* <div className="loginpage flex items-center justify-center">
                <div className="login">
                  <div className="dl">
                    <div className="logodiv">
                      <span className="logologin"></span>
                      <p>لوحة تحكم التجار</p>
                    </div>
                  </div>
                  <div className="dr">
                    <div className="title">تسجيل الدخول</div>
                    <div className="logindash">
                      <form
                        onSubmit={(e) => {
                          e.preventDefault();
                          loginfunction();
                        }}
                        method="post"
                        cl
                      >
                        <div className="inputplus">
                          <input
                            type="text"
                            placeholder="اسم المستخدم"
                            value={email}
                            onChange={(e) => {
                              setemail(e.target.value);
                            }}
                          />
                        </div>
                        <div className="inputplus">
                          <input
                            type="password"
                            placeholder="الرقم السري"
                            value={password}
                            onChange={(e) => {
                              setpassword(e.target.value);
                            }}
                          />
                        </div>
                        <div className="submitbtn">
                          <input type="submit" value="تسجيل دخول" />
                        </div>
                        <div id="errormessage"></div>
                      </form>
                    </div>
                  </div>
                </div>
              </div> */}
              <div className="forms flex justify-center items-center">
                <div className="form-content">
                  <div className="dl">
                    <div className="logodiv">
                      <span className="logologin"></span>
                    </div>
                  </div>
                  <div className="login-form">
                    <div className="title">لوحة التحكم</div>
                    <form
                      onSubmit={(e) => {
                        e.preventDefault(), loginfunction();
                      }}
                      method="post"
                    >
                      <div className="input-boxes">
                        <div className="input-box">
                          {/* <i className="fas fa-envelope"></i> */}
                          <input
                            type="text"
                            placeholder="اسم المستخدم"
                            value={email}
                            onChange={(e) => {
                              setemail(e.target.value);
                            }}
                            required
                          />
                        </div>
                        <div className="input-box">
                          {/* <i className="fas fa-lock"></i> */}
                          <input
                            type="password"
                            placeholder="الرقم السري"
                            value={password}
                            onChange={(e) => {
                              setpassword(e.target.value);
                            }}
                            required
                          />
                        </div>
                        {/* <div className="text"><a href="#">Forgot password?</a></div> */}
                        <div className="button input-box">
                          <input type="submit" value="تسجيل دخول" />
                        </div>
                        <div id="errormessage"></div>
                        {/* <div className="text sign-up-text">Don't have an account? <label for="flip">Sigup now</label></div> */}
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </>
          )}
        </>
      ) : (
        <>
          {/* loading */}
          <div className="loading">
            <img src="/ZKZg.gif" alt="loading" />
          </div>
        </>
      )}
    </>
  );
}

export default login;
