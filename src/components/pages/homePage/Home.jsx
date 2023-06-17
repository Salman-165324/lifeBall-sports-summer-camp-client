import Footer from "../../shared/Footer";
import Gallery from "./Gallery";
import HeroSection from "./HeroSection";
import PopularClasses from "./PopularClasses";
import PopularInstructor from "./PopularInstructor";

const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>

      <div className="mt-16 primary-container">
        <PopularClasses></PopularClasses>
      </div>
      <div className="primary-container">
        <PopularInstructor></PopularInstructor>
      </div>
      <div className="primary-container">
         <Gallery></Gallery>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
