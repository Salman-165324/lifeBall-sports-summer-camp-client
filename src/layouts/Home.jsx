import Footer from "../components/shared/Footer";
import Gallery from "../components/pages/homePage/Gallery";
import HeroSection from "../components/pages/homePage/HeroSection";
import PopularClasses from "../components/pages/homePage/PopularClasses";
import PopularInstructor from "../components/pages/homePage/PopularInstructor";
import OurFeatures from "../components/pages/homePage/OurFeatures";

const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
       <div className="mt-16 primary-container">
       <OurFeatures />
       </div>
      <div className="primary-container">
        <PopularClasses></PopularClasses>
      </div>
      <Gallery></Gallery>
      <div className="primary-container">
        <PopularInstructor></PopularInstructor>
      </div>
     
     
 
      <Footer></Footer>
    </div>
  );
};

export default Home;
