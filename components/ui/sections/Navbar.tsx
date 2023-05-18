import Image from "next/image";
import Link from "next/link";
import { Briefcase, Album, Building2, Boxes } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navbar() {
  return (
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
          <span className="normal-case">bêta</span>
        </Link>
        <div className="flex space-x-6">
          <ul className="list-none hidden lg:flex space-x-6 items-center">
            <button className="hidden">Produits</button>
            <Link
              className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-black via-blue-600 to-black"
              title="Carrières"
              href="carreer"
            >
              Carrières
            </Link>
            <Link
              className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-black via-blue-600 to-black"
              title="Blog"
              href="blog"
            >
              Blog
            </Link>
            <Link
              className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-black via-blue-600 to-black"
              title="A propos"
              href="about"
            >
              A propos
            </Link>
            <Link
              className="hidden hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-black via-blue-600 to-black"
              title="Tarifs"
              href="pricing"
            >
              Tarifs
            </Link>
          </ul>
          <a
            title="Rejoignez notre canal telegram"
            href="https://t.me/oreonyxHQ"
            target="_blank"
          >
            <div className="mr-2 relative flex items-center space-x-1 px-3 py-0.5 rounded-full bg-gradient-to-tr from-blue-500 via-blue-500 to-blue-300 text-white">
              <span className="text-sm">
                <span className="hidden md:inline">Rejoignez notre </span>{" "}
                Telegram
              </span>
              <i className="ri-telegram-line"></i>
            </div>
          </a>
        </div>
      </div>
      <div className="flex space-x-3 items-center">
        <DropdownMenu>
          <DropdownMenuTrigger className="lg:hidden">
            <i className="ri-menu-line text-2xl"></i>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="font-mono uppercase bg-white">
            <DropdownMenuItem className="flex space-x-2 items-center">
              <span>
                <Boxes className="h-4 w-4 text-gray-600" />
              </span>
              <a href="#features">Produit</a>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="carreer">
                <div className="flex space-x-2 items-center">
                  <span>
                    <Briefcase className="h-4 w-4 text-gray-600" />
                  </span>
                  <span>Carrières</span>
                </div>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="carreer">
                <div className="flex space-x-2 items-center">
                  <span>
                    <Album className="h-4 w-4 text-gray-600" />
                  </span>
                  <span>Blog</span>
                </div>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="carreer">
                <div className="flex space-x-2 items-center">
                  <span>
                    <Building2 className="h-4 w-4 text-gray-600" />
                  </span>
                  <span>A propos</span>
                </div>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <a target="_blank" href="https://tally.so/r/nrBOep" className="">
                <div className="flex space-x-2 items-center text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-pink-500 to-sky-600">
                  <span>Programme bêta</span>
                  <span>
                    <i className="ri-arrow-right-line"></i>
                  </span>
                </div>
              </a>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Link
          href="https://app.oreonyx.live"
          className="hidden lg:hidden bg-black text-white md:bg-transparent md:text-black px-6 py-2 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-black via-blue-600 to-black"
        >
          <span>Connexion</span>
        </Link>
        <Link
          href="https://app.oreonyx.live/register"
          className="hidden hover:bg-black hover:text-white px-6 py-2 border-2 border-gray-900 lg:hidden"
        >
          <span>Inscription</span>
        </Link>
        <a
          target="_blank"
          href="https://tally.so/r/nrBOep"
          className="hidden lg:inline"
        >
          <span className="px-6 py-2 border-2 hover:bg-black hover:text-white border-gray-900 uppercase space-x-2 md:flex">
            <span> Rejoindre le programme bêta </span>
            <i className="hidden md:inline ri-arrow-right-line"></i>
          </span>
        </a>
      </div>
    </div>
  );
}
