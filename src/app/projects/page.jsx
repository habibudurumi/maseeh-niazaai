"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {projects} from '../../../data'


const Projects = () => {
  return (
    <motion.section initial={{opacity: 0}} animate={{opacity:1, transition:{delay:2.4, duration:0.4, ease:'easeIn'}}}  className="min-h-[80vh] flex flex-col justify-center items-center py-12 mt-10 xl:px-0">
      <div className="container mx-auto">
        <div className="bg-white/10 p-5 rounded-md">
          <h2 className="md:text-4xl text-3xl text-center text-accent font-bold">Past Project Completed</h2>
          <p className="text-center mt-5 max-w-[600px] mx-auto">My career has been shaped by a diverse range of projects which enabled me to gain valuable insights and experiance.</p>
        </div>
        <div className="mt-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
          {
            projects.map((project, index) => {
              return (
                <div key={index} className="group m-4">
                  <Link href={"/projects/" + project.slug} className="relative overflow-hidden">
                    <Image src={project.image} width={500} height={300} alt={project.  category} className="h-full w-full rounded-md" />
                    <div className="absolute w-full h-full bg-black/50 flex items-center justify-center bottom-0 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                      <Button className="capitalize rounded-sm">more info</Button>
                    </div>
                  </Link>
                  <p className="group-hover:text-accent capitalize">{project.name}</p>
                </div>
              )
            })
          }
        </div>
      </div>
    </motion.section>
  )
}

export default Projects