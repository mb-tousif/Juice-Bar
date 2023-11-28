import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

export default function Main() {
  return (
    <div className=" bg-gradient-to-b from-[#c1dfc4] to-[#ADCDED]">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}