import Image from "next/image";
import { Inter } from "next/font/google";
import HomePage from "./Store";
import Login from "./Login";
import Cart from "./Cart";
import Order from "./Order";
const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  return (
    <main>
      <Login />
    </main>
  );
}
