import { Cairo, Inter, Tajawal } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { ApolloWrapper } from "@/lib/apollo-wrapper";
import "./metadata";
const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["200", "300", "400", "500", "700", "900"],
});
const isLoginPage = false;
export default function RootLayout({ children }) {
  console.log(isLoginPage);
  return (
    <html lang="en">
      <body className={tajawal.className}>
        {!isLoginPage && <Navbar />} {/* Render Navbar except on login page */}
        {children}
      </body>
    </html>
  );
}
