"use client";

import { about, experience, skills } from '../../../data';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';



const Resume = () => {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity:1, transition:{delay:2.4, duration:0.4, ease:'easeIn'}}} className='h-full flex justify-center items-center py-12'>
      <div className="container mx-auto pt-10 xl:pt-8 pb-24">
        <Tabs defaultValue='about' className='flex  xl:flex-row flex-col gap-[60px]'>
          <TabsList className='flex w-full xl:overflow-hidden flex-row xl:flex-col xl:max-w-[300px] mx-auto xl:mx-0 gap-3 xl:gap-5'>
            <TabsTrigger value='about'>About Me</TabsTrigger>
            <TabsTrigger value='experience'>Experience</TabsTrigger>
            <TabsTrigger value='skills'>Skills</TabsTrigger>
          </TabsList>
          <div className='w-min-[70vh] w-full'>
            
            <TabsContent value='experience' className='w-full'>
              <motion.div initial={{opacity: 0}} animate={{opacity:1, transition:{delay:0.5, duration:0.1, ease:'easeInOut'}}} className='flex flex-col gap-[30px]  text-center xl:text-left'>
                <h3 className='text-3xl capitalize font-bold text-accent'>{experience.title}</h3>
                
                <ScrollArea className='h-[480px]'>
                  <ul className='grid grid-cols-1 lg:grid-cols-1 gap-[30px]'>
                    {experience.items.map((item, index) => {
                      return (
                        <li  key={index} className='bg-[#232329]  py-6 px-4 md:px-8 lg:px-10 rounded-xl flex flex-col justify-center items-start gap-3 tansition-all ease-in-out duration-500'>
                          <span className='text-accent'>{item.duration}</span>
                          <h3 className='text-lg max-w-[280px]  text-left'>{item.Postion}</h3>
                          <div className='flex items-start gap-2 bg-white/10 px-2 rounded-sm'>
                            <p className='text-accent'>{item.company}</p>
                          </div>
                          <p className='w-full text-white/60 text-justify mx-auto xl:mx-0'>{item.description}</p>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </motion.div>
            </TabsContent>


          
            {/* <TabsContent value='education' className='w-full'>
              <div className='flex flex-col gap-[30px]  text-center xl:text-left'>
                <h3 className='text-3xl capitalize font-bold text-accent'>{education.title}</h3>
                <p className='max-w-[600px] xl:max-w-full lg:max-w-full text-white/60 mx-auto xl:mx-0'>{education.description}</p>
                <ScrollArea className='h-[400px]'>
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {education.items.map((item, index) => {
                      return (
                        <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                          <span className='text-accent'>{item.duration}</span>
                          <h3 className='text-lg max-w-[280px] min-h-[60px] text-center lg:text-left'>{item.certification}</h3>
                          <div className='flex items-center gap-3'>
                            <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                            <p className='text-white/60'>{item.institution}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
 */}

            <TabsContent value='skills' className='w-full h-full'>
              <motion.div initial={{opacity: 0}} animate={{opacity:1, transition:{delay:0.5, duration:0.1, ease:'easeInOut'}}}  className='flex flex-col gap-6'>
                <div className='flex flex-col gap-[30px]  text-center xl:text-left'>
                  <h3 className='text-3xl capitalize font-bold text-accent'>{skills.title}</h3>
                  {/* <p className='w-full text-white/60 mx-auto xl:mx-0'>{ skills.description}</p> */}
                </div>
                <ScrollArea className='h-[480px]'>
                  <div className='text-white grid grid-cols-1 md:grid-cols-2 gap-5'>
                    {
                      skills.skillSet.map((skill, index) => {
                        return (
                          <div key={index} className=' w-full bg-white/10 p-4 rounded-md'>
                            <span className='font-bold text-lg text-accent mr-3 block'>{skill.name}:</span>{skill.skillList}
                          </div>
                        )
                      })
                    }
                  </div>
                  <ul className='grid grid-cols-2 mt-5 gap-4 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px]'>
                    {skills.skillList.map((skill, index) => {
                      return (
                        <li key={index}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group'>
                                <div className='text-6xl group-hover:text-accent transition-all duration-500 ease-in-out'>
                                  
                                  {skill.icon}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent className='bg-white'>
                                <p className='capitalize text-primary'>{skill.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
               
              </motion.div>
            </TabsContent>

            {/* about section */}
            <TabsContent value='about' className='w-full'>
              <motion.div initial={{opacity: 0}} animate={{opacity:1, transition:{delay:0.5, duration:0.1, ease:'easeInOut'}}}  className='flex flex-col gap-[30px] bg-white/5 px-5 py-6 md:py-8 md:px-8 rounded-md'>
                <h3 className='text-3xl text-left font-bold text-accent'>{about.title}</h3>
                <p className='max-w-full text-white/60 text-justify mx-auto xl:mx-0'>{about.description}</p>
                <ul className='grid grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-x-10  max-w-full  xl:mx-0'>
                  {about.info.map((item, index) => {
                    return (
                      <li key={index} className='flex items-center  justify-start gap-1'>
                        <span className='text-white/60'>{item.fieldName}:</span>
                        <span className='text-lg'>{item.fieldValue}</span>
                      </li>
                    )
                  })}
                </ul>
              </motion.div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume