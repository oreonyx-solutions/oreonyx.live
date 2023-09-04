import React from 'react'
import Navbar from '@/components/ui/sections/Navbar'
import Link from "next/link";
import Image from "next/image";
import { HiOutlineMapPin, HiOutlineBuildingLibrary } from "react-icons/hi2"
import { MdOutlineMail } from "react-icons/md"
import { 
    PiGlobeHemisphereWestDuotone, 
    PiVoicemailDuotone,
    PiMapPinDuotone,
    PiBuildingsDuotone,
    PiPhoneCallDuotone,
    PiEyeDuotone 
} from "react-icons/pi"

const filieres = [
    { name: "Energies renouvelables et développement durable" },
    { name: "Sciences économiques et de gestion" },
    { name: "Réseaux et Télécommunications" },
]

export default function page() {
  return (
    <div className='min-h-[100vh]'>
         <Navbar className="shadow"/>
         <div className="flex mx-auto pt-[75px] h-full">
            <div className='pb-16 md:pl-[4rem] w-8/12 bg-primary space-y-8 pr-48 h-full pt-6'>
                <div className='space-y-4'>
                    <div className="space-y-3 text-lg">
                        <h2 className="font-bold">A propos</h2>
                        <p>L'UCAO-UUT est une institution d'enseignement supérieur située au Togo. Elle fait partie du réseau de l'Université Catholique de l'Afrique de l'Ouest (UCAO), qui regroupe plusieurs universités catholiques dans la région de l'Afrique de l'Ouest.</p>
                        <p>L'UCAO-UUT offre une variété de programmes académiques dans divers domaines, notamment les sciences sociales, les sciences humaines, les sciences de la santé, les sciences économiques et de gestion, le droit, les sciences de l'ingénieur, etc. L'université vise à fournir une éducation de qualité et à promouvoir les valeurs chrétiennes dans son enseignement et sa mission éducative.</p>
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
                <hr className="mt-14" />
                <div className="flex space-x-6">
                    <button className="px-6 py-1 bg-teal-500 text-white rounded-full">Licence</button>
                    <button className="px-6 py-1 hover:bg-gray-100 rounded-full">Master</button>
                    <button className="px-6 py-1 hover:bg-gray-100 rounded-full">Doctorat</button>
                </div>
                <div className='space-y-4'>
                    <div className='space-y-6'>
                        <div className='space-y-3'>
                            <div className="space-y-2">
                                <h2 className="text-lg font-bold">Filières proposés</h2>
                                <ul className="list-none">
                                    { filieres.map((filiere, index) => {
                                        return  <li key={index} title={ filiere.name } className='cursor-pointer text-lg hover:underline'>{ filiere.name }</li>
                                    }) }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-4/12 bg-white h-full pt-6 pl-10 space-y-6">
                <div className="space-y-2">
                    <div className="h-32 w-32 p-3 border rounded-full">
                        <Image
                            alt="source data"
                            src="/logo/ucao-logo.png"
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
                <h6 className="font-bold text-xl">Université Catholique de l&apos;Afrique de l&apos;Ouest - Unité Universitaire du Togo(UCAO-UUT)</h6>
                <div>
                    <div className="flex space-x-2 items-center text-gray-700">
                        <PiBuildingsDuotone className='text-xl' />
                        <h6 className="text-lg">Université privée</h6>
                    </div> 
                    <div className="flex space-x-2 items-center text-gray-700">
                        <PiMapPinDuotone className='text-xl' />
                        <h6 className="text-lg">Zanguera, Lomé-Togo</h6>
                    </div> 
                    <div className="flex space-x-2 items-center text-gray-700">
                        <PiVoicemailDuotone className='text-xl' />
                        <a href='mailto:ucao-uuit@ucao.tg' className="hover:underline text-lg">ucao-uuit@ucao.tg</a>
                    </div> 
                    <div className="flex space-x-2 items-center text-gray-700">
                        <PiGlobeHemisphereWestDuotone className='text-xl' />
                        <a target='_blank' href='www.ucao-uuit.com'  className="hover:underline text-lg">www.ucao-uuit.com</a>
                    </div>
                </div>
                <div className='space-y-2'>
                            <div className='flex mt-6 space-x-3'>
                                <a href='tel:+222890318830'
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
         </div>
    </div>
  )
}