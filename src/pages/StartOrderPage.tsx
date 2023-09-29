import Header from "../components/Header";
import FooterPages from "../components/Footer";

function OrderPage() {
  return (
    <>
      <Header />
      <img
        src="/Untitlednovo.jpg"
        className="absolute flex object-cover w-full md:h-[90vh]"
        alt=""
      />
      <div className="min-h-screen text-white bg-black">
        <div className="flex flex-col font-serif">
          <div className="flex flex-col justify-end ">
            <div className="flex flex-col items-end ">
              <h1 className="z-10 flex mt-4 mb-6 text-3xl mr-2 md:mr-8 md:text-4xl md:mt-14 font-extrabold justify-center font-title_topic w-[55%]">
                ORDER NOW
              </h1>

              <div className="flex mb-8 min-w-[55%] max-w-[70%] justify-around z-10 md:mr-8">
                <button className="mr-4">
                  <a
                    href="https://www.viacapripizzeria.getsauce.com/"
                    target="_blank"
                    className="px-4 py-2 text-black transition duration-300 bg-yellow-300 rounded-md font-title_topic hover:bg-gray-100 hover:text-black"
                  >
                    DELIVERY
                  </a>
                </button>
                <button>
                  <a
                    href="https://www.viacapripizzeria.getsauce.com/"
                    target="_blank"
                    className="px-4 py-2 text-black transition duration-300 bg-yellow-300 rounded-md font-title_topic hover:bg-gray-100 hover:text-black"
                  >
                    CATERING
                  </a>
                </button>
              </div>
              <img
                src="https://www.viacapripizzas.com/wp-content/uploads/Via-Capri-logo_fonte_branca.png"
                alt="Logo"
                className=" mb-11 max-h-[55%] z-10 w-[55%] md:mt-[10%] mr-2 md:mr-8"
              />
            </div>
          </div>

          <div className="flex flex-col m-4 mt-[25%] text-sm text-center">
            <span>3262 Vineland Rd, Suite 106, Kissimmee - FL 34746</span>
            <a href="tel:+1234567890" title="Phone">
              +1 (689) 276-8012
            </a>
          </div>
          <div className="mb-4 text-center">
            <span>Hours of Operation:</span>
          </div>
          <table className="mx-auto mb-8 border border-collapse border-white">
            <thead>
              <tr>
                <th className="px-4 py-2 border border-white">Day</th>
                <th className="px-4 py-2 border border-white">Hours</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border border-white">Monday</td>
                <td className="px-4 py-2 border border-white">12pm - 9pm</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-white">Tuesday</td>
                <td className="px-4 py-2 border border-white">12pm - 9pm</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-white">Wednesday</td>
                <td className="px-4 py-2 border border-white">12pm - 9pm</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-white">Thursday</td>
                <td className="px-4 py-2 border border-white">12pm - 9pm</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-white">Friday</td>
                <td className="px-4 py-2 border border-white">12pm - 9pm</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-white">Saturday</td>
                <td className="px-4 py-2 border border-white">12pm - 9pm</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-white">Sunday</td>
                <td className="px-4 py-2 border border-white">12pm - 9pm</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <FooterPages />
    </>
  );
}

export default OrderPage;
