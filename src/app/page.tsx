import Banner from "./UI/Banner";
import MainTamplateForProducts from "./UI/MainTamplateForProducts";
import Menu from "./UI/Menu";
import SaleSlider from "./UI/SaleSlider";
import Services from "./UI/Services";
import Slider from "./UI/Slider";

export default function Home() {
  return (
    <div>
      <Slider />
      <Services />
      <Banner />
      <SaleSlider/>
    </div>
  );
}
