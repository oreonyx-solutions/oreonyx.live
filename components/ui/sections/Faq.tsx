import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { PiEnvelopeSimpleDuotone } from "react-icons/pi";

export default function Faq() {
  return (
    <div className="my-12 lg:my-24 px-6 lg:px-6 w-full md:max-w-6xl 2xl:max-w-7xl mx-auto space-y-6 font-mono">
      <div className="flex justify-center">
        <div className="w-full md:w-full lg:w-8/12">
          <h1 className="text-center text-2xl md:text-4xl lg:text-5xl font-mono font-bold uppercase">
            FREQUENTLY ASKED QUESTIONS!
          </h1>
        </div>
      </div>
      <div className="space-y-12">
        <div className="flex justify-center">
          <div className="w-full md:w-full lg:w-8/12">
            <Accordion
              className="text-base lg:text-lg"
              type="single"
              collapsible
            >
              <AccordionItem value="item-1">
                <AccordionTrigger className="uppercase">
                  WHAT IS OREONYX?
                </AccordionTrigger>
                <AccordionContent className="text-lg">
                  Oreonyx is an innovative digital platform that puts digital
                  technology at the service of the university ecosystem. Our
                  mission is to improve access to higher education and
                  employability of young people by providing powerful tools to
                  efficiently manage universities, increase the quality of
                  distance learning and optimize collaborations between
                  students, universities, companies and organizations.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="uppercase">
                  HOW TO JOIN OREONYX?
                </AccordionTrigger>
                <AccordionContent className="text-lg">
                  Oreonyx is currently in beta phase, which means it is only
                  available to a limited number of people. To join the beta
                  tester program, simply fill out this
                  <a
                    className="underline"
                    target="_blank"
                    href="https://tally.so/r/nrBOep"
                  >
                    form
                  </a>
                  .We will keep you informed of your eligibility.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="uppercase">
                  <span className="hidden xs:hidden lg:inline">
                    WHAT ARE THE BENEFITS FOR UNIVERSITIES?
                  </span>
                  <span className="lg:hidden">WHAT ARE THE ADVANTAGES?</span>
                </AccordionTrigger>
                <AccordionContent className="text-lg">
                  Using Oreonyx offers several benefits for universities, such
                  as simplified curriculum management, tools for monitoring and
                  evaluating student performance, the ability to provide quality
                  distance learning, as well as collaboration and networking
                  features between students, universities, companies and
                  organizations.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="uppercase">
                  <span className="hidden xs:hidden lg:inline">
                    HOW DOES OREONYX IMPROVE DISTANCE LEARNING?
                  </span>
                  <span className="lg:hidden">DISTANCE LEARNING?</span>
                </AccordionTrigger>
                <AccordionContent className="text-lg">
                  Oreonyx offers a range of features to enhance distance
                  learning, such as interactive virtual classrooms, multimedia
                  content sharing tools, discussion forums to facilitate
                  exchanges between students and teachers, and online assessment
                  options.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="uppercase">
                  <span className="hidden xs:hidden lg:inline">
                    HOW DOES IT FOSTER COLLABORATION BETWEEN STAKEHOLDERS?
                  </span>
                  <span className="lg:hidden">COLLABORATIONS?</span>
                </AccordionTrigger>
                <AccordionContent className="text-lg">
                  Oreonyx facilitates collaboration by providing advanced
                  communication and information sharing tools. Students can
                  interact with other students, teachers, company
                  representatives and professionals, which promotes exchanges,
                  internships, mentoring opportunities and academic
                  partnerships.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger className="uppercase">
                  <span className="hidden xs:hidden lg:inline">
                    DOES OREONYX OFFER TECHNICAL SUPPORT TO USERS?
                  </span>
                  <span className="lg:hidden">TECHNICAL SUPPORT?</span>
                </AccordionTrigger>
                <AccordionContent className="text-lg">
                  Yes, Oreonyx offers a dedicated technical support to users.
                  Our support team is available to answer your questions,
                  resolve technical issues and provide assistance to ensure a
                  smooth experience on the platform.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7">
                <AccordionTrigger className="uppercase">
                  <span className="hidden xs:hidden lg:inline text-left">
                    WHAT TYPES OF MANAGEMENT TOOLS ARE AVAILABLE FOR
                    UNIVERSITIES?
                  </span>
                  <span className="lg:hidden">MANAGEMENT TOOLS?</span>
                </AccordionTrigger>
                <AccordionContent className="text-lg">
                  Oreonyx offers a variety of management tools for universities,
                  including schedule management, exam and assessment management,
                  student data management, enrollment management, as well as
                  reporting and analysis features to track student performance
                  and progress.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-8">
                <AccordionTrigger className="uppercase">
                  <span className="hidden xs:hidden lg:inline">
                    HOW DOES OREONYX CONTRIBUTE TO STUDENT EMPLOYABILITY?
                  </span>
                  <span className="lg:hidden">EMPLOYABILITY OF YOUTH?</span>
                </AccordionTrigger>
                <AccordionContent className="text-lg">
                  Oreonyx promotes student employability by providing
                  opportunities to connect with partner companies and
                  organizations. Students can access internship opportunities,
                  mentoring programs, professional development resources, and
                  networking events to strengthen their skills and employment
                  prospects.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-9">
                <AccordionTrigger className="uppercase">
                  <span className="hidden xs:hidden lg:inline">
                    WHAT IS THE GEOGRAPHIC AVAILABILITY OF OREONYX?
                  </span>
                  <span className="lg:hidden">GEOGRAPHICAL AVAILABILITY?</span>
                </AccordionTrigger>
                <AccordionContent className="text-lg">
                  Oreonyx is a globally accessible platform. As long as you have
                  an Internet connection, you can access Oreonyx from anywhere
                  and participate in its features, regardless of your geographic
                  location.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
        <div className="flex justify-center w-full ">
          <a
            href="mailto:support@oreonyx.live"
            className="rounded-full space-x-2 px-6 py-3 border-2 hover:bg-black hover:text-white border-gray-900 uppercase flex items-center first-line:space-x-2"
          >
            <span className="font-medium">SEND AN EMAIL</span>
            <PiEnvelopeSimpleDuotone className="text-xl" />
          </a>
        </div>
      </div>
    </div>
  );
}
