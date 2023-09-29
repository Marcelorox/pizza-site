// src/components/AboutUs.tsx
import React from "react";
import Header from "../components/Header";
import FooterPages from "../components/Footer";

const AboutUs: React.FC = () => {
  return (
    <>
      <Header />
      <div className="p-8 bg-white">
        <h1 className="mb-4 text-3xl font-semibold">About Us</h1>
        <h1 className="mb-4 text-2xl font-bold">
          Welcome to ViaCapriPizzas - Your Premier Destination for Exceptional
          Pizza Delights!
        </h1>
        <p className="text-gray-700">
          We are thrilled to extend a warm welcome to our new clients, and we're
          excited that you're considering placing your orders with us, whether
          it's through our user-friendly website or in person at our inviting
          pizzerias.
        </p>
        <p className="mt-4">
          At ViaCapriPizzas, we have been serving up delectable pizza creations
          with passion and dedication. Our mission is simple: to provide you
          with the most mouthwatering, handcrafted pizzas that will satisfy your
          cravings and leave you wanting more.
        </p>
        <h2 className="mt-4 text-xl font-bold">Ordering Online:</h2>
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
        <h2 className="mt-4 text-xl font-bold">Ordering In Person:</h2>
        <p className="mt-2">
          For those who prefer a personal touch, visit our welcoming pizzerias
          to experience our delicious pizzas firsthand. Our friendly staff is
          always ready to assist you in choosing the perfect pizza for your
          cravings.
        </p>
        <p className="mt-4">
          We look forward to serving you and becoming your go-to destination for
          the best pizza in town. Whether you prefer the convenience of ordering
          online or the cozy atmosphere of our pizzerias, ViaCapriPizzas is here
          to satisfy your pizza desires. Thank you for choosing us, and we can't
          wait to delight your taste buds with our mouthwatering creations!
        </p>
        <h2 className="mt-10 mb-2 text-xl font-semibold">Our Kitchen</h2>
        <div
          className="bg-center bg-cover h-96"
          style={{ backgroundImage: "url('/pizza.jpeg')" }}
        ></div>
      </div>
      <FooterPages />
    </>
  );
};

export default AboutUs;
