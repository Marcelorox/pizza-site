import FooterPages from "../components/Footer";
import EventForm from "../components/Form";
import Header from "../components/Header";

export default function FormPage() {
  return (
    <>
      <div className="relative flex">
        <Header />
        <section className="py-8 text-white border-b-4 border-yellow-500 bg-black/90">
          <div className="container mx-auto text-center">
            <h1 className="mb-4 text-5xl font-bold text-yellow-500">
              Catering
            </h1>
            <p className="text-xl">
              Welcome to ViaCapriPizzas - Catering inquiries
            </p>
          </div>
        </section>
        <div className="flex justify-center">
          <div className="w-[95%] md:w-[60%] lg:w-[50%]">
            <EventForm />
          </div>
        </div>
        <div className="mt-[10%]">
          <FooterPages />
        </div>
      </div>
    </>
  );
}
