import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { 
  PiHandCoinsDuotone
} from "react-icons/pi"

const schoolsBg = {
  backgroundImage: "url('shapes/security-design-grid.svg')"
};

export default function Overview() {
  return (
    <div>
      <div className="pb-0 pt-6 md:pt-16 space-y-3">
        <div className="flex justify-center">
          <span className="text-lg text-transparent text-center md:text-lg font-bold bg-clip-text bg-gradient-to-r from-[#faf9f6] via-gray-900 to-[#faf9f6]">
            <span className="md:hidden">Trusted technical partners</span>
            <span className="hidden xs:hidden md:inline">
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
      <div className="my-12 flex justify-center">
          <div className="space-x-3 flex">
              <PiHandCoinsDuotone className='text-black text-xl' />
              <PiHandCoinsDuotone className='text-black text-xl' />
              <PiHandCoinsDuotone className='text-black text-xl' />
              <PiHandCoinsDuotone className='text-black text-xl' />
              <PiHandCoinsDuotone className='text-black text-xl' />
              <PiHandCoinsDuotone className='text-black text-xl' />
          </div>
      </div>
      <div className="mt-6 px-3 lg:px-12 w-full md:max-w-6xl 2xl:max-w-7xl mx-auto space-y-6 md:space-y-12">
        <div className="space-y-8 md:w-full">
          <h1 className="text-center text-2xl md:text-5xl font-mono font-bold uppercase">
            OUR VALUE PROPOSITION
          </h1>
          <div className="flex justify-center">
            <div className="w-11/12 xs:w-11/12 md:w-9/12 lg:w-7/12">
              <h3 className="text-lg lg:text-xl font-mono text-center">
                Improve all forms of education and training with high-performance tools meticulously designed to facilitate communication tunnels, decision-making and concrete action.
              </h3>
            </div>
          </div>
          
        </div>
        <div className="w-full space-y-6">
          <div className="space-y-6 md:space-y-0 md:flex md:space-x-6">
            <div className="group font-mono w-full md:w-5/12 bg-[#e9e9e9] pt-8 px-3 px-8 rounded-3xl space-y-6">
              <div className="w-full space-y-3">
                <div className="space-y-3">
                  <h5 className="text-xl lg:text-2xl relative font-semibold">
                    Collaborative Space
                  </h5>
                  <p className="text-lg">
                    Embrace this new era of communication, interact seamlessly
                    with your colleagues or collaborators through our team
                    collaboration space. Share files, work on joint projects and
                    communicate effectively to accomplish your goals together.
                  </p>
                  <div className="md:flex space-y-6 md:space-y-0 md:space-x-6 text-gray-900 font-mono">
                    <div className="hidden">
                      <Link
                        href="https://app.oreonyx.live"
                        className="px-6 py-2 border rounded-full hover:bg-black hover:text-white border-gray-900 uppercase space-x-2 md:flex"
                      >
                        <span className="font-medium">Commencer</span>
                        <ArrowRight className="h-4 w-4 hidden md:inline" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#faf9f6] h-80 rounded-t-3xl relative overflow-hidden">
                <Image
                  alt="source data"
                  src="/illustrations/oreonyx_desktop.jpeg"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
            <div className="group font-mono w-full md:w-7/12 bg-[#e9e9e9] py-8 pr-3 pr-8 rounded-3xl space-y-6">
              <div className="w-full space-y-3 px-8 mb-8">
                <div className="space-y-3">
                  <h5 className="text-xl lg:text-2xl relative font-semibold">
                    Virtual Classroom
                  </h5>
                  <p className="text-lg">
                    Participate in interactive online courses via our advanced
                    virtual classroom. Attend presentations, ask questions and
                    chat in real time. Experience the platform now that uses
                    artificial intelligence to provide personalized learning
                    recommendations.
                  </p>
                  <div className="md:flex space-y-6 md:space-y-0 md:space-x-6 text-gray-900 font-mono">
                    <div className="hidden">
                      <Link
                        href="https://app.oreonyx.live"
                        className="px-6 py-2 border rounded-full hover:bg-black hover:text-white border-gray-900 uppercase space-x-2 md:flex"
                      >
                        <span> Commencer</span>
                        <ArrowRight className="h-4 w-4 hidden md:inline" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#faf9f6] h-80 rounded-r-3xl relative overflow-hidden">
                <Image
                  alt="source data"
                  src="https://images.unsplash.com/photo-1612832164313-ac0d7e07b5ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
          <div className="space-y-6 md:space-y-0 md:flex md:space-x-6">
            <div className="group font-mono w-full md:w-7/12 bg-[#e9e9e9] py-8 rounded-3xl space-y-6">
              <div className="w-full space-y-3 px-8 mb-8">
                <div className="space-y-3">
                  <h5 className="text-xl lg:text-2xl relative font-semibold">
                    Analytics for everyone
                  </h5>
                  <p className="text-lg">
                    Our user-friendly data analytics tool is accessible to all
                    stakeholders. Students, faculty, businesses, and
                    organizations can explore, interpret, and make informed
                    decisions. Maximize your potential with intuitive
                    visualizations and advanced analytics.
                  </p>
                  <div className="md:flex space-y-6 md:space-y-0 md:space-x-6 text-gray-900 font-mono">
                    <div className="hidden">
                      <Link
                        href="https://app.oreonyx.live"
                        className="px-6 py-2 border rounded-full hover:bg-black hover:text-white border-gray-900 uppercase space-x-2 md:flex"
                      >
                        <span> Commencer</span>
                        <ArrowRight className="h-4 w-4 hidden md:inline" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pl-3 md:pl-3 lg:pl-8 w-full">
                <div className="bg-[#faf9f6] h-80 rounded-l-3xl relative overflow-hidden">
                  <Image
                    alt="source data"
                    src="/illustrations/analytics.jpg"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
            </div>
            <div className="group font-mono w-full md:w-5/12 bg-[#e9e9e9] pt-8 px-8 rounded-3xl space-y-6">
              <div className="w-full space-y-3">
                <div className="space-y-3">
                  <h5 className="text-xl lg:text-2xl relative font-semibold">
                    Jobs and Internships
                  </h5>
                  <p className="text-lg">
                    Privileged access to a multitude of professional opportunities. Whether you&apos;re a student looking for an internship or part-time job, or a graduate looking for a promising career, our platform connects you with top companies looking for exceptional talent.
                  </p>
                  <div className="md:flex space-y-6 md:space-y-0 md:space-x-6 text-gray-900 font-mono">
                    <div className="hidden">
                      <Link
                        href="https://app.oreonyx.live"
                        className="px-6 py-2 border rounded-full hover:bg-black hover:text-white border-gray-900 uppercase space-x-2 md:flex"
                      >
                        <span className="font-medium">Commencer</span>
                        <ArrowRight className="h-4 w-4 hidden md:inline" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#faf9f6] h-80 rounded-t-3xl relative overflow-hidden">
                <Image
                  alt="source data"
                  src="/illustrations/interview.jpg"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
