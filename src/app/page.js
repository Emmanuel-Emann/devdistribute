import HomePage from "@/app/HomePage";
import NavBar from "@/components/navbar/NavBar";
import Footer from "@/components/footer/Footer";
import EmblaCarousel from "@/components/carousel/EmblaCarousel";

export default function Home() {
  return (
    <>
      <NavBar/>
      <HomePage/>
      {/* <EmblaCarousel/> */}
      <Footer/>
    </>
  );
}
