import { Cairo, Inter, Tajawal } from "next/font/google";
import "../globals.css";
import { metadata } from "../metadata";
const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["200", "300", "400", "500", "700", "900"],
});

export default function LoginLayout({ children }) {
  return (
    <html>
      {children}
    </html>
  )
}
