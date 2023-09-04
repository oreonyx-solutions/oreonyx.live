"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/ui/sections/Navbar";
import Footer from "@/components/ui/sections/Footer";
import CTA from "@/components/ui/sections/CTA";

import { MailCheck } from "lucide-react";

export default function Page() {
  return (
    <div className="bg-primary">
      <Navbar />
      <div className="lg:pt-32 lg:pb-32 pt-32 pb-24 font-mono px-4 md:px-6 xl:px-0 w-full md:max-w-6xl 2xl:max-w-7xl mx-auto">
        <div className="space-y-32">
          <div className="space-y-10">
            <div className="space-y-6">
              <div className="flex justify-center">
                <div className="w-full lg:w-10/12">
                  <h4 className="text-2xl md:text-5xl lg:text-7xl font-medium md:text-center">
                    Breaking down the barriers to access to quality education
                  </h4>
                </div>
              </div>
              <div className="flex justify-center">
                <h6 className="text-gray-500 text-lg md:text-center">
                  Educational technologies represent the best chance to
                  fundamentally reinvent the global education system so that it
                  can benefit everyone, including the millions who lack access
                  to quality education.
                </h6>
              </div>
              <div className="flex justify-center">
                <h6 className="text-gray-500 lg:text-lg md:text-center">
                  The economic and social benefits of providing access to
                  quality education for all are considerable. In addition to
                  ensuring a better quality of life for individuals, quality
                  education is essential to improving the employability of young
                  people. That&apos;s why we are working to develop a stack of
                  educational technologies as a service, which any institution
                  can use to provide its students with equitable and quality
                  educational opportunities based on the latest technological
                  innovations. In this way, we are helping to train a new
                  generation of competent and skilled workers, ready to meet the
                  challenges of the job market and contribute to economic
                  growth.
                </h6>
              </div>
              <div className="flex md:justify-center pt-6">
                <Link
                  href="https://app.oreonyx.live"
                  className="px-6 py-2 border-2 hover:bg-black hover:text-white border-gray-900 uppercase space-x-2 flex items-center"
                >
                  <span className="font-medium">CONTACT US</span>
                  <MailCheck className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
          <div className="space-y-10">
            <div className="space-y-3">
              <h6 className="text-base text-green-500">Our Team</h6>
              <h2 className="text-3xl lg:text-5xl">
                A growing team of product, technology and educational services
                professionals.
              </h2>
            </div>
            <div className="w-full flex">
              <div className="hidden lg:inline w-3/12"></div>
              <div className="w-full lg:w-9/12 grid grid-cols-1 md:grid-cols-3 gap-5 font-sans">
                <div className="space-y-3">
                  <div className="rounded-xl bg-secondary h-52 md:h-40 lg:h-60 relative">
                    <Image
                      alt="source data"
                      src="/team/Benoit.jpg"
                      layout="fill"
                      objectFit="cover"
                      className="lg:lg:grayscale hover:grayscale-0 transition-all rounded-xl object-top"
                    />
                  </div>
                  <div className="-space-y-1">
                    <h5 className="font-bold text-lg">Segbaya K. Benoit</h5>
                    <h5 className="text-base">Co-founder, CEO</h5>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="rounded-xl bg-secondary h-52 md:h-40 lg:h-60 relative">
                    <Image
                      alt="source data"
                      src="/team/Amelie.jpg"
                      layout="fill"
                      objectFit="cover"
                      className="lg:grayscale hover:grayscale-0 transition-all rounded-xl object-top"
                    />
                  </div>
                  <div className="-space-y-1">
                    <h5 className="font-bold text-lg">Keleou Amelie</h5>
                    <h5 className="text-base">Co-founder, COO</h5>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="rounded-xl bg-secondary h-52 md:h-40 lg:h-60 relative">
                    <Image
                      alt="source data"
                      src="/team/Ayen.jpg"
                      layout="fill"
                      objectFit="cover"
                      className="lg:grayscale hover:grayscale-0 transition-all rounded-xl object-top"
                    />
                  </div>
                  <div className="-space-y-1">
                    <h5 className="font-bold text-lg">Bonsoa Ayén</h5>
                    <h5 className="text-base">Co-founder, CTO</h5>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="rounded-xl bg-secondary h-52 md:h-40 lg:h-60 relative">
                    <Image
                      alt="source data"
                      src="/team/Arouna.jpg"
                      layout="fill"
                      objectFit="cover"
                      className="lg:grayscale hover:grayscale-0 transition-all rounded-xl object-top"
                    />
                  </div>
                  <div className="-space-y-1">
                    <h5 className="font-bold text-lg">Amadou Arouna</h5>
                    <h5 className="text-base">Backend Developper</h5>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="rounded-xl bg-secondary h-52 md:h-40 lg:h-60 relative">
                    <Image
                      alt="source data"
                      src="/team/Henok.jpg"
                      layout="fill"
                      objectFit="cover"
                      className="lg:grayscale hover:grayscale-0 transition-all rounded-xl object-top"
                    />
                  </div>
                  <div className="-space-y-1">
                    <h5 className="font-bold text-lg">Bonsoa Mabagou</h5>
                    <h5 className="text-base">Designer</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:px-6">
        <CTA />
      </div>
      <Footer />
    </div>
  );
}
