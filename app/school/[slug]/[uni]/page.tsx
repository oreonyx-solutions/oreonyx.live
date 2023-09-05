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
                                <div className="prose-lg" dangerouslySetInnerHTML={{ __html: school.description }}></div>
                            </div>
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
