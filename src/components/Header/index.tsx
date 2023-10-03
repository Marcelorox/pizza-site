import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Squash as Hamburger } from "hamburger-react";
import { useCallback, useEffect, useState } from "react";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";

function Header() {
  const [isOpen, setOpen] = useState(false);
  const control = useAnimation();
  const isCateringPage = location.pathname === "/Catering";

  const menuVariant = {
    hidden: {
      opacity: 0.5,
      x: 100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  const boxVariant = {
    hidden: {
      opacity: 0,
      x: 100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
      },
    },
  };

  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  const handleScroll = useCallback(() => {
    if (isOpen) {
      setOpen(false);
    }
  }, [isOpen]);

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [control, inView, isOpen, handleScroll]);

  const headerLinks = [
    {
      id: 1,
      label: "Home",
      path: "/",
    },
    {
      id: 2,
      label: "About us",
      path: "/AboutUs",
    },
    {
      id: 3,
      label: "Join our team",
      path: "/JoinOurTeam",
    },
    {
      id: 4,
      label: "Catering",
      path: "/Catering",
    },
  ];

  return (
    <>
      <header className="z-50 flex items-center justify-between w-full p-2 bg-[#191919]">
        <div className="">
          <img
            src="https://www.viacapripizzas.com/wp-content/uploads/Via-Capri-logo_fonte_branca.png"
            alt=""
            className="h-[2rem] hover:scale-110 transition duration-300 "
          />
        </div>

        <div className="flex items-center">
          {!isCateringPage && (
            <button className="flex items-center h-10 p-4 mr-4 font-serif text-black transition duration-300 bg-yellow-300 rounded hover:scale-110 hover:text-white hover:bg-yellow-500">
              <a href="https://www.viacapripizzeria.getsauce.com/">
                Start order
              </a>
            </button>
          )}

          <Hamburger color="white" toggled={isOpen} toggle={setOpen} rounded />
        </div>
      </header>
      {isOpen && (
        <>
          <motion.div
            className="box w-full md:absolute right-0 md:w-[20%] md:z-20 h-[100vh] bg-[#191919]"
            variants={menuVariant}
            initial="hidden"
            animate="visible"
          >
            <div className="flex flex-col sm:absolute sm:right-10 lg:right-8 items-end w-[30%] md:w-[60%]">
              <div
                className="flex w-[80%] sm:relative md:w-[100%] ml-[8%] md:ml-[0%]  flex-col md:mr-[2%]"
                ref={ref}
              >
                <motion.div
                  className="sm:absolute flex flex-col items-end right-[15%] w-full box"
                  variants={boxVariant}
                  initial="hidden"
                  animate="visible"
                >
                  <ul className="flex flex-col p-4 w-max md:mx-auto">
                    {headerLinks.map(({ id, label, path }) => (
                      <li
                        key={id}
                        className="flex justify-start mb-4 cursor-pointer "
                      >
                        <a
                          href={path}
                          className="text-white uppercase hover:text-yellow-400 font-sub_title"
                        >
                          {label}
                        </a>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col min-w-[33%] md:min-w-[56%]">
                    <span className="text-base text-white font-sub_title">
                      FOLLOW US:
                    </span>
                    <div className="flex justify-between w-full mt-2">
                      <a
                        href="https://www.facebook.com/viacapripizzas/?locale=us"
                        className="mr-2 text-yellow-300 transition duration-300 hover:scale-110"
                      >
                        <span className="text-[30px] ">
                          <FaSquareFacebook />
                        </span>
                      </a>

                      <a
                        href="https://www.instagram.com/viacapripizzas/?hl=us"
                        className="mr-2 text-yellow-300 transition duration-300 hover:scale-110"
                      >
                        <span className="text-[30px] ">
                          <FaSquareInstagram />
                        </span>
                      </a>

                      <a
                        href="https://twitter.com/viacapri"
                        className="transition duration-300 hover:scale-110"
                      >
                        <span className="text-[30px]">
                          <FaTwitterSquare className="text-yellow-300" />
                        </span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </>
  );
}

export default Header;
