import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import PrimaryBtn from "../../utils/PrimaryBtn";
import Navbar from "../../shared/Navbar";
import { Fade, Slide } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="z-10">
      <div className="absolute z-20 w-full">
        <Navbar></Navbar>
      </div>
      <div className="carousel inset-0 w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <div className="absolute inset-0 bg-green-950 bg-opacity-60"></div>
          <img
            src="https://res.cloudinary.com/dodpx3cj9/image/upload/f_auto,q_auto/v1/lifeball/heroSection/bg-1_u83czh.jpg"
            srcSet="
    https://res.cloudinary.com/dodpx3cj9/image/upload/f_auto,q_auto,w_480/v1/lifeball/heroSection/bg-1_u83czh.jpg 480w, 
    https://res.cloudinary.com/dodpx3cj9/image/upload/f_auto,q_auto,w_768/v1/lifeball/heroSection/bg-1_u83czh.jpg 768w, 
    https://res.cloudinary.com/dodpx3cj9/image/upload/f_auto,q_auto,w_1280/v1/lifeball/heroSection/bg-1_u83czh.jpg 1280w, 
    https://res.cloudinary.com/dodpx3cj9/image/upload/f_auto,q_auto,w_1920/v1/lifeball/heroSection/bg-1_u83czh.jpg 1920w"
            sizes="(max-width: 480px) 480px, 
         (max-width: 768px) 768px, 
         (max-width: 1280px) 1280px, 
         1920px"
            className="w-full object-cover h-[100vh]"
            alt="A student of the chess class playing with outmost attention"
          />

          <div className="absolute z-10 opacity-40 flex justify-between transform -translate-y-1/2 left-3 right-3 bottom-[8vh] lg:bottom-1/2">
            <a href="#slide2" className="btn btn-circle bg-slate-200">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle bg-slate-200">
              ❯
            </a>
          </div>
          <div className="absolute bottom-[33%] left-4 right-4 lg:left-[15%] md:max-w-2xl ">
            <Slide>
              <h2 className=" text-4xl font-bold text-yellow-300 lg:text-6xl ">
                Not just a Summer Sports Camp!
              </h2>
            </Slide>
            <Fade delay={1e3} cascade damping={1e-2}>
              <p className="text-yellow-100 font-semibold mt-5 max-w-xl mb-8">
                Here your kids play and have fun, while simultaneously we teach
                them how to think, use tactics, communicate effectively,
                demonstrate leadership, and more. Our goal is to prepare them
                for the game of life through different sports.
              </p>
            </Fade>

            <Link to={"/classes"}>
              <PrimaryBtn text={"Learn More"}></PrimaryBtn>
            </Link>
          </div>
        </div>

        {/* Slide 2 */}
        <div id="slide2" className="carousel-item relative w-full">
          <div className="absolute inset-0 bg-green-950 bg-opacity-60"></div>
          <img
            src="https://res.cloudinary.com/dodpx3cj9/image/upload/f_auto,q_auto/v1/lifeball/heroSection/bg-2_nvl1ea.jpg"
            srcSet="
    https://res.cloudinary.com/dodpx3cj9/image/upload/f_auto,q_auto,w_480/v1/lifeball/heroSection/bg-2_nvl1ea.jpg 480w, 
    https://res.cloudinary.com/dodpx3cj9/image/upload/f_auto,q_auto,w_768/v1/lifeball/heroSection/bg-2_nvl1ea.jpg 768w, 
    https://res.cloudinary.com/dodpx3cj9/image/upload/f_auto,q_auto,w_1280/v1/lifeball/heroSection/bg-2_nvl1ea.jpg 1280w, 
    https://res.cloudinary.com/dodpx3cj9/image/upload/f_auto,q_auto,w_1920/v1/lifeball/heroSection/bg-2_nvl1ea.jpg 1920w"
            sizes="(max-width: 480px) 480px, 
         (max-width: 768px) 768px, 
         (max-width: 1280px) 1280px, 
         1920px"
            className="w-full object-cover h-[100vh]"
            alt="Descriptive text about the image"
          />

          <div className="absolute z-10 opacity-40 flex justify-between transform -translate-y-1/2 left-3 right-3 bottom-[8vh] lg:bottom-1/2">
            <a href="#slide1" className="btn btn-circle bg-slate-200">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle bg-slate-200">
              ❯
            </a>
          </div>
          <div className="absolute bottom-[40%] left-3 right-3 lg:left-[15%] md:max-w-2xl ">
            <Slide>
              <h2 className=" text-4xl font-bold text-yellow-300 lg:text-6xl ">
                Teach your kids to think and strategize.
              </h2>
            </Slide>
            <p className=" mb-5 text-yellow-100 font-semibold mt-3 md:mt-5 max-w-xl"></p>
            <div className="mt-5">
              <Link to={"/classes"}>
                <PrimaryBtn text={"Learn More"}></PrimaryBtn>
              </Link>
            </div>
          </div>
        </div>

        {/* <div id="slide2" className="carousel-item relative w-full">
          <img src={bg2} className="w-full object-cover  h-[100vh]" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default HeroSection;
