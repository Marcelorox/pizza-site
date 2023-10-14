import { useState, useEffect } from "react";

interface ModalComponent {
  children?: React.ReactNode;
}

const Modal = ({ children }: ModalComponent) => {
  const [isOpen, setOpen] = useState(true);

  const closeModal = () => {
    setOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        closeModal();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="absolute z-50 flex justify-center w-screen h-screen md:items-center bg-black/70"
      onClick={closeModal}
    >
      <div className="relative w-full md:w-[50%] mt-24 p-8">
        <img src="./popup.png" alt="image-popup" />
        <button
          className="absolute font-serif text-white transition duration-300 sm:text-xl md:text-3xl left-12 top-10 hover:text-yellow-500 hover:scale-110"
          onClick={closeModal}
        >
          X
        </button>
        <div className="">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
