//components
import Navbar from "@/components/ui/sections/Navbar";
import Footer from "@/components/ui/sections/Footer";

export default function page() {
  return (
    <div className="bg-primary">
      <Navbar />
      <div className="font-mono mt-24 space-y-12 px-4 md:px-6 xl:px-0 w-full md:max-w-6xl 2xl:max-w-7xl mx-auto">
        <div className="w-full lg:flex space-y-8 lg:space-y-0">
          <div className="w-full lg:w-6/12">
            <h4 className="text-7xl leading-none lg:leading-normal">
              Prenez contact
            </h4>
            <h5 className="text-xl">Nous vous attendions avec impatience.</h5>
          </div>
          <div className="w-full lg:w-6/12">
            <form action="https://app.oreonyx.live">
              <div className="space-y-6">
                {/* Input fields */}
                <button
                  type="submit"
                  className="px-6 py-4 lg:py-2 border-2 bg-black text-white border-gray-900 uppercase w-full"
                >
                  Envoyer
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <hr className="my-12" />
      <Footer />
    </div>
  );
}
