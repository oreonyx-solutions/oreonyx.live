import Image from "next/image";
import Link from "next/link";
import {
  Briefcase,
  Album,
  Building2,
  Boxes,
  ArrowRight,
  AlignJustify,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { PiArrowRightBold, PiUserDuotone } from "react-icons/pi"

//components
//import Banner from "@/components/ui/sections/Banner";

type NavbarProps = {
  className?: string;
}

export default function Navbar({ className }: NavbarProps) {
  return (
    <div className={`${ className } bg-primary border-1 lg:border-0 border-b border-black fixed z-10 w-full`}>
      {/**<Banner /> */}
      <div className="font-mono uppercase text-gray-900 py-4 px-4 md:px-6 xl:px-0 w-full flex justify-between md:max-w-6xl 2xl:max-w-7xl mx-auto">
        <div className="space-x-20 flex items-center">
          <Link
            href="/"
            className="h-[30px] w-30 relative space-x-2 flex items-center"
          >
            <Image
              alt="source data"
              src="/oreonyx_default_dark.png"
              width={106}
              height={0}
            />
            <span className="normal-case bg-purple-500/10 rounded-full px-3 py-0.5 text-purple-500">bêta</span>
          </Link>
          <div className="flex space-x-6">
            <ul className="list-none xs:hidden lg:flex space-x-6 items-center">
              <button className="hidden">Produits</button>
              <Link
                className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-black via-blue-600 to-black"
                title="Schools"
                href="/school"
              >
                Schools
              </Link>
              <Link
                className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-black via-blue-600 to-black"
                title="Carrières"
                href="/carreer"
              >
                Carreers
              </Link>
              <Link
                className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-black via-blue-600 to-black"
                title="Blog"
                href="/blog"
              >
                Blog
              </Link>
              <Link
                className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-black via-blue-600 to-black"
                title="A propos"
                href="/about"
              >
                About us
              </Link>
              <Link
                className="hidden hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-black via-blue-600 to-black"
                title="Pricing"
                href="/pricing"
              >
                Pricing
              </Link>
            </ul>
            <a
              title="Rejoignez notre canal telegram"
              href="https://t.me/oreonyxHQ"
              target="_blank"
            >
              <div className="hidden mr-2 relative md:hidden items-center space-x-1 px-3 py-0.5 rounded-full bg-gradient-to-tr from-blue-500 via-blue-500 to-blue-300 text-white">
                <span className="text-sm">
                  <span className="hidden md:inline">Rejoignez notre </span>{" "}
                  Telegram
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                >
                  <path
                    d="M12.001 20C16.4193 20 20.001 16.4183 20.001 12C20.001 7.58172 16.4193 4 12.001 4C7.5827 4 4.00098 7.58172 4.00098 12C4.00098 16.4183 7.5827 20 12.001 20ZM12.001 22C6.47813 22 2.00098 17.5228 2.00098 12C2.00098 6.47715 6.47813 2 12.001 2C17.5238 2 22.001 6.47715 22.001 12C22.001 17.5228 17.5238 22 12.001 22ZM8.89113 13.1708L6.39308 12.3911C5.85317 12.2255 5.84996 11.854 6.51397 11.5871L16.247 7.82754C16.8115 7.59644 17.1325 7.88842 16.9495 8.61641L15.2917 16.4377C15.1763 16.9941 14.8407 17.1266 14.3759 16.8698L11.825 14.9823L10.6361 16.1297C10.5139 16.2476 10.4145 16.3489 10.2273 16.3743C10.04 16.3996 9.88564 16.3442 9.77337 16.0337L8.90378 13.1628L8.89113 13.1708Z"
                    fill="rgba(255,255,255,1)"
                  ></path>
                </svg>
              </div>
            </a>
          </div>
        </div>
        <div className="flex space-x-3 items-center">
          <DropdownMenu>
            <DropdownMenuTrigger className="lg:hidden">
              <AlignJustify className="h-5 w-5" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="font-mono uppercase bg-white">
              <DropdownMenuItem className="space-x-2 items-center">
                <span>
                  <Boxes className="h-4 w-4 text-gray-600" />
                </span>
                <a href="#">Produit</a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="carreer">
                  <div className="flex space-x-2 items-center">
                    <span>
                      <Briefcase className="h-4 w-4 text-gray-600" />
                    </span>
                    <span>Carreers</span>
                  </div>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="blog">
                  <div className="flex space-x-2 items-center">
                    <span>
                      <Album className="h-4 w-4 text-gray-600" />
                    </span>
                    <span>Blog</span>
                  </div>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="about">
                  <div className="flex space-x-2 items-center">
                    <span>
                      <Building2 className="h-4 w-4 text-gray-600" />
                    </span>
                    <span>About us</span>
                  </div>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a
                  target="_blank"
                  href="https://tally.so/r/nrBOep"
                  className="hidden"
                >
                  <div className="flex space-x-2 items-center text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-pink-500 to-sky-600">
                    <span>Beta program</span>
                    <span>
                      <ArrowRight className="h-4 w-4 hidden md:inline" />
                    </span>
                  </div>
                </a>
              </DropdownMenuItem>
              {/*<DropdownMenuItem>
                <div className="relative hidden items-center space-x-1 px-3 py-0.5 rounded-full bg-gradient-to-tr from-blue-500 via-blue-500 to-blue-300 text-white">
                  <span className="text-sm">
                    <span className="hidden md:inline">Rejoignez notre </span>{" "}
                    Telegram
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                  >
                    <path
                      d="M12.001 20C16.4193 20 20.001 16.4183 20.001 12C20.001 7.58172 16.4193 4 12.001 4C7.5827 4 4.00098 7.58172 4.00098 12C4.00098 16.4183 7.5827 20 12.001 20ZM12.001 22C6.47813 22 2.00098 17.5228 2.00098 12C2.00098 6.47715 6.47813 2 12.001 2C17.5238 2 22.001 6.47715 22.001 12C22.001 17.5228 17.5238 22 12.001 22ZM8.89113 13.1708L6.39308 12.3911C5.85317 12.2255 5.84996 11.854 6.51397 11.5871L16.247 7.82754C16.8115 7.59644 17.1325 7.88842 16.9495 8.61641L15.2917 16.4377C15.1763 16.9941 14.8407 17.1266 14.3759 16.8698L11.825 14.9823L10.6361 16.1297C10.5139 16.2476 10.4145 16.3489 10.2273 16.3743C10.04 16.3996 9.88564 16.3442 9.77337 16.0337L8.90378 13.1628L8.89113 13.1708Z"
                      fill="rgba(255,255,255,1)"
                    ></path>
                  </svg>
                </div>
              </DropdownMenuItem>*/}
            </DropdownMenuContent>
          </DropdownMenu>
          <div className="lg:space-x-6 flex">
          <div>
          <Link
                  title="S'inscrire"
                  href="https://app.oreonyx.live/register"
                  className="group flex space-x-1 items-center uppercase rounded-full hover:bg-black hover:text-white px-6 py-2 border-2 border-gray-900"
                >
                  <span>Register</span>
                  <i className="group-hover:transfrom group-hover:translate-x-1 transition-all ri-arrow-right-line"></i>
                </Link>
          </div>
          <div>
          <Link
            title="Se connecter"
            href="https://app.oreonyx.live"
            className="h-11 w-11 rounded-full flex justify-center items-center text-white bg-black"
          >
            <PiUserDuotone className="text-lg" />
          </Link>
          </div>
          </div>
          <a
            target="_blank"
            href="https://tally.so/r/nrBOep"
            className="hidden lg:hidden"
          >
            <button className="px-6 py-2 border-2 hover:bg-black hover:text-white border-gray-900 uppercase space-x-2 flex items-center">
              <span className="md:hidden font-medium"> Beta program</span>
              <span className="hidden md:inline font-medium">
                {" "}
                Join the beta program{" "}
              </span>
              <PiArrowRightBold className="text-lg" />

            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
