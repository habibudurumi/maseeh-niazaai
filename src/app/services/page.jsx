"use client";

import Link from 'next/link';
import { services } from '../../../data';




import { motion } from 'framer-motion';


const Services = () => {
  return (
    <section className='h-full flex flex-col justify-center mt-14'>
      <div className="container mx-auto ">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' } }} className='grid grid-cols-1 md:grid-cols-2 gap-[60px] pt-10 xl:pt-8 pb-24'
        >
          {services.map((service, index) => {
            return (
              <div key={index} className='flex-1 flex flex-col justify-center gap-6 group'>
                <div className='w-full flex justify-between items-center'>
                  <div className='text-5xl font-extrabold  group-hover:text-accent transition-all duration-500'>{service.num}</div>
                  <Link href={service.href} className='w-[50px] xl:w-[70px] h-[50px] xl:h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center group-hover:rotate-45'>
                    {/* <BsArrowDownRight className='text-primary text-2xl xl:text-3xl' /> */}
                    <div className='text-primary text-2xl xl:text-3xl'>{ service.icon}</div>
                  </Link>
                </div>
                <h2 className='text-[32px] xl:text-[40px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500'>{service.title}</h2>
                <p className='text-white/60 text-justify'>{service.description}</p>
                
                <div className='border-b border-white/20 w-full'></div>
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Services