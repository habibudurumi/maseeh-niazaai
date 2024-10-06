// components/ProjectClient.js
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function ProjectClient({ project }) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center items-center py-12 mt-10 xl:px-0"
    >
      <div className="container mx-auto">
        <h2 className="text-center capitalize font-bold text-accent text-3xl md:text-4xl">
          {project.name}
        </h2>
        <div className="w-full mt-10">
          <Image
            src={project.image}
            width={1200}
            height={400}
            className="rounded-lg"
            alt={`${project.name} image`}
          />
        </div>

        <div className="mt-10 flex flex-col lg:flex-row gap-10 justify-between">
          <div className="bg-white/10 p-5 rounded-md h-fit">
            <p>
              <span className="text-white/50">Client: </span>
              <span className="text-accent font-bold text-lg">
                {project.client}
              </span>
            </p>
            <p>
              <span className="text-white/50">Category: </span>
              <span className="text-accent font-bold text-lg">
                {project.category}
              </span>
            </p>
          </div>

          <ScrollArea className="grid grid-cols-1 gap-5 h-[400px] lg:w-[70%] border rounded-md border-accent p-5">
            <p className="w-full mb-5 text-justify">{project.description}</p>
            {project.images.map((image, index) => (
              <div key={index} className="pb-8">
                <Image
                  src={image}
                  height={300}
                  width={900}
                  className="rounded-md"
                  alt={`Image ${index + 1} of ${project.name}`}
                />
              </div>
            ))}
          </ScrollArea>
        </div>
      </div>
    </motion.section>
  );
}
