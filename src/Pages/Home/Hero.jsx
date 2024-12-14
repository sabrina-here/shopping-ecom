import React, { useEffect } from "react";
import { useDarkMode } from "../../Components/DarkModeContext";
import AOS from "aos";
import "aos/dist/aos.css";
import banner4 from "../../assets/banner4.jpg";

export default function Hero() {
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
      id="hero"
      className={`${
        darkMode ? "dark bg-[#19191a]" : "light bg-slate-300"
      } w-full lg:px-20 lg:py-20 px-4 py-8 lg:h-screen h-fit dark:bg-slate-700 dark:bg-transparent flex flex-col lg:flex-row justify-between items-center bg-cover bg-center `}
    >
      <div className="flex flex-col justify-center items-start gap-6 lg:w-[60%] w-full">
        <h1
          data-aos="zoom-in"
          className="text-3xl text-slate-900 italic dark:text-white"
        >
          chick Charisma
        </h1>
        <h1
          data-aos="zoom-in"
          className="lg:text-7xl text-6xl text-black dark:text-white font-bold capitalize"
        >
          Efortless <br /> glamour for <br /> every occassions
        </h1>
        <button
          data-aos="zoom-in"
          className="bg-black px-10 py-4 font-semibold text-white text-lg rounded-lg hover:bg-white dark:text-black hover:text-black cursor-pointer"
        >
          Shop Now
        </button>
      </div>

      <div id="image-box" className="lg:w-[40%] w-full">
        <img
          src={banner4}
          alt="hero image"
          data-aos="zoom in"
          className="bg-cover bg-center"
        />
      </div>
    </section>
  );
}
