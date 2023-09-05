import React, { Fragment } from 'react'
import Navbar from '@/components/ui/sections/Navbar'
import Link from "next/link";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { 
    PiGlobeHemisphereWestDuotone, 
    PiVoicemailDuotone,
    PiMapPinDuotone,
    PiBuildingsDuotone,
    PiPhoneCallDuotone,
    PiEyeDuotone 
} from "react-icons/pi"

import { school as schoolData } from '@/data/school';
import { SchoolTypes } from '@/types/SchoolTypes';
import sanitizeProperties from '@/utils/sanitizeProperties';

export default function page() {

  const sanitizedSchoolData = schoolData.map((school: SchoolTypes) => sanitizeProperties(school));
  
  return (
    <div className='min-h-[100vh]'>
         <Navbar className="shadow"/>
         <div className="flex mx-auto pt-[75px] h-full">
            { schoolData.map((school, index) => {
                return <Fragment key={ index }>
                    <div className='pb-16 md:pl-[4rem] w-8/12 bg-primary space-y-8 pr-48 h-full pt-6'>
                        <div className='space-y-4'>
                            <div className="space-y-3 text-lg">
                                <h2 className="font-bold">A propos</h2>
                                <div className="prose-lg" dangerouslySetInnerHTML={{ __html: school.about }}></div>
                            </div>
                            <div className="flex gap-4">
                                <div className="relative w-8/12 h-32 bg-gray-100 rounded-2xl overflow-hidden">
                                    <Image 
                                    src={"/illustrations/university-1.jpeg"}
                                    alt='school picture'
                                    fill
                                    className='object-cover object-top'
                                    />
                                </div>
                                <div className="group flex justify-center items-center relative w-4/12 h-32 bg-gray-100 rounded-2xl overflow-hidden">
                                    <div className="transition-all invisible group-hover:visible z-20 absolute py-3 px-6 bg-white rounded-2xl justify-center items-center">
                                        <div className="flex justify-center">
                                            <PiEyeDuotone className="text-2xl" />
                                        </div>
                                        <h6 className='text-center'>Galerie</h6>
                                    </div>
                                    <Image 
                                    src={"/illustrations/university-2.jpeg"}
                                    alt='school picture'
                                    fill
                                    className='z-10 object-cover object-top'
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex space-x-6">
                        <Tabs defaultValue="licence" className="w-[400px]">
                            <TabsList>
                                {school.degree.map((deg, index) => {
                                    const value = deg.name.toLowerCase();
                                    const isHidden = !school.degree.some((d) => d.name.toLowerCase() === value);

                                    return (
                                    <TabsTrigger key={index} value={value} className={isHidden ? 'hidden' : ''}>
                                        {deg.name}
                                    </TabsTrigger>
                                    );
                                })}
                            </TabsList>
                            {school.degree.map((deg, index) => (
                            <TabsContent key={index} value={deg.name.toLowerCase()}>
                                <div className="space-y-2">
                                <ul className="list-none">
                                    {deg.path.map((pth, pIndex) => (
                                    <li
                                        key={pIndex}
                                        title={pth.name}
                                        className="cursor-pointer text-lg hover:underline"
                                    >
                                        <Link href={`/school/${school.urlRouting}/${ pth.name.toLowerCase().replace(/ /g, '-')}`}>{pth.name}</Link>
                                    </li>
                                    ))}
                                </ul>
                                </div>
                            </TabsContent>
                            ))}
                        </Tabs>
                        </div>
                    </div>
                    <div className="w-4/12 bg-white h-full pt-6 pl-10 space-y-6">
                        <div className="space-y-2">
                            <div className="h-32 w-32 p-3 border rounded-full">
                                <Image
                                    alt="source data"
                                    src={ school.logo }
                                    width={100}
                                    height={0}
                                />
                            </div>
                            <div className="hidden w-32 justify-center">
                                <span className="py-1 px-4 border rounded-full text-purple-500 bg-purple-500/5">
                                    Pro
                                </span>
                            </div>
                        </div>
                        <div className='space-y-3'>
                        <h6 className="font-bold text-xl">{ school.name }({ school.acronym })</h6>
                        <div>
                            <div className="flex space-x-2 items-center text-gray-700">
                                <PiBuildingsDuotone className='text-xl' />
                                <h6 className="text-lg">{ school.type }</h6>
                            </div> 
                            <div className="flex space-x-2 items-center text-gray-700">
                                <PiMapPinDuotone className='text-xl' />
                                <a target='_blank' href={ school.googleMap } className="text-lg hover:underline">{ school.address }</a>
                            </div> 
                            <div className="flex space-x-2 items-center text-gray-700">
                                <PiVoicemailDuotone className='text-xl' />
                                <a href='mailto:ucao-uuit@ucao.tg' className="hover:underline text-lg">{ school.email }</a>
                            </div> 
                            <div className="flex space-x-2 items-center text-gray-700">
                                <PiGlobeHemisphereWestDuotone className='text-xl' />
                                <a target='_blank' href={`https://${school.website}`}  className="hover:underline text-lg">{ school.website }</a>
                            </div>
                        </div>
                        <div className='space-y-2'>
                                    <div className='flex mt-6 space-x-3'>
                                        <a href={`tel:${ school.phone }`} 
                                        title='commencer une discution'
                                        className="group flex space-x-2 items-center rounded-full uppercase bg-black text-white px-6 py-2 border-2 border-gray-900"
                                        >
                                        <span>Appel direct</span>
                                        <PiPhoneCallDuotone className='text-xl group-hover:transfrom group-hover:translate-x-1 transition-all ri-chat-smile-3-fill' />
                                        </a>
                                        <button
                                            title="Options supplémentaires"
                                            className="rounded-full group flex space-x-1 items-center uppercase hover:border-gray-400 px-4 py-2 border-2 text-gray-400"
                                            >
                                            <i className="ri-more-fill"></i>
                                        </button>
                                    </div>
                                </div>
                        </div>
                    </div>
                </Fragment>
            })}
         </div>
    </div>
  )
}