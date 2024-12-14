import React, { useEffect } from "react";
import banner2 from "../../assets/banner2.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useDarkMode } from "../../Components/DarkModeContext";

export default function Banner() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <section
      className={`${
        darkMode ? "dark bg-black" : "light bg-white"
      } w-full lg:px-20 px-10 lg:py-20 py-10 flex lg:flex-row flex-col justify-center items-center gap-6`}
    >
      <div className="lg:w-[50%] w-full">
        <img src={banner2} alt="banner img" data-aos="zoom-in" />
      </div>

      <div className="lg:w-[50%] w-full lg:py-10 flex flex-col justify-center items-center gap-8">
        <h1
          data-aos="zoom-in"
          data-aos-delay="200"
          className="uppercase text-2xl text-slate-500 dark:text-white  text-center"
        >
          upto 60% off
        </h1>
        <h1
          data-aos="zoom-in"
          data-aos-delay="400"
          className="lg:text-5xl text-4xl text-black dark:text-white line-clamp-5 text-center"
        >
          Unleash your Style <br /> Potential with our <br /> Spectacular
          Clothing Sale
        </h1>
        <p
          data-aos="zoom-in"
          data-aos-delay="600"
          className="text-center text-xl text-slate-700 dark:text-white"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          illo possimus accusamus neque voluptatibus officia.
        </p>
        <button
          className=" px-10 py-4 text-lg text-white dark:bg-white dark:text-black bg-black font-semibold rounded-lg mt-5 transform hover:scale-105 transition-transform duration-300"
          data-aos="zoom-in"
          data-aos-delay="800"
        >
          Shop Now
        </button>
      </div>
    </section>
  );
}
