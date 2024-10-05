'use client';

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const quote = [
  {
    name: "Complimentary Development",
    text: "To demonstrate my commitment and competence, I am prepared to develop 20% of the project, at no cost (FOR FREE). This will allow you to assess the quality of my work firsthand and make an informed decision regarding the suitability of my services for your project."
  },
  {
    name: "Unlimited Revisions for Your Satisfaction",
    text: "I am dedicated to ensuring your complete satisfaction. As such, I am offering unlimited revisions and changes, guaranteeing that the final product aligns precisely with your vision."
  },
  {
    name: "Code Integrity and Security",
    text: "I commit to delivering a script and code that are not only secure but also adhere to high standards of cleanliness and robustness, minimizing any potential technical issues."
  },
  {
    name: "User-Friendly and Responsive Design",
    text: "Your website will be crafted with a user-centric approach, ensuring a seamless and responsive and user-friendly experience for visitors"
  },
  {
    name: "Discount and Transparent Pricing",
    text: "Upon your acceptance of the offer, I am pleased to extend a 5% discount from the total project cost as a gesture of appreciation."
  },
  {
    name: "Estimation of Time and Cost",
    text: "A detailed breakdown of both the project timeline and associated costs will be provided, offering transparency and clarity from the outset."
  },
  {
    name: "Refund Policy",
    text: "In the unlikely event of an undesirable outcome, I am willing to refund the project cost, providing an added layer of assurance."
  },
  {
    name: "Scheduling a Discussion",
    text: "I am available to schedule a meeting at your earliest convenience to discuss the project in-depth, address any queries you may have, and ensure that all aspects align with your expectations."
  },
]

const Quote = () => {
  return (
     <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' } }} className="min-h-[80vh] flex flex-col justify-center items-center py-12 mt-10 xl:px-0">
          <div className="container mx-auto flex gap-10 flex-col md:flex-row">
            <div className="md:w-[50%] w-full bg-white/10 p-5 rounded-md flex flex-col justify-between">
             <h2 className="text-3xl font-bold text-accent">Tailored Proposal</h2>
              <p className="mt-5">I am writing to present a comprehensive proposal tailored to meet your project requirements, below are key highlights of my offer.</p> 
              <p>Should you find this proposal aligning with your vision, I am eager to commence our collaboration. Please do not hesitate to express your interest.</p> 
              <p className="mt-5">
                <span className="block italic text-[14px]">Kind Regard</span>
                <span className="block font-bold text-accent">Maseeh Niazaai</span>
              </p>
              <Link href='/contact'>
                <Button className="mt-5 py-5 px-8 hover:bg-accent/50">Request for Web Service </Button>
              </Link>          
            </div>
            <ScrollArea className="h-[400px] md:w-1/2 pr-4">
              <h2 className="text-3xl font-bold text-accent">My Offer to You</h2>
              <div className="mt-5">
                {
              quote.map((quote, index) => {
                return (
                      <div key={index} className="flex mt-2 items-start">
                        <strong className="font-bold mr-3"> 
                          <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" fill="currentColor" viewBox="0 0 16 16">
											      <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path>
										      </svg> 
										    </strong>
                        <p className="">
                          <span className="text-accent font-bold">{quote.name}:</span>
                          <span className="ml-2">{quote.text}</span> 
                        </p>
                        
                      </div>
                    )
                  })
                }
              </div>
            </ScrollArea>
          </div>
    </motion.div>
  )
}

export default Quote