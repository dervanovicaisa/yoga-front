import Faqs from "./faqs/Faqs";
import Footer from "./footer/Footer";
import HeaderComponent from "./header/Header";
import HomeComponent from "./home/Home";
import Package from "./package/Package";
import Services from "./services/Services";

function HomePage() {
  return (
    <div className="w-95">
      <HeaderComponent />
      <HomeComponent />
      <Services />
      <Faqs />
      <Package />
      <Footer />
    </div>
  );
}

export default HomePage;
