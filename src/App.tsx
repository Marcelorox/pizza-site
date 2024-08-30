import React, { CSSProperties, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Header from "./components/Header";
import FooterPages from "./components/Footer";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BiMap } from "react-icons/bi";
import Modal from "./components/Modal";

interface SlideProps {
  children: React.ReactNode;
  title: string;
  description: string;
  buttonLabel: string;
  index: number;
}

function Slide({
  children,
  title,
  description,
  buttonLabel,
  index,
}: SlideProps) {
  const titleVariant = {
    hidden: {
      opacity: 0,
      x: 100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.3,
        delay: 0.2,
      },
    },
  };

  const buttonVariant = {
    hidden: {
      opacity: 0,
      y: 70,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.7,
        delay: 0.2,
      },
    },
  };
  const descVariant = {
    hidden: {
      opacity: 0,
      y: -100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 2,
        delay: 0.2,
      },
    },
  };

  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.4 });
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
      {index === 0 && (
        <div className="absolute z-10 w-full h-full bg-black bg-opacity-30">
          <div className="absolute inset-0 z-10 flex flex-col justify-center mt-[0rem]">
            <motion.h2
              className="text-center text-yellow-300 underline text-1xl md:text-6xl z-99 underline-offset-5 font-sub_title"
              variants={descVariant}
              initial="hidden"
              animate={control}
              ref={ref}
            >
              {description}
            </motion.h2>
            <motion.h2
              className="font-bold text-center text-yellow-300 text-1xl drop-shadow-2xl z-99 font-sub_title"
              variants={titleVariant}
              initial="hidden"
              animate={control}
              ref={ref}
            >
              {title}
            </motion.h2>
            <div className="flex justify-center w-full transition duration-300 hover:scale-110">
              <motion.button
                className="border-[2px] py-2 border-white font-serif rounded-md hover:bg-yellow-500 bg-opacity-40 hover:bg-opacity-100  mt-10 bg-yellow-500 text-3xl min-w-[1px] text-white text-center items-center justify-center flex w-[70%] md:w-[70%] max-w-[600px]"
                variants={buttonVariant}
                initial="hidden"
                animate={control}
              >
                <a href="https://www.viacapripizzeria.getsauce.com/">
                  {buttonLabel}
                </a>
              </motion.button>
            </div>
          </div>
        </div>
      )}
      <div
        className={`relative ${index === 0 ? "bg-black bg-opacity-50" : ""}`}
      ></div>
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

  const slidesData = [
    {
      image: "./ViaCapriPizzeria_Hero.jpg",
      title: "FREE DELIVERY!",
      description: "* UP TO 5 MILES, ON ORDERS ABOVE $30",
      buttonLabel: "ORDER NOW",
    },
    {
      image: "./ViaCapriPizzeria_Mineira.jpg",
      title: "Slide 2 Title",
      description:
        "Descrição para o Slide 2. Adicione seu texto personalizado aqui.",
      buttonLabel: "Button 2 Label",
    },
    {
      image: "./pepperoni.jpeg",
      title: "Slide 2 Title",
      description:
        "Descrição para o Slide 2. Adicione seu texto personalizado aqui.",
      buttonLabel: "Button 2 Label",
    },
    {
      image: "./ViaCapriPizzeria_Hawaiian.jpg",
      title: "Slide 2 Title",
      description:
        "Descrição para o Slide 2. Adicione seu texto personalizado aqui.",
      buttonLabel: "Button 2 Label",
    },
    {
      image: "./ViaCapriPizzeria_ChickenCatupiry.jpg",
      title: "Slide 2 Title",
      description:
        "Descrição para o Slide 2. Adicione seu texto personalizado aqui.",
      buttonLabel: "Button 2 Label",
    },
    {
      image: "./ViaCapriPizzeria_Hawaiian.jpg",
      title: "Slide 2 Title",
      description:
        "Descrição para o Slide 2. Adicione seu texto personalizado aqui.",
      buttonLabel: "Button 2 Label",
    },
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const fadeInUp = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.2 } },
  };

  return (
    <div className="relative">
      <Modal />
      <div className="absolute "></div>
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
              delay: 1000000,
              pauseOnMouseEnter: false,
              stopOnLastSlide: false,
              disableOnInteraction: false,
            }}
          >
            {slidesData.map((slide, index) => (
              <SwiperSlide key={index}>
                <Slide
                  title={slide.description}
                  description={slide.title}
                  buttonLabel={slide.buttonLabel}
                  index={index}
                >
                  <img
                    className="h-[36rem] object-cover md:h-[92.5vh] w-full"
                    src={slide.image}
                    alt=""
                  />
                </Slide>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="flex flex-col w-full p-4 px-11 h-max ">
          <a
            href="tel:+14075071705"
            className="transition duration-300 hover:scale-90"
          >
            <div className="flex h-[2rem] mt-2 items-center justify-center bg-black rounded-md">
              <span className="text-yellow-300">
                <BsFillTelephoneFill />
              </span>
              <span className="ml-2 text-yellow-300">+1 407-507-1705</span>
            </div>
          </a>

          <a
            className="mt-8 transition duration-300 hover:scale-90"
            target="_blank"
            href="https://maps.app.goo.gl/6GYErBFoYGL9FVmY8"
          >
            <div className="flex justify-center w-full bg-black rounded-md h-max">
              <div className="flex justify-center items-center flex-col rounded-md bg-black w-[100%] p-4 ">
                <span className="text-yellow-300 text-7xl">
                  <BiMap />
                </span>

                <span className="mt-2 text-white font-extralight">
                  TAP FOR LOCATION
                </span>
              </div>
            </div>
          </a>

          <div className="h-max w-[100%]  bg-black justify-center flex mt-10 p-2">
            <div
              ref={ref}
              className="flex justify-center items-center flex-col bg-black w-[100%] p-4"
            >
              {/* <motion.h2
                className="text-xl text-yellow-300 font-title_topic drop-shadow-lg"
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={fadeInUp}
              >
                Our history
              </motion.h2> */}
              <motion.h1
                className="text-2xl text-yellow-300 font-sub_title"
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={fadeInUp}
              >
                ABOUT US
              </motion.h1>
              <motion.span
                className="flex w-[75%] text-center text-white"
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={fadeInUp}
              >
                At Via Capri, we have been serving up delectable pizza creations
                with passion and dedication. Our mission is simple: to provide
                you with the most mouthwatering, handcrafted pizzas that will
                satisfy your cravings and leave you wanting more.
              </motion.span>
            </div>
          </div>
          <div className="h-max w-[100%] bg-black justify-center flex p-2 mt-10">
            <div className="flex justify-center items-center flex-col bg-black w-[100%] p-4">
              {/* <motion.h2
                className="text-xl text-yellow-300 font-title_topic drop-shadow-lg"
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={fadeInUp}
              >
                Commitment
              </motion.h2> */}
              <motion.h1
                className="text-2xl text-yellow-300 font-sub_title"
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={fadeInUp}
              >
                Our mission
              </motion.h1>
              <motion.span
                className="flex w-[75%] text-center text-white"
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={fadeInUp}
              >
                We look forward to serving you and becoming your go-to
                destination for the best pizza in town. Whether you prefer the
                convenience of ordering online or the cozy atmosphere of our
                pizzeria, Via Capri is here to satisfy your taste desires. Thank
                you for choosing us! We can't wait to delight your taste buds
                with our mouthwatering creations!
              </motion.span>
            </div>
          </div>
        </div>
      </div>
      <FooterPages />
    </div>
  );
}

export default App;
