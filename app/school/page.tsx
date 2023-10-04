import Navbar from '@/components/ui/sections/Navbar'
import Image from "next/image";
import Link from 'next/link';
import React from 'react';
import { PiBuildingsDuotone, PiMapPinDuotone, PiShareFatDuotone } from "react-icons/pi"

const schoolsBg = {
    backgroundImage: "url('shapes/security-design-grid.svg')",
  };

export default function page() {
  return (
    <div style={schoolsBg} className='bg-primary'>
        <Navbar/>
        <div className='pt-32 py-12 px-4 md:px-6 xl:px-0 w-full md:max-w-6xl 2xl:max-w-7xl mx-auto'>
           <div className="space-y-6">
           <h2 className="text-3xl font-bold">Découvrez les meilleurs écoles au monde</h2>
           <div className="h-12 w-7/12 bg-white border rounded-xl flex pl-6 pr-2 py-2">
                <div className='flex justify-between w-full h-full text-gray-400'>
                    <div className="flex items-center h-full w-full">
                        <div className=" flex items-center justify-center">
                        <i className="ri-search-line text-2xl w-full"></i>
                        </div>
                        <input type="text" className='w-full border-transparent focus:border-transparent focus:ring-0 placeholder:text-gray-400 text-xl border-0 h-full' placeholder="Rechercher..." />
                    </div>
                </div>
           </div>
          <div className="flex justify-between w-7/12">
          <div>
            <h6 className='italic text-sm'>Commencez par écrire: <span className="text-gray-400">&apos;le nom d&apos;une ecole&apos; ou &apos;d&apos;une discipline&apos;</span></h6>
           </div>
          </div>
           </div>
        </div>
        <div className="bg-white">
        <div className="px-4 md:px-6 xl:px-0 w-full md:max-w-6xl 2xl:max-w-7xl mx-auto flex pt-12">
            <div className='w-8/12'>
                <div className="group cursor-pointer">
                    <div className='flex bg-white group-hover:bg-primary py-4 pl-4 pr-6 rounded-xl'>
                        <div className='w-10/12'>
                            <div className="flex space-x-4 items-center">
                            <div className="h-20 w-20 p-3 border rounded-full">
                            <Image
                                alt="source data"
                                src="/logo/ucao-logo.png"
                                width={100}
                                height={0}
                                />
                            </div>
                            <div>
                                <h6 className="text-gray-600 text-lg">UCAO</h6>
                                <h6 className="font-bold line-clamp-1 text-xl">Université Catholique de l&apos;Afrique de l&apos;Ouest</h6>
                                <div className="flex space-x-6">
                                    <div className="flex space-x-2 items-center text-gray-700">
                                        <PiBuildingsDuotone className='text-xl' />
                                        <h6 className="text-lg">Université privée</h6>
                                    </div> 
                                    <div className="flex space-x-2 items-center text-gray-700">
                                        <PiMapPinDuotone className='text-xl' />
                                        <h6 className="text-lg">Zanguera, Lomé-Togo</h6>
                                    </div> 
                                </div>
                                
                            </div>
                            </div>
                        </div>
                        <div className='w-2/12 space-x-8 items-center flex justify-end'>
                            <Link title='Afficher le profil' className='invisible group-hover:visible' href='school/ucao'>
                                <PiShareFatDuotone className='text-2xl' />
                            </Link>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        </div>
    </div>
  )
}
