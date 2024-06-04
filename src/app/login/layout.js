import { Cairo, Inter, Tajawal } from "next/font/google";
import "../globals.css";
import { metadata } from "../metadata";
const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["200", "300", "400", "500", "700", "900"],
});

export default function LoginLayout({ children }) {
  return <div className="flex items-center justify-center">{children}</div>;
}
