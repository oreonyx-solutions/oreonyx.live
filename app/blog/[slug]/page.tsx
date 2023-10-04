import React from 'react'
import Image from "next/image";
import Link from "next/link";
import Navbar from '@/components/ui/sections/Navbar'
import { 
    PiBookmarkDuotone,
    PiDotsThreeOutlineDuotone
  } from "react-icons/pi"


export default function Article() {
  return (
    <div>
        <Navbar/>
        <div className="lg:pt-32 lg:pb-32 pt-32 pb-24 px-4 md:px-6 xl:px-0 w-full md:max-w-6xl 2xl:max-w-7xl mx-auto">
            <div>
                <div className="h-[30rem] w-full bg-primary relative rounded-xl overflow-hidden drop-shadow-xl">
                    <Image
                      alt="source data"
                      src="/illustrations/oreonyx_desktop.jpeg"
                      layout="fill"
                      objectFit="cover"
                    />
                </div>
               <div className="w-full">
                    <div className="w-full flex justify-between mt-12">
                        <div className="w-8/12 space-y-4">
                            <div className="text-lg flex space-x-1 font-mono text-gray-600">
                                <Link className="hover:underline" href="/blog">Blog</Link>
                                <span>></span>
                                <span>People spend night on roofs and in trees after Ukraine dam breach</span>
                            </div>
                            <h1 className="text-4xl font-bold">People spend night on roofs and in trees after Ukraine dam breach</h1>
                            <div className="flex items-center space-x-3">
                            <div className="h-8 w-8 bg-gray-200 rounded-full overflow-hidden relative">
                            <Image
                                alt="source data"
                                src="/illustrations/oreonyx_desktop.jpeg"
                                layout="fill"
                                objectFit="cover"
                                className="absolute"
                            />
                            </div>
                            <span className="text-gray-600 text-base space-x-8">
                                <span><span className="font-bold">BBC News</span> ✦ 10 mins ago • Sun April 7, 2023</span>
                                <span className="hidden"><span className="text-green-500">World</span> • 5 min read</span>
                            </span>
                        </div>
                        </div>
                        <div className="mt-12 space-y-10">
                           <div className="justify-end flex">
                                <button title="Ajouter au favoris" className="transition-all hover:bg-gray-100 rounded-xl py-3 px-3">
                                    <PiBookmarkDuotone className='text-2xl' />
                                </button>
                                <button title="Options supplementaires" className="transition-all hover:bg-gray-100 rounded-xl py-3 px-3">
                                    <PiDotsThreeOutlineDuotone className='text-2xl' />
                                </button>
                           </div>
                           <div className="flex space-x-2 items-center">
                                <div>
                                    <span>Share on:</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                <a target="_blank" href="https://www.facebook.com" title="Partager sur Facebook">
                                    <Image
                                        alt="facebook"
                                        src="/svg/facebook.svg"
                                        height="36"
                                        width="36"
                                    />
                                </a>
                                <a target="_blank" href="https://www.twitter.com" title="Partager sur X">
                                    <Image
                                        alt="twitter"
                                        src="/svg/twitter.svg"
                                        height="36"
                                        width="36"
                                    />
                                </a>
                                <a target="_blank" href="https://www.linkedin.com" title="Partager sur Linkedin">
                                    <Image
                                        alt="linkedin"
                                        src="/svg/linkedin.svg"
                                        height="36"
                                        width="36"
                                    />
                                </a>
                           </div>
                           </div>
                        </div>
                    </div>
                    <div className="w-8/12">
                      <div className="pt-8">
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
                            </div>
                            </div>
                        </div>
                      </div>
                    <div className="w-8/12">

                    </div>
               </div>
            </div>
        </div>
    </div>
  )
}
