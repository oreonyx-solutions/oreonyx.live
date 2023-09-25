"use client";

import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import CTA from "@/components/ui/sections/CTA";
import Footer from "@/components/ui/sections/Footer";
import Navbar from '@/components/ui/sections/Navbar'
import Image from "next/image";

import { 
    PiGlobeHemisphereWestDuotone,
    PiShareFatDuotone,
    PiBuildingsDuotone,
    PiUsersThreeDuotone,
    PiStudentDuotone,
    PiRocketDuotone,
    PiTrophyDuotone,
    PiMedalMilitaryDuotone,
    PiCoinsDuotone
} from "react-icons/pi"

const schoolsBg = {
    backgroundImage: "url('shapes/security-design-grid.svg')"
};

const DataBg = {
    backgroundImage: "url('shapes/security-hero-bg.webp')",
    backgroundSize: "contain"
}

export default function Climate() {
  return (
    <div>
        <Navbar/>
        <section className="h-auto">
            <div className="w-full">
                <div className="pt-36 pb-24 md:max-w-6xl 2xl:max-w-7xl mx-auto space-y space-y-12">
                    <div className="w-full flex space-x-12 ">
                        <div className="w-6/12">
                        <div className="space-y-4">
                            <h2 className="text-2xl leading-4 text-green-500">
                                Observation
                            </h2>
                            <h3 className="text-lg">
                                Environmental challenges, such as climate change and pollution, particularly affect developing countries, including in Africa.
                                University campuses face issues such as waste management, energy and resource consumption, and greenhouse gas emissions. Various programs are being put in place, however universities are lagging behind in reducing their ecological footprint and promoting environmental sustainability.
                            </h3>
                        </div>
                        </div>
                        <div className="w-6/12">
                            <div className="h-full w-full rounded-full bg-gray-200 overflow-hidden relative">
                            <Image
                                alt="source data"
                                src="/illustrations/flooding-af.jpeg"
                                layout="fill"
                                objectFit="cover"
                                className="object-center"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex space-x-12">
                        <div className="w-6/12">
                            <div className="h-full w-full rounded-full bg-gray-200 overflow-hidden relative">
                            <Image
                                alt="source data"
                                src="/illustrations/proposition.jpeg"
                                layout="fill"
                                objectFit="cover"
                                className="object-center"
                                />
                            </div>
                        </div>
                        <div className="w-6/12">
                            <div className="space-y-4">
                                    <h2 className="text-2xl leading-4 text-green-500">
                                        Value Proposition
                                    </h2>
                                   <div>
                                   <p className="text-lg">
                                        Oreonyx Climate. Digital for eco-university responsability
                                    </p>
                                    <p className="text-lg">
                                    We offers customized solutions to help universities reduce their environmental impact and promote environmental sustainability through our university campus management platform.
                                    </p>
                                   </div>
                            </div>
                            <a
                                href="https://app.oreonyx.live/register"
                                className="hidden group flex space-x-1 items-center rounded-full uppercase hover:bg-black hover:text-white px-6 py-2 border-2 border-gray-900"
                                >
                                <span>Logical Context</span>
                                <PiShareFatDuotone className='text-4xl' />
                            </a>
                            <div className="mt-6 md:flex items-center space-y-6 md:space-y-0 md:space-x-6 text-gray-900 font-mono">
              <div className="space-y-2">
                <h3 className="text-lg text-gray-400">Logical Context</h3>
              <a
                  target="_blank"
                  href="https://docs.google.com/spreadsheets/d/1yBYbtCteXtszgzKtjv7T_vOmmeYeoSIA/edit?usp=drivesdk&ouid=105283526599490647806&rtpof=true&sd=true"
                  className="group flex space-x-1 items-center rounded-full uppercase hover:bg-black hover:text-white px-6 py-2 border-2 border-gray-900"
                >
                  <span>See document</span>
                  <PiShareFatDuotone className='text-xl' />
                </a>
              </div>
              <div className="space-y-2 flex flex-col items-start">
                <div>
                <h3 className="text-lg text-gray-400">Strategic Results Framework</h3>
                </div>
                <div className="">
                    <a
                    target="_blank"
                    href="https://docs.google.com/document/d/1Bf4HXOZt1yfSO7iG8lyOu3_nGy3SGvv7"
                    className="group flex flex-shrink-0 space-x-1 items-center rounded-full uppercase hover:bg-black hover:text-white px-6 py-2 border-2 border-gray-900"
                    >
                    <span>See document</span>
                    <PiShareFatDuotone className='text-xl' />
                    </a>
                </div>
              </div>
            </div>
                        </div>
                    </div>
                </div>
                <div  style={DataBg} className="mt-12 flex text-white py-24 px-12 space-x-4">
                    <div className="md:max-w-6xl 2xl:max-w-7xl mx-auto space-y-12">
                       <div className="space-y-4 mb-14">
                        <h1 className="text-center text-5xl">Solution</h1>
                        <h2 className="text-center text-xl">We offer through our platform</h2>
                       </div>
                        <div className="grid grid-cols-3 gap-x-32">
                            <div className="space-y-2 group">
                                    <div className="space-y-3 relative">
                                    <div className="absolute bg-green-400 h-3 w-3 left-32 -bottom-15 transition-all group-hover:scale-150 group-hover:-translate-y-1"></div>
                                        <h3 className="text-6xl font-black text-green-500">01.</h3>
                                        <div className="flex space-x-2 items-center">
                                            <h2 className="text-3xl bold">Awareness</h2>
                                            <PiGlobeHemisphereWestDuotone className='text-4xl hidden' />
                                        </div>
                                    </div>
                                <h3 className="text-lg text-gray-600">To universities and students by Oreonyx or partner organizations.</h3>
                            </div>
                            <div className="space-y-2 group">
                                    <div className="space-y-3 relative">
                                    <div className="absolute bg-green-400 h-3 w-3 right-5 -bottom-15 transition-all group-hover:scale-150 group-hover:-translate-y-1"></div>
                                        <h3 className="text-6xl font-black text-green-500">02.</h3>
                                        <div className="flex space-x-2 items-center">
                                            <h2 className="text-3xl bold">Trainings</h2>
                                            <PiGlobeHemisphereWestDuotone className='text-4xl hidden' />
                                        </div>
                                    </div>
                                <h3 className="text-lg text-gray-600">Organized by actors that can reach a large number of users.</h3>
                            </div>
                            <div className="space-y-2 group">
                                    <div className="space-y-3 relative">
                                        <div className="absolute bg-green-400 h-3 w-3 left-48 top-24 transition-all group-hover:scale-150 group-hover:-translate-y-1"></div>
                                        <h3 className="text-6xl font-black text-green-500">03.</h3>
                                        <div className="flex space-x-2 items-center">
                                            <h2 className="text-3xl bold">Programs</h2>
                                            <PiGlobeHemisphereWestDuotone className='text-4xl hidden' />
                                        </div>
                                    </div>
                                <h3 className="text-lg text-gray-600">Possibility of organing webinars, conferences, surveys, forums or online fairs.</h3>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-x-32">
                            <div className="space-y-2 group">
                                    <div className="space-y-3 relative">
                                        <div className="absolute bg-green-400 h-3 w-3 right-3 top-20 transition-all group-hover:scale-150 group-hover:-translate-y-1"></div>
                                        <h3 className="text-6xl font-black text-green-500">04.</h3>
                                        <div className="flex space-x-2 items-center">
                                            <h2 className="text-3xl bold">Promotion</h2>
                                            <PiGlobeHemisphereWestDuotone className='text-4xl hidden' />
                                        </div>
                                    </div>
                                <h3 className="text-lg text-gray-600">Annual ranking of most active universities.</h3>
                            </div>
                            <div className="space-y-2 group">
                                    <div className="space-y-3 relative">
                                    <div className="absolute bg-green-400 h-3 w-3 right-5 -bottom-15 transition-all group-hover:scale-150 group-hover:-translate-y-1"></div>
                                        <h3 className="text-6xl font-black text-green-500">05.</h3>
                                        <div className="flex space-x-2 items-center">
                                            <h2 className="text-3xl bold">Commitment</h2>
                                            <PiGlobeHemisphereWestDuotone className='text-4xl hidden' />
                                        </div>
                                    </div>
                                <h3 className="text-lg text-gray-600">1% of oreonyx profits will used to support waste recycling at universities.</h3>
                            </div>
                            <div className="space-y-2 group">
                                    <div className="space-y-3 relative">
                                    <div className="absolute bg-green-400 h-3 w-3 right-5 -bottom-15 transition-all group-hover:scale-150 group-hover:-translate-y-1"></div>
                                        <h3 className="text-6xl font-black text-green-500">06.</h3>
                                        <div className="flex space-x-2 items-center">
                                            <h2 className="text-3xl bold">Funding</h2>
                                            <PiGlobeHemisphereWestDuotone className='text-4xl hidden' />
                                        </div>
                                    </div>
                                <h3 className="text-lg text-gray-600">Opportunities for Organizations to Fund Projects.</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pt-24 md:max-w-6xl 2xl:max-w-7xl mx-auto">
                   <div className="w-full flex justify-between">
                        <div className="w-6/12 pr-24">
                            <h1 className="text-5xl">Collaboration structure</h1>
                        </div>
                        <div className="w-6/12 pl-12">
                            <h2 className="text-lg">In the Oreonyx Climate implementaion platform Idea, we collaborate with the following stakeholders for early use cases, feedback and improvements</h2>
                        </div>
                   </div>
                   <div className="mt-12">
                   <Splide 
                        aria-label="My Favorite Images"
                        options={ {
                        rewind: true,
                        width : '100%',
                        gap: "1rem",
                        perPage: 3,
                        autoWidth: true,
                    } }
                   >
                  
                        <SplideSlide>
                            <div className="h-auto space-y-3 w-[40vh]">
                                <div className="">
                                    <div className="h-60 rounded-xl w-full bg-gray-300 relative overflow-hidden">
                                    <Image
                                        alt="source data"
                                        src="/illustrations/university-1.jpeg"
                                        layout="fill"
                                        objectFit="cover"
                                        className="object-center"
                                        />
                                    </div>
                                </div>
                                <div className="">
                                   <div className="space-y-2">
                                        <h3 className="text-lg font-semibold">Universities, Youth, Students</h3>
                                        <p>
                                        Platform designed for diverse users, focusing on universities, young adults (16-35), and students, fostering engagement and growth with myriad opportunities.
                                        </p>
                                   </div>
                                </div>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className="h-auto space-y-3 w-[50vh]">
                                <div className="w-full">
                                    <div className="h-72 rounded-xl bg-gray-300 relative overflow-hidden">
                                    <Image
                                        alt="source data"
                                        src="/illustrations/university-3.jpeg"
                                        layout="fill"
                                        objectFit="cover"
                                        className="object-center"
                                        />
                                    </div>
                                </div>
                                <div className="">
                                   <div className="space-y-2">
                                        <h3 className="text-lg font-semibold">Catalyzing Sustainability in Universities</h3>
                                        <p>
                                        With Government agencies, NGOs, and organizations have the potential to play a pivotal role in fostering the awareness, training and implementation of sustainable practices.
                                        </p>
                                   </div>
                                </div>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className="h-auto space-y-3 w-[30vh]">
                                <div className="w-full">
                                    <div className="h-[30vh] rounded-xl bg-gray-300 relative overflow-hidden">
                                    <Image
                                        alt="source data"
                                        src="/illustrations/investors.jpg"
                                        layout="fill"
                                        objectFit="cover"
                                        className="object-center"
                                        />
                                    </div>
                                </div>
                                <div className="">
                                   <div className="space-y-2">
                                        <h3 className="text-lg font-semibold">Investors and Donors</h3>
                                        <p>
                                        Investors and donors will have the opportunity to contribute crucial financial support to bolster the platform's growth and expansion efforts, further enhancing its reach and impact.
                                        </p>
                                   </div>
                                </div>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className="h-auto space-y-3 w-[80vh]">
                                <div className="w-full">
                                    <div className="h-60 rounded-xl bg-gray-300 relative overflow-hidden">
                                    <Image
                                        alt="source data"
                                        src="/illustrations/university-2.jpeg"
                                        layout="fill"
                                        objectFit="cover"
                                        className="object-center"
                                        />
                                    </div>
                                </div>
                                <div className="">
                                   <div className="space-y-2">
                                        <h3 className="text-lg font-semibold">Elevating Platform with Data Experts</h3>
                                        <p>
                                        Tech companies and data analytics experts will have the capacity to offer cutting-edge technologies to enhance the platform's functionality, driving innovation and efficiency
                                        </p>
                                   </div>
                                </div>
                            </div>
                        </SplideSlide>
                    </Splide>
                    <div className="pb-0 pt-16 md:py-16 space-y-3">
                        <div className="flex justify-center">
                            <span className="text-lg text-transparent text-center md:text-lg font-bold bg-clip-text bg-gradient-to-r from-[#faf9f6] via-gray-900 to-[#faf9f6]">
                                <span className="lg:hidden">Trusted technical partners</span>
                                <span className="hidden lg:inline">
                                A solid infrastructure with trusted technical partners
                                </span>
                            </span>
                        </div>
                        <div style={schoolsBg} className="w-full flex justify-center">
                        <div className="w-11/12 md:w-9/12 h-14 relative">
                            <Image
                            alt="source data"
                            src="/Technical_partners_dkt.png"
                            layout="fill"
                            objectFit="contain"
                            className="rounded-full"
                            />
                        </div>
                        </div>
                    </div>
                   </div>
                </div>
                <div className="w-full ">
                    <div className="md:max-w-6xl 2xl:max-w-7xl mx-auto">
                        <div className="mb-12">
                            <h1 className="text-5xl">Benefits and Impacts</h1>
                        </div>
                        <div className="flex space-x-6">
                        <div className="w-6/12 bg-green-600 text-white px-10 py-10 rounded-xl space-y-6">
                            <div className="space-y-3">
                                <div className="flex items-center space-x-2">
                                    <PiBuildingsDuotone className='text-2xl' />
                                    <h2 className="text-xl font-bold">Universities</h2>
                                </div>
                                <p>
                                    Improvement of their carbon footprint and their environmental image Reduction of their energy and resource costs 
                                    Training of a generation of graduates aware of environmental issues 
                                </p>
                            </div>
                            <div className="space-y-3">
                                <div className="flex items-center space-x-2">
                                    <PiUsersThreeDuotone className='text-2xl' />
                                    <h2 className="text-xl font-bold">The communities</h2>
                                </div>
                                <p>
                                Reducing the environmental impact of universities on their local environment Involvement of universities in local projects for the environment Public awareness of environmental issues.
                                </p>
                            </div>
                            <div className="space-y-3">
                                <div className="flex items-center space-x-2">
                                    <PiStudentDuotone className='text-2xl' />
                                    <h2 className="text-xl font-bold">People and students</h2>
                                </div>
                                <p>
                                Opportunity to learn sustainability skills 
Involvement in concrete projects for the environment Awareness and commitment to sustainability 

                                </p>
                            </div>
                            <div className="space-y-3">
                                <div className="flex items-center space-x-2">
                                    <PiStudentDuotone className='text-2xl' />
                                    <h2 className="text-xl font-bold">Governments and organizations or NGOs</h2>
                                </div>
                                <p>
                                Strengthening the consideration of environmental issues in educational policies Support for the transition to a greener economy 
Collaboration with universities for the implementation of environmental projects 

                                </p>
                            </div>
                        </div>
                        <div className="w-6/12 bg-gray-200 px-10 py-10 rounded-xl space-y-6">
                            <div className="space-y-3">
                                <div className="flex items-center space-x-2">
                                    <PiCoinsDuotone className='text-2xl' />
                                    <h2 className="text-xl font-bold">Short term impact </h2>
                                </div>
                                <p>
                                awareness of the importance of environmental sustainability in universities and among students Improved waste management, energy and resource consumption, and greenhouse gas emissions on university campuses Training of students in environmental practices  
                                </p>
                            </div>
                            <div className="space-y-3">
                                <div className="flex items-center space-x-2">
                                    <PiMedalMilitaryDuotone className='text-2xl'/>
                                    <h2 className="text-xl font-bold">Medium-term impact </h2>
                                </div>
                                <p>
                                Increased university engagement in environmental projects and participation in sustainability programs 
Strengthening partnerships with funding agencies for the implementation of environmental projects 
                                </p>
                            </div>
                            <div className="space-y-3">
                                <div className="flex items-center space-x-2">
                                    <PiTrophyDuotone className='text-2xl'/>
                                    <h2 className="text-xl font-bold">Long term impact </h2>
                                </div>
                                <p>
                                reduction in the carbon footprint of universities and young people Emergence of new businesses and industries related to environmental sustainability 
Widespread adoption of sustainable practices in local communities Contribution to the fight against climate change and the preservation of the environment on a global scale  
                                </p>
                            </div>
                        </div>
                        </div>
                    </div>
                    
                </div>
                
               <div className="">
                <CTA />
                <Footer />
               </div>
            </div>
        </section>
    </div>
  )
}
