import React, { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { bestsellers } from "../../Components/export";
import AOS from "aos";
import "aos/dist/aos.css";
import { useDarkMode } from "../../Components/DarkModeContext";
import { FaRegHeart } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function BestSeller() {
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
      id="products"
      className={`${
        darkMode ? "dark bg-[#191a" : "light bg-slate-200"
      } w-full lg:px-20 px-10 lg:py-20 py-10 flex flex-col justify-center items-center gap-6`}
    >
      <h1
        data-aos="zoom-in"
        className="uppercase text-2xl dark:text-white text-slate-500 text-center"
      >
        Top Products
      </h1>
      <h1 className="text-5xl font-semibold dark:text-white text-black text-center">
        Best Sellers
      </h1>

      <div data-aos="slide-up" data-aos-delay="200" className="w-full mt-3">
        <Slider {...settings}>
          {bestsellers.map((item, index) => (
            <div
              id="product-box"
              key={index}
              className="flex flex-col justify-center items-start gap-2 bg-white rounded-xl dark:bg-black "
            >
              <div id="image-box" className="relative cursor-pointer">
                <img src={item.image} alt="" className="w-[400px] h-[250px]" />
                <div
                  id="icon-box"
                  className="hidden hover:flex flex-col justify-center items-center gap-1 absolute top-3 right-3"
                >
                  <div className="bg-white p-3 rounded-full hover:bg-black hover:text-white transform hover:scale-110 transition-transform duration-300">
                    <FaRegHeart />
                  </div>
                  <div className="bg-white p-3 rounded-full hover:bg-black hover:text-white transform hover:scale-110 transition-transform duration-300">
                    <IoSearch />
                  </div>
                  <div className="bg-white p-3 rounded-full hover:bg-black hover:text-white transform hover:scale-110 transition-transform duration-300">
                    <AiOutlineShoppingCart />
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center items-start gap-3 p-3">
                <p className="italic dark:text-white">{item.category}</p>
                <h1 className="text-xl dark:text-white text-black font-semibold">
                  {item.title}
                </h1>
                <h1 className="text-red-600 dark:text-white font-bold text-2xl">
                  {item.price}
                </h1>
                <button className="bg-black font-bold dark:bg-white dark:text-black text-sm text-white px-5 rounded-md transform hover:scale-105 transition-transform duration-300 mt-2">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
