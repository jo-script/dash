import { Cairo, Inter, Tajawal } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar";
// import "./metadata";
const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["200", "300", "400", "500", "700", "900"],
});
const isLoginPage = false;
export default function RootLayout({ children }) {
  console.log(isLoginPage);
  return (
    <html lang="ar">
      <body className={cairo.className}>
        <Navbar /> {/* Render Navbar except on login page */}
        {children}
      </body>
    </html>
  );
}
