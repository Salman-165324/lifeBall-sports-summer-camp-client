import Footer from "../components/shared/Footer";
import Gallery from "../components/pages/homePage/Gallery";
import HeroSection from "../components/pages/homePage/HeroSection";
import PopularClasses from "../components/pages/homePage/PopularClasses";
import PopularInstructor from "../components/pages/homePage/PopularInstructor";
import OurFeatures from "../components/pages/homePage/OurFeatures";
import { ServerLoading } from "../components/shared/ServerLoading";

const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <section className="mt-16 primary-container">
        <OurFeatures />
      </section>
      <section className="primary-container">
        <PopularClasses></PopularClasses>
      </section>
      <Gallery></Gallery>
      <section className="primary-container">
        <PopularInstructor></PopularInstructor>
      </section>

      {/* <section className="primary-container">
        <ServerLoading></ServerLoading>
      </section> */}

      <Footer></Footer>
    </div>
  );
};

export default Home;
