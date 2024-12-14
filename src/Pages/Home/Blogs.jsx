import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useDarkMode } from "../../Components/DarkModeContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { blogs } from "../../Components/export";

export default function Blogs() {
  const { darkMode, toggleDarkMode } = useDarkMode();

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section
      className={`${
        darkMode ? "dark bg-black" : "light bg-white"
      } w-full lg:px-20 px-10 lg:py-20 py-10 flex flex-col justify-center items-center gap-6`}
    >
      <h1
        data-aos="zoom-in"
        className="uppercase text-2xl text-slate-500 dark:text-white text-center "
      >
        Latest posts
      </h1>
      <h1
        data-aos="zoom-in"
        className="text-5xl font-semibold dark:text-white text-black text-center "
      >
        Blogs & Insights
      </h1>

      <div data-aos="slide-up" className=" w-full mt-3 " id="blogs-slider">
        <Slider {...settings}>
          {blogs.map((item, index) => {
            <div
              key={index}
              id="product-box"
              className="flex flex-col justify-center items-start gap-1 bg-white rounded-xl dark:bg-black "
            >
              <img
                src={item.image}
                alt="blogs image"
                className="w-full h-[300px]"
              />
              <div className="p-2">
                <div
                  id="content-box"
                  className="flex justify-start items-center gap-2"
                >
                  <h1 className="text-lg text-black font-semibold dark:text-white">
                    {item.author}
                  </h1>
                  <h1 className="italic dark:text-white ">{item.date}</h1>
                </div>
                <h1 className="text-2xl font-semibold text-black dark:text-white">
                  {item.title}
                </h1>
              </div>
            </div>;
          })}
        </Slider>
      </div>
    </section>
  );
}
