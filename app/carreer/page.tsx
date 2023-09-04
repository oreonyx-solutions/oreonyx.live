"use client";

import React, { useState } from "react";

//components
import Navbar from "@/components/ui/sections/Navbar";
import Footer from "@/components/ui/sections/Footer";

import Image from "next/image";

import { ArrowRight, MailCheck } from "lucide-react";

export default function Page() {
  return (
    <div className="bg-primary">
      <Navbar />
      <div className="font-mono lg:pt-32 lg:pb-32 pt-32 pb-24 space-y-12 px-4 md:px-6 xl:px-0 w-full md:max-w-6xl 2xl:max-w-7xl mx-auto">
        <div className="space-y-10">
          <h1 className="text-2xl md:hidden">
            <span className="text-green-500 font-bold">Building </span>an
            innovative platform for the evolution of thoughts and ideas
          </h1>
          <div className="prose prose-base lg:prose-lg">
            <h1 className="hidden md:block">
              <span className="text-green-500 font-bold">Building </span>an
              innovative platform for the evolution of thoughts and ideas
            </h1>
            <div>
              <h5>
                At Oreonyx, our goal is to revolutionize the higher education
                ecosystem by providing a next generation integrated management
                platform.
              </h5>
              <p>
                We believe that current solutions are outdated and that it is
                time to completely rethink the way higher education institutions
                manage their administrative and pedagogical processes.
              </p>
              <p>
                To do this, we provide an innovative solution that improves the
                student experience and facilitates administrative management. We
                offer collaboration and distance learning tools to meet the
                needs of modern higher education institutions.
              </p>
              <blockquote>
                Our mission is to simplify higher education administration with
                innovative tools for a better student experience.
              </blockquote>
              <p>
                We are committed to building a company that reflects the teams,
                communities and world we are building for. We are always looking
                to ensure that everyone at Oreonyx is seen, heard, valued and
                empowered to do their best work.
              </p>
              <figure>
                <Image
                  alt="source data"
                  src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
                />
                <figcaption>
                  We&apos;re looking for the best engineering, design, marketing
                  and sales talent to join our mission to revolutionize the
                  higher education ecosystem. Come join us on this journey!
                </figcaption>
              </figure>
            </div>
          </div>
          <hr className="my-12 lg:my-32" />
          <div className="space-y-6">
            <h4 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
              Open positions
            </h4>
            <div className="w-full lg:flex lg:space-x-3 space-y-10 lg:space-y-0">
              <div className="space-y-6 w-full md:w-9/12 lg:w-7/12 lg:pr-16">
                <div className="space-y-3">
                  <h5 className="text-green-500 text-lg">Design</h5>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-8/12">
                        <h6 className="text-base md:text-lg font-medium">
                          Head of Design
                        </h6>
                      </div>
                      <div>
                        <a
                          target="_blank"
                          href="https://docs.google.com/document/d/1okdmNQSgIT7FKWkxFLFXJIwOGdHlgcG8W9vloaU1vog/edit?usp=share_link"
                          className="text-base md:text-lg space-x-2 flex items-center font-medium"
                        >
                          {" "}
                          <span>
                            &apos;{" "}
                            <span className="hidden md:inline">
                              the position
                            </span>
                          </span>
                          <ArrowRight className="h-4 w-4 hidden md:inline" />
                        </a>
                      </div>
                    </div>
                    <div className="hidden items-center justify-between">
                      <div className="w-8/12">
                        <h6 className="text-base md:text-lg font-medium">
                          Product Designer
                        </h6>
                      </div>
                      <div>
                        <a
                          target="_blank"
                          href="#"
                          className="text-base md:text-lg space-x-2 flex items-center font-medium"
                        >
                          {" "}
                          <span>
                            See{" "}
                            <span className="hidden md:inline">
                              the position
                            </span>
                          </span>
                          <ArrowRight className="h-4 w-4 hidden md:inline" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <h5 className="text-green-500 text-lg">Engineering</h5>
                  <div className="space-y-3">
                    <div className="hidden items-center justify-between">
                      <div className="w-8/12">
                        <h6 className="text-base md:text-lg font-medium">
                          Senior Frontend Engineer
                        </h6>
                      </div>
                      <div>
                        <a
                          target="_blank"
                          href="#"
                          className="text-base md:text-lg space-x-2 flex items-center font-medium"
                        >
                          {" "}
                          <span>
                            See{" "}
                            <span className="hidden md:inline">
                              the position
                            </span>
                          </span>
                          <ArrowRight className="h-4 w-4 hidden md:inline" />
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="w-8/12">
                        <h6 className="text-base md:text-lg font-medium">
                          Junior Backend Engineer
                        </h6>
                      </div>
                      <div>
                        <a
                          target="_blank"
                          href="https://docs.google.com/document/d/1jlYnFSHuLGZ8R_S__MbmK3FriGeWk8f6FVl9oop6hSg/edit?usp=share_link"
                          className="text-base md:text-lg space-x-2 flex items-center font-medium"
                        >
                          {" "}
                          <span>
                            See{" "}
                            <span className="hidden md:inline">
                              the position
                            </span>
                          </span>
                          <ArrowRight className="h-4 w-4 hidden md:inline" />
                        </a>
                      </div>
                    </div>
                    <div className="hidden items-center justify-between">
                      <div className="w-8/12">
                        <h6 className="text-base md:text-lg font-medium">
                          Senior - Staff Infrastructure Engineer
                        </h6>
                      </div>
                      <div>
                        <a
                          target="_blank"
                          href="#"
                          className="text-base md:text-lg space-x-2 flex items-center font-medium"
                        >
                          {" "}
                          <span>
                            See{" "}
                            <span className="hidden md:inline">
                              the position
                            </span>
                          </span>
                          <ArrowRight className="h-4 w-4 hidden md:inline" />
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="w-8/12">
                        <h6 className="text-base md:text-lg font-medium">
                          Senior - Staff Mobile Engineer (Hybrid)
                        </h6>
                      </div>
                      <div>
                        <a
                          target="_blank"
                          href="https://docs.google.com/document/d/13QXhXWmMEsO5au979JGn4HbcWD600uvN94oMaX96x7o/edit?usp=share_link"
                          className="text-base md:text-lg space-x-2 flex items-center font-medium"
                        >
                          {" "}
                          <span>
                            See{" "}
                            <span className="hidden md:inline">
                              the position
                            </span>
                          </span>
                          <ArrowRight className="h-4 w-4 hidden md:inline" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <h5 className="text-green-500 text-lg">Marketing</h5>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-8/12">
                        <h6 className="text-base md:text-lg font-medium">
                          Head of Social Media Management
                        </h6>
                      </div>
                      <div>
                        <a
                          target="_blank"
                          href="https://docs.google.com/document/d/1HUl3LOx8SQSkJY2CoHYfeXL0x0f7zsM9_Cz9CobyLWE/edit?usp=share_link"
                          className="text-base md:text-lg space-x-2 flex items-center font-medium"
                        >
                          {" "}
                          <span>
                            See{" "}
                            <span className="hidden md:inline">
                              the position
                            </span>
                          </span>
                          <ArrowRight className="h-4 w-4 hidden md:inline" />
                        </a>
                      </div>
                    </div>
                    <div className="hidden items-center justify-between">
                      <div className="w-8/12">
                        <h6 className="text-base md:text-lg font-medium">
                          Senior - Product Support Specialist
                        </h6>
                      </div>
                      <div>
                        <a
                          target="_blank"
                          href="#"
                          className="text-base md:text-lg space-x-2 flex items-center font-medium"
                        >
                          {" "}
                          <span>
                            See{" "}
                            <span className="hidden md:inline">
                              the position
                            </span>
                          </span>
                          <ArrowRight className="h-4 w-4 hidden md:inline" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <h5 className="text-green-500 text-lg">Finance</h5>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-8/12">
                        <h6 className="text-base md:text-lg font-medium">
                          Head of Finance
                        </h6>
                      </div>
                      <div>
                        <a
                          target="_blank"
                          href="https://docs.google.com/document/d/1Khl5lklm_2cFXr7sFtu0lgXQUJ2OUpwqZ_lwA605lOY/edit?usp=share_link"
                          className="text-base md:text-lg space-x-2 flex items-center font-medium"
                        >
                          {" "}
                          <span>
                            See{" "}
                            <span className="hidden md:inline">
                              the position
                            </span>
                          </span>
                          <ArrowRight className="h-4 w-4 hidden md:inline" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <h5 className="text-green-500 text-lg">Data</h5>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-8/12">
                        <h6 className="text-base md:text-lg font-medium">
                          Head of Data and Aquisition
                        </h6>
                      </div>
                      <div>
                        <a
                          target="_blank"
                          href="https://docs.google.com/document/d/1ErPChHE2BlLiaa_0bGFGRJkMEaL8Rhdj0mCoGaQiIlI/edit?usp=share_link"
                          className="text-base md:text-lg space-x-2 flex items-center font-medium"
                        >
                          {" "}
                          <span>
                            See{" "}
                            <span className="hidden md:inline">
                              the position
                            </span>
                          </span>
                          <ArrowRight className="h-4 w-4 hidden md:inline" />
                        </a>
                      </div>
                    </div>
                    <div className="hidden items-center justify-between">
                      <div className="w-8/12">
                        <h6 className="text-base md:text-lg font-medium">
                          Junior Data Scientist
                        </h6>
                      </div>
                      <div>
                        <a
                          target="_blank"
                          href="https://docs.google.com/document/d/1jlYnFSHuLGZ8R_S__MbmK3FriGeWk8f6FVl9oop6hSg/edit?usp=share_link"
                          className="text-base md:text-lg space-x-2 flex items-center font-medium"
                        >
                          {" "}
                          <span>
                            See{" "}
                            <span className="hidden md:inline">
                              the position
                            </span>
                          </span>
                          <ArrowRight className="h-4 w-4 hidden md:inline" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <h5 className="text-green-500 text-lg">Legal</h5>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-8/12">
                        <h6 className="text-base md:text-lg font-medium">
                          Head of Legal Affairs
                        </h6>
                      </div>
                      <div>
                        <a
                          target="_blank"
                          href="https://docs.google.com/document/d/1VKwA9QJXOoFJT5dcutTyalBy0RiAoaP1AL226ddN5Q0/edit?usp=share_link"
                          className="text-base md:text-lg space-x-2 flex items-center font-medium"
                        >
                          {" "}
                          <span>
                            See{" "}
                            <span className="hidden md:inline">
                              the position
                            </span>
                          </span>
                          <ArrowRight className="h-4 w-4 hidden md:inline" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-5/12 space-y-6">
                <div className="w-full md:w-8/12 lg:w-full space-y-3 rounded-xl p-6 bg-gradient-to-tr from-black via-black to-green-300 text-white">
                  <h5 className="text-lg font-medium">Avantages & Bénéfices</h5>
                  <div className="pl-3">
                    <ul className="list-decimal">
                      <li>Work-life balance.</li>
                      <li>Competitive salary & equity.</li>
                      <li>
                        Favourable participation conditions for employees (early
                        and extended exercise in Togo).
                      </li>
                      <li>
                        Remote work, no obligation to travel to the office.
                      </li>
                      <li>Health, dental and vision insurance (Togo).</li>
                      <li>5 weeks paid vacation, parental leave.</li>
                      <li>Mackbook Pro M2, 5K monitor and accessories.</li>
                      <li>Paid lunch and coffee on work days.</li>
                      <li>Regular team and off-site events.</li>
                      <li>English classes offered.</li>
                      <li>Quarterly hack weeks.</li>
                    </ul>
                  </div>
                </div>
                <div className="w-full md:w-6/12 lg:w-full space-y-6">
                  <h4 className="text-xl md:text-2xl font-medium">
                    You want to contact us for a specific job? an internship or
                    just to chat over a good coffee?
                  </h4>
                  <div className="flex w-full ">
                    <a
                      href="mailto:carreers@oreonyx.live"
                      className="px-6 py-3 border-2 hover:bg-black hover:text-white border-gray-900 uppercase flex space-x-2 items-center"
                    >
                      <span className="font-medium">SEND US AN EMAIL</span>
                      <MailCheck className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-12" />
      <Footer />
    </div>
  );
}
