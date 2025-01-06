import { BrowserRouter } from "react-router";
import HomePage from "@/app/home/page";
import NavBar from "@/components/navbar/NavBar";
import Footer from "@/components/footer/Footer";
import EmblaCarousel from "@/components/carousel/EmblaCarousel";
import MultipleItems from "@/components/slick/Slick";

export default function Home() {
  return (
    <>
      <HomePage/>
      {/* <MultipleItems/> */}
    </>
  );
}
