import secureLocalStorage from "react-secure-storage";
import { jwtDecode } from "jwt-decode";

const useProducts = async () => {
  if (secureLocalStorage.getItem("_tocken") !== null) {
    const jwtsecure = secureLocalStorage.getItem("_tocken");
    console.log(jwtsecure);
    const accessToken = jwtDecode(jwtsecure);
    console.log(accessToken);
    const jsonString = JSON.stringify({});
    let result = await fetch("/api/auth/supplier/product.php?viewall", {
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
      return result.data;
    } else {
      console.log("error fetching products");
    }
  } else {
    console.log("error fetching products");
  }
};

export default useProducts;
