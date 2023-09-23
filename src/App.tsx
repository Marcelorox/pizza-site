import React, { CSSProperties, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Header from "./components/Header";

interface SlideProps {
  children: React.ReactNode;
  title: string;
  description: string;
  buttonLabel: string;
}

function Slide({ children, title, description, buttonLabel }: SlideProps) {
  const titleVariant = {
    hidden: {
      opacity: 0,
      y: 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.3,
      },
    },
  };

  const buttonVariant = {
    hidden: {
      opacity: 0.2,
      y: 70,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.3,
      },
    },
  };

  const [ref, inView] = useInView();
  const control = useAnimation();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <SwiperSlide className="relative flex">
      <div className="absolute inset-0 z-10 flex flex-col justify-center mt-[0rem]">
        <motion.h2
          className="text-5xl font-bold text-center text-yellow-300 underline drop-shadow-2xl underline-offset-5 z-99 font-title"
          variants={titleVariant}
          initial="hidden"
          animate={control}
          ref={ref}
        >
          {title}
        </motion.h2>
        <div className="flex justify-center w-full">
          <motion.button
            className="border-[2px] border-white hover:bg-yellow-300 bg-opacity-40 mt-4 bg-yellow-500 ] font-sub_title text-3xl font-bold  min-w-[1px] text-white text-center items-center justify-center flex w-[70%] md:w-[50%]"
            variants={buttonVariant}
            initial="hidden"
            animate={control}
          >
            {buttonLabel}
          </motion.button>
        </div>
      </div>
      {children}
    </SwiperSlide>
  );
}

function App() {
  const customStyles: CSSProperties = {
    ["--swiper-pagination-color" as string]: "#ffff01",
    ["--swiper-pagination-bullet-inactive-color" as string]: "#000000",
    ["--swiper-pagination-bullet-inactive-opacity" as string]: "1",
  };

  const handleSlideChange = () => {};

  const [imageDimensions, setImageDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const getImageDimensions = () => {
      const img = document.querySelector(
        ".swiper-slide-active img"
      ) as HTMLImageElement;
      if (img) {
        setImageDimensions({ width: img.width, height: img.height });
      }
    };

    window.addEventListener("load", getImageDimensions);
    window.addEventListener("resize", getImageDimensions);

    const swiper = document.querySelector(".swiper-container") as HTMLElement;
    if (swiper) {
      swiper.addEventListener("transitionend", getImageDimensions);
    }

    return () => {
      window.removeEventListener("load", getImageDimensions);
      window.removeEventListener("resize", getImageDimensions);
      if (swiper) {
        swiper.removeEventListener("transitionend", getImageDimensions);
      }
    };
  }, []);

  const slidesData = [
    {
      image: "/ViaCapriPizzeria_Hero.jpg",
      title: "Slide 1 Title",
      description:
        "Descrição para o Slide 1. Adicione seu texto personalizado aqui.",
      buttonLabel: "Button 1 Label",
    },
    {
      image: "/ViaCapriPizzeria_Mineira.jpg",
      title: "Slide 2 Title",
      description:
        "Descrição para o Slide 2. Adicione seu texto personalizado aqui.",
      buttonLabel: "Button 2 Label",
    },
    {
      image: "/ViaCapriPizzeria_Hawaiian.jpg",
      title: "Slide 2 Title",
      description:
        "Descrição para o Slide 2. Adicione seu texto personalizado aqui.",
      buttonLabel: "Button 2 Label",
    },
    {
      image: "/ViaCapriPizzeria_ChickenCatupiry.jpg",
      title: "Slide 2 Title",
      description:
        "Descrição para o Slide 2. Adicione seu texto personalizado aqui.",
      buttonLabel: "Button 2 Label",
    },
    {
      image: "/ViaCapriPizzeria_Hawaiian.jpg",
      title: "Slide 2 Title",
      description:
        "Descrição para o Slide 2. Adicione seu texto personalizado aqui.",
      buttonLabel: "Button 2 Label",
    },
  ];

  return (
    <div>
      <div className="w-full h-max">
        <Header />
        <div className="relative flex h-max">
          <Swiper
            style={customStyles}
            modules={[Navigation, Pagination, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            pagination={{ clickable: true }}
            onSlideChange={handleSlideChange}
            autoplay={{
              delay: 3000,
              pauseOnMouseEnter: false,
              stopOnLastSlide: false,
              disableOnInteraction: false,
              reverseDirection: true,
            }}
          >
            {slidesData.map((slide, index) => (
              <SwiperSlide key={index}>
                <Slide
                  title={slide.title}
                  description={slide.description}
                  buttonLabel={slide.buttonLabel}
                >
                  <img
                    className="h-[36rem] object-cover md:h-[91vh] w-full"
                    src={slide.image}
                    alt=""
                  />
                </Slide>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* <div
            className="absolute z-10 bg-black opacity-30"
            style={{
              width: `${imageDimensions.width}px`,
              height: `${imageDimensions.height}px`,
            }}
          ></div> */}
        </div>

        <div className="flex flex-col w-full p-4 px-11 h-max">
          <div className="h-max w-[100%] bg-black justify-center flex ">
            <div className="flex justify-center items-center flex-col bg-black  w-[100%] p-4">
              <h2 className="text-xl text-yellow-300 font-title_topic drop-shadow-lg">
                Our history
              </h2>
              <h1 className="text-3xl text-yellow-300 font-sub_title">
                ABOUT US
              </h1>
              <span className="flex w-[75%] text-center text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
                accusantium, eaque molestias incidunt minus dolorem possimus
                labore porro, non nisi vitae facere? Corrupti minus quos
                tempora, doloremque optio officiis nesciunt? Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Sapiente porro reiciendis
                temporibus rem earum laudantium obcaecati ipsa dicta repellat
                facilis et eligendi minima ipsam modi molestias adipisci,
                ratione repellendus nesciunt?
              </span>
            </div>
          </div>
          <div className="h-max w-[100%] bg-black justify-center flex p-6 mt-10">
            <div className="flex justify-center items-center flex-col bg-black  w-[100%]">
              <h2 className="mt-4 text-xl text-yellow-300 font-title_topic drop-shadow-lg">
                Our history
              </h2>
              <h1 className="text-3xl text-yellow-300 font-sub_title">
                ABOUT US
              </h1>
              <span className="flex w-[75%] text-center text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
                accusantium, eaque molestias incidunt minus dolorem possimus
                labore porro, non nisi vitae facere? Corrupti minus quos
                tempora, doloremque optio officiis nesciunt? Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Sapiente porro reiciendis
                temporibus rem earum laudantium obcaecati ipsa dicta repellat
                facilis et eligendi minima ipsam modi molestias adipisci,
                ratione repellendus nesciunt?
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
