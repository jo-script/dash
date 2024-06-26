"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { jwtDecode } from "jwt-decode";
import secureLocalStorage from "react-secure-storage";
// import { jwtDecode } from "jwt-decode";

const useAuth = () => {
  const router = useRouter();

  const jwtsecure = secureLocalStorage.getItem("_tocken");
  if (!jwtsecure) {
    // Redirect to login page if token is not present
    return false;
  }

  try {
    const accessToken = jwtDecode(jwtsecure);
    console.log(accessToken);
    // Check if token is expired or invalid, if yes, redirect to login page
    // Add your logic here to verify the token
    // For example, check expiry date or verify signature

    // If token is valid, do nothing
  } catch (error) {
    // Token is invalid, redirect to login page
    console.log(error);
  }

  return true; // This hook doesn't return anything, it just handles redirection
};

export default useAuth;
