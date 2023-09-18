import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Squash as Hamburger } from "hamburger-react";
import { useEffect, useState } from "react";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaPhoneSquare } from "react-icons/fa";

function Header() {
  const [isOpen, setOpen] = useState(false);
  const control = useAnimation();

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

  const headerLinks = [
    {
      id: 1,
      label: "Home",
      path: "/home",
    },
    {
      id: 2,
      label: "Join our team",
      path: "/home",
    },
    {
      id: 3,
      label: "Catering",
      path: "/home",
    },
    {
      id: 4,
      label: "About us",
      path: "/home",
    },
    {
      id: 5,
      label: "Franchising",
      path: "/home",
    },
  ];

  return (
    <>
      <header className="flex bg-black w-full items-center p-4 justify-between">
        <div className="">
          <img
            src="https://www.viacapripizzas.com/wp-content/uploads/Via-Capri-logo_fonte_branca.png"
            alt=""
            className="h-[2rem]"
          />
        </div>

        <div className="flex items-center">
          <button className="flex h-10 items-center p-4 bg-yellow-300 mr-4 text-black hover:text-white hover:bg-yellow-500">
            Start order
          </button>
          <Hamburger color="white" toggled={isOpen} toggle={setOpen} rounded />
        </div>
      </header>

      {isOpen && (
        <motion.div
          className="box w-full h-[90%] bg-black"
          variants={menuVariant}
          initial="hidden"
          animate="visible"
        >
          <div className="flex w-full">
            <div className="w-[50%] flex flex-col"></div>
            <div className="flex w-[50%] flex-col" ref={ref}>
              <motion.div
                className="box w-full"
                variants={boxVariant}
                initial="hidden"
                animate="visible"
              >
                <ul className="flex flex-col p-4 h-max">
                  {headerLinks.map(({ id, label, path }) => (
                    <li
                      key={id}
                      className="flex mb-4 justify-start cursor-pointer mr-11 "
                    >
                      <a
                        href={path}
                        className="text-white  uppercase hover:text-yellow-400"
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="flex mt-4 p-4 justify-between w-[65%]">
                  <a href="" className="text-yellow-300">
                    <span className="text-[30px] ">
                      <FaSquareWhatsapp />
                    </span>
                  </a>

                  <a href="" className="text-yellow-300">
                    <span className="text-[30px] ">
                      <FaSquareInstagram />
                    </span>
                  </a>
                  <a href="" className="">
                    <span className="text-[30px] ">
                      <FaPhoneSquare className="text-yellow-300" />
                    </span>
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}

export default Header;
