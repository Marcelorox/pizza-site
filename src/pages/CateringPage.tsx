import { Link } from "react-router-dom";
import FooterPages from "../components/Footer";
import Header from "../components/Header";
import { motion } from "framer-motion";

function CateringPage() {
  const buttonVariants = {
    initial: { y: 100, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.5 } },
    hover: { scale: 0.9 },
  };

  const buttonVariants4 = {
    initial: { y: 100, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.6, delay: 0.1 } },
    hover: { scale: 0.9 },
  };

  return (
    <div className="relative">
      <Header />
      <section className="py-8 text-white border-b-4 border-yellow-500 bg-black/90">
        <div className="container mx-auto text-center">
          <h1 className="mb-4 text-5xl font-bold text-yellow-500">Catering</h1>
          <p className="text-xl">
            Welcome to Via Capri - Your Premier Destination for Exceptional
            Pizza Delights!
          </p>
        </div>
      </section>
      <div className="h-[61.2vh] flex flex-col justify-center">
        <div className="flex flex-col items-center">
          <motion.button
            variants={buttonVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            className="px-10 md:min-w-[600px] max-w-[1000px] w-[80%] md:w-[50%] py-4 text-2xl text-white border-4 border-yellow-300 rounded-lg bg-black/90"
          >
            <a href="https://www.viacapripizzeriacatering.getsauce.com/">
              START ORDER
            </a>
          </motion.button>

          <motion.button
            variants={buttonVariants4}
            initial="initial"
            animate="animate"
            whileHover="hover"
            className="px-10 md:min-w-[600px] max-w-[1000px] w-[80%] md:w-[50%] py-4 mt-4  text-2xl text-white border-4 border-yellow-300 rounded-lg bg-black/90"
          >
            <Link to={"/contact-us"}>CATERING INQUIRIES</Link>
          </motion.button>
        </div>
      </div>
      <FooterPages />
    </div>
  );
}

export default CateringPage;
