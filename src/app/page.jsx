

import { Button } from "@/components/ui/button";
import Credibility from "@/components/ui/Credibility";
import Photo from "@/components/ui/Photo";
import Socials from "@/components/ui/Socials";
import Image from "next/image";
import { FiDownload } from "react-icons/fi"
import TypedFont from "@/components/ui/TypedFont";


export default function Home() {
  return (
    <section className="w-full h-full mt-14">
      <div className="container mx-auto ">
        <div className="flex flex-col xl:flex-row items-center justify-between pt-10 xl:pt-8 pb-[40px]">
          

          {/*hero information*/}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <div className="flex flex-col gap-6">
             
              <h1 className="h2 gap-0">
                <span className="flex items-center gap-0 text-center justify-center xl:justify-start">
                   <Image src='/assets/wave.png' alt="wave" width={30} height={30} className="mr-2" />
                    Hello I'm 
                </span>
               <br /><span className="text-accent block h1">Maseeh Niazaai</span>
              </h1>
              <span className="h2 mb-6 font-bold">
                <TypedFont/>
              </span>
            </div>
            <p className="max-w-full lg:max-w-[600px] mb-9  text-white/60">I bring 7+ years of experience in web development, having honed my skills in python , Javascript , php. My career has been shaped by a diverse range of projects which enabled me to gain valuable insights and experiance.
            </p>

            {/*social cv btn with media icons*/}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a href="./cv.pdf" target="_blanck" rel="noopener noreferrer">
                <Button size={"lg"} className="uppercase flex items-center gap-2 bg-primary text-accent border border-accent rounded-full hover:bg-accent hover:text-primary transition-colors ease-in-out duration-500">
                  <span>Download CV</span>
                  <FiDownload className="text-xl"/>
                </Button>
              </a>
              <div className=" xl:mb-0">
                <Socials containerStyles='flex gap-9' iconStyles="w-10 h-10 flex items-center justify-center gap-4 bg-primary text-accent border border-accent rounded-full hover:bg-accent hover:text-primary transition-colors ease-in-out duration-500"/>
              </div>
            </div>
          </div>

          {/*hero image*/}
          <div className="order-1 xl:order-none mb-6 xl:mb-0">
            <Photo/>
          </div>
        </div>
      </div>
      <Credibility/>
 </section>
  );
}
