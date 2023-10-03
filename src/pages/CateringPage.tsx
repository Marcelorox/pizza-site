import FooterPages from "../components/Footer";
import Header from "../components/Header";
import { motion } from "framer-motion";

function CateringPage() {
  const buttonVariants = {
    initial: { y: 100, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.5 } },
    hover: { scale: 1.1 },
  };

  const buttonVariants2 = {
    initial: { y: 100, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.6, delay: 0.2 } },
    hover: { scale: 1.1 },
  };
  const buttonVariants3 = {
    initial: { y: 100, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.7, delay: 0.3 } },
    hover: { scale: 1.1 },
  };
  const buttonVariants4 = {
    initial: { y: 100, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.8, delay: 0.4 } },
    hover: { scale: 0.5 },
  };

  return (
    <>
      <Header />
      <section className="py-16 text-white border-b-4 border-yellow-500 bg-black/90">
        <div className="container mx-auto text-center">
          <h1 className="mb-4 text-5xl font-bold text-yellow-500">Catering</h1>
          <p className="text-xl">
            Welcome to ViaCapriPizzas - Your Premier Destination for Exceptional
            Pizza Delights!
          </p>
        </div>
      </section>
      <div className="h-[61.2vh] flex flex-col justify-center">
        <div className="flex flex-col mx-auto">
          <motion.button
            variants={buttonVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            className="px-10 py-4 text-2xl text-white border-4 border-yellow-300 rounded-lg bg-black/90"
          >
            DROP OFF CATERING
          </motion.button>
          <motion.button
            variants={buttonVariants2}
            initial="initial"
            animate="animate"
            whileHover="hover"
            className="px-10 py-4 mt-4 text-2xl text-white border-4 border-yellow-300 rounded-lg bg-black/90"
          >
            OFFSITE CATERING
          </motion.button>
          <motion.button
            variants={buttonVariants3}
            initial="initial"
            animate="animate"
            whileHover="hover"
            className="px-10 py-4 mt-4 text-2xl text-white border-4 border-yellow-300 rounded-lg bg-black/90"
          >
            ONSITE CATERING
          </motion.button>
          <motion.button
            variants={buttonVariants4}
            initial="initial"
            animate="animate"
            whileHover="hover"
            className="px-10 py-4 mt-4 text-2xl text-white border-4 border-yellow-300 rounded-lg bg-black/90"
          >
            CATERING INQUIRIES
          </motion.button>
        </div>
      </div>
      <FooterPages />
    </>
  );
}

export default CateringPage;
