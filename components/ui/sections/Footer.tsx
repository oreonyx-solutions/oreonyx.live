import Link from "next/link";

//flags
import { CircleFlag } from "react-circle-flags";

export default function Footer() {
  return (
    <div className="px-4 md:pt-12 font-mono">
      <div className="border-b md:max-w-6xl 2xl:max-w-7xl mx-auto h-auto md:flex space-y-6 md:space-y-0 pb-12 sm:pb-12 lg:pb-24">
        <div className="w-full md:w-5/12 space-y-6">
          <div className="">
            <label className="text-4xl lg:text-5xl text-center font-mono font-medium">
              Recevez nos dernières actualités{" "}
            </label>
          </div>
          <div className="w-full md:w-9/12 border rounded-xl pl-3 pr-2 py-1 flex items-center">
            <input
              type="text"
              className="p-0 focus:border-transparent focus:ring-0 focus:outline-0 h-full w-full border-none bg-transparent"
              placeholder="Votre adresse email"
            />
            <button className="bg-gradient-to-tr from-blue-500 via-blue-500 to-blue-300 text-white px-3 py-1 rounded-xl">
              <i className="ri-arrow-right-line"></i>
            </button>
          </div>
          <div className="columns-3 lg:flex space-y-3 lg:space-y-0 lg:space-x-3">
            <div>
              <a
                href="https://www.twitter.com/oreonyxHQ"
                target="_blank"
                className="px-4 py-1 rounded-full bg-[#e9e9e9]"
              >
                Twitter
              </a>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/oreonyxHQ"
                target="_blank"
                className="px-4 py-1 rounded-full bg-[#e9e9e9]"
              >
                Linkedin
              </a>
            </div>
            <div>
              <a
                href="https://www.facebook.com/oreonyxHQ"
                target="_blank"
                className="px-4 py-1 rounded-full bg-[#e9e9e9]"
              >
                Facebook
              </a>
            </div>
            <div>
              <a
                href="https://www.t.me/oreonyxHQ"
                target="_blank"
                className="px-4 py-1 rounded-full bg-[#e9e9e9]"
              >
                Telegram
              </a>
            </div>
          </div>
        </div>
        <div className="w-full md:w-7/12 md:pl-12 space-y-10">
          <div className="columns-2 lg:grid lg:grid-cols-3 md:gap-4 space-y-6 lg:space-y-0">
            <div className="space-y-3">
              <div>
                <h5 className="text-xl font-mono font-medium uppercase">
                  Platforme.
                </h5>
              </div>
              <div>
                <ul className="list-none">
                  <li>
                    <Link
                      className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-black via-blue-600 to-black"
                      href="/"
                    >
                      Analytiques
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-black via-blue-600 to-black"
                      href="/"
                    >
                      Business Intelligence
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-black via-blue-600 to-black"
                      href="/"
                    >
                      Data Visualization
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-black via-blue-600 to-black"
                      href="/"
                    >
                      Data Integration
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-3">
              <div>
                <h5 className="text-xl font-mono font-medium uppercase">
                  Ressources
                </h5>
              </div>
              <div>
                <ul className="list-none">
                  <li>
                    <Link
                      className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-black via-blue-600 to-black"
                      href="/"
                    >
                      Documentation
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-black via-blue-600 to-black"
                      href="/"
                    >
                      Tutoriels
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-black via-blue-600 to-black"
                      href="/"
                    >
                      Blog
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-3">
              <div>
                <h5 className="text-xl font-mono font-medium uppercase">
                  Entreprise
                </h5>
              </div>
              <div>
                <ul className="list-none">
                  <li>
                    <Link
                      className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-black via-blue-600 to-black"
                      href="/"
                    >
                      À propos de nous
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-black via-blue-600 to-black"
                      href="/"
                    >
                      Carrières
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-black via-blue-600 to-black"
                      href="/"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="space-y-4 md:flex md:justify-between md:items-center">
            <div>
              <CircleFlag
                countryCode="FR"
                height="30"
                width="30"
                className="inline-block mr-2"
              />
              <span>Paris, France</span>
            </div>
            <div>
              <span className="text-gray-600">
                © 2023 Oreonyx. Tous droits réservés.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
