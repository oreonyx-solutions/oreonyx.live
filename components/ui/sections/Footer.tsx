import React, { useState } from "react";

import Link from "next/link";

//flags
import { CircleFlag } from "react-circle-flags";
import { ArrowRight, Globe2 } from "lucide-react";

export default function Footer() {
  return (
    <div className="px-4 md:pt-12 font-mono">
      <div className="border-b md:max-w-6xl 2xl:max-w-7xl mx-auto h-auto md:flex space-y-12 md:space-y-0 pb-12 sm:pb-12 lg:pb-24">
        <div className="w-full md:w-5/12 space-y-6">
          <div className="">
            <label className="text-3xl lg:text-5xl text-center font-mono font-medium">
              Receive our latest news
            </label>
          </div>
          <div className="w-full md:w-9/12 border rounded-xl pl-3 pr-2 py-2 flex items-center">
            <input
              type="text"
              className="p-0 focus:border-transparent focus:ring-0 focus:outline-0 h-full w-full border-none bg-transparent"
              placeholder="Votre adresse email"
            />
            <button className="bg-gradient-to-tr from-blue-500 via-blue-500 to-blue-300 text-white px-3 py-2 rounded-xl">
              <ArrowRight className="h-4 w-4" />
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
            <div className="space-y-3 hidden">
              <div>
                <h5 className="text-lg md:text-xl font-mono font-medium uppercase">
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
                      Planning
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-black via-blue-600 to-black"
                      href="/"
                    >
                      Collaboration
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-black via-blue-600 to-black"
                      href="/"
                    >
                      Gestion de données
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-black via-blue-600 to-black"
                      href="/"
                    >
                      Formations
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-3">
              <div>
                <h5 className="text-lg md:text-xl font-mono font-medium uppercase">
                  RESOURCES.
                </h5>
              </div>
              <div>
                <ul className="list-none">
                  <li>
                    <Link
                      className="hidden hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-black via-blue-600 to-black"
                      href="/"
                    >
                      Centre d&apos;assistance
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hidden hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-black via-blue-600 to-black"
                      href="/"
                    >
                      Plan d&apos;assistance
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-black via-blue-600 to-black"
                      href="/privacy"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-black via-blue-600 to-black"
                      href="/terms"
                    >
                      Terms of use
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-black via-blue-600 to-black"
                      href="/cookies"
                    >
                      Cookie settings
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-black via-blue-600 to-black"
                      href="/changelog"
                    >
                      Changelog
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-black via-blue-600 to-black"
                      href="/security"
                    >
                      Safety and Security
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hidden hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-black via-blue-600 to-black"
                      href="/"
                    >
                      Status
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-3">
              <div>
                <h5 className="text-lg md:text-xl font-mono font-medium uppercase">
                  COMPANY.
                </h5>
              </div>
              <div>
                <ul className="list-none">
                  <li>
                    <Link
                      className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-black via-blue-600 to-black"
                      href="/about"
                    >
                      About us
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-black via-blue-600 to-black"
                      href="/carreer"
                    >
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hidden hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-black via-blue-600 to-black"
                      href="/blog"
                    >
                      Newsroom
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-black via-blue-600 to-black"
                      href="/presskit"
                    >
                      Press kit
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hidden hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-black via-blue-600 to-black"
                      href="/contact"
                    >
                      Devenir partenaire
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hidden hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-black via-blue-600 to-black"
                      href="/contact"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="space-y-3">
              <div>
                <h5 className="text-lg md:text-xl font-mono font-medium uppercase">
                  NEED SPECIFIC HELP?.
                </h5>
              </div>
              <div>
                <ul className="list-none">
                  <li>
                    <a
                      className="hover:underline"
                      href="mailto:support@oreonyx.live"
                    >
                      {" "}
                      support@oreonyx.live
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover:underline"
                      href="mailto:carreers@oreonyx.live"
                    >
                      {" "}
                      carreers@oreonyx.live
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover:underline"
                      href="mailto:press@oreonyx.live"
                    >
                      {" "}
                      press@oreonyx.live
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-3">
              <div>
                <h5 className="text-lg md:text-xl font-mono font-medium uppercase">
                  LOCATIONS.
                </h5>
              </div>
              <div>
                <ul className="list-none">
                  <li>
                    <div className="flex space-x-1">
                      <div title="Togo flag">
                        <CircleFlag className="h-6" countryCode="tg" />
                      </div>
                      <div>
                        : Immeuble LAKISH, Boulevard du 30 Aout, Lomé, TG
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-2 py-12 md:max-w-6xl 2xl:max-w-7xl mx-auto ">
        <h6 className="v">
          * Oreonyx is a trademark or registered trademark of GTEA, Sarl.
        </h6>
        <h6>
          * All trademarks and brand names belong to their respective owners.
          The use of these trademarks and brand names does not represent any
          endorsement or association with Oreonyx.
        </h6>
        <h6>Copyright © 2023 Oreonyx Technologies Ltd. All rights reserved.</h6>
      </div>
    </div>
  );
}
