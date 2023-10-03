import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

function FooterPages() {
  return (
    <footer className="flex justify-between w-full py-6 text-white bg-black ">
      <div className="flex">
        <p className="ml-10 text-xs">
          &copy; {new Date().getFullYear()} Viacappri. All rights reserved.
        </p>
      </div>
      <div>
        <ul className="flex mr-10 space-x-4">
          <li>
            <Link
              to="https://www.facebook.com/viacapripizzas/?locale=us"
              className="text-white transition-transform duration-300 transform hover:text-gray-400 hover:scale-110"
            >
              <FaFacebook />
            </Link>
          </li>
          <li>
            <Link
              to="https://www.instagram.com/viacapripizzas/?hl=us"
              className="text-white transition-transform duration-300 transform hover:text-gray-400 hover:scale-110"
            >
              <FaInstagram />
            </Link>
          </li>
          <li>
            <Link
              to="https://twitter.com/viacapri"
              className="text-white transition-transform duration-300 transform hover:text-gray-400 hover:scale-110"
            >
              <FaTwitter />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
export default FooterPages;
