import Footer from "../../shared/Footer";
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
      <Footer></Footer>
    </div>
  );
};

export default Home;
