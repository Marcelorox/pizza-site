// src/components/AboutUs.tsx
import React from "react";
import Header from "../components/Header";
import FooterPages from "../components/Footer";

const AboutUs: React.FC = () => {
  return (
    <div className="relative">
      <Header />
      <section className="py-16 text-white border-b-4 border-yellow-500 bg-black/90">
        <div className="container mx-auto text-center">
          <h1 className="mb-4 text-5xl font-bold text-yellow-500">About Us</h1>
          <p className="text-xl">
            Welcome to Via Capri - Your Premier Destination for Exceptional
            Pizza Delights!
          </p>
        </div>
      </section>
      <div className="p-8 bg-white">
        <p className="text-gray-700">
          We are thrilled to extend a warm welcome to our new clients, and we're
          excited that you're considering placing your orders with us, whether
          it's through our user-friendly website or in person at our inviting
          pizzeria.
        </p>
        <p className="mt-4">
          At Via Capri, we have been serving up delectable pizza creations with
          passion and dedication. Our mission is simple: to provide you with the
          most mouthwatering, handcrafted pizzas that will satisfy your cravings
          and leave you wanting more.
        </p>
        <h2 className="mt-4 text-xl font-bold text-yellow-500">
          Ordering Online:
        </h2>
        <ul className="mt-2 ml-6 list-disc">
          <li>
            <strong>Convenience:</strong> Order from the comfort of your home or
            office, 24/7, without the need to wait in long lines.
          </li>
          <li>
            <strong>Pizza Variety:</strong> Explore our extensive pizza menu,
            complete with tantalizing descriptions and pricing details for each
            pizza masterpiece.
          </li>
          <li>
            <strong>Secure Transactions:</strong> Rest assured that your online
            orders and payments are handled with the utmost security. We use the
            latest encryption technology to protect your information.
          </li>
          <li>
            <strong>Efficiency:</strong> Save time with our streamlined online
            ordering process. Customize your pizza, choose your toppings, and
            select your preferred delivery or pickup options with just a few
            clicks.
          </li>
        </ul>
        <h2 className="mt-4 text-xl font-bold text-yellow-500">
          Ordering In Person:
        </h2>
        <p className="mt-2">
          For those who prefer a personal touch, visit our welcoming pizzeria to
          experience our delicious pizzas firsthand. Our friendly staff is
          always ready to assist you in choosing the perfect pizza for your
          cravings.
        </p>
        <p className="mt-4">
          We look forward to serving you and becoming your go-to destination for
          the best pizza in town. Whether you prefer the convenience of ordering
          online or the cozy atmosphere of our pizzeria, Via Capri is here to
          satisfy your taste desires. Thank you for choosing us! We can't wait
          to delight your taste buds with our mouthwatering creations!
        </p>
      </div>

      <FooterPages />
    </div>
  );
};

export default AboutUs;
