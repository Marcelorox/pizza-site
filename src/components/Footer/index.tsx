import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

function FooterPages() {
  return (
    <footer className="bottom-0 w-full py-6 text-white bg-black ">
      <div className="container flex items-center justify-between mx-auto">
        <div>
          <p className="ml-10">
            &copy; {new Date().getFullYear()} Viacappri.
            <br /> All rights reserved.
          </p>
        </div>
        <div>
          <ul className="flex mr-10 space-x-4">
            <li>
              <Link
                to="#"
                className="text-white transition-transform duration-300 transform hover:text-gray-400 hover:scale-110"
              >
                <FaFacebook />
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="text-white transition-transform duration-300 transform hover:text-gray-400 hover:scale-110"
              >
                <FaTwitter />
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="text-white transition-transform duration-300 transform hover:text-gray-400 hover:scale-110"
              >
                <FaInstagram />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
export default FooterPages;
