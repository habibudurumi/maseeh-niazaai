'use client';

import CountUp from 'react-countup'


const stats = [
    {num: 7, text:'Years of experience'},
    {num: 16, text:'Projects completed'},
    {num: 22, text:'Technologies mastered'},
    {num: 4, text:'Freelance Platforms'},
]

const Credibility = () => {
  return (
      <section className='pb-12 xl:pb-10 xl:pt-0'>
          <div className="container mx-auto">
              <div className='flex flex-wrap gap-4 max-w-full mx-auto xl:max-w-none'>
                  {
                      stats.map((item, index) => {
                          return (
                              <div className='flex-1 flex gap-4 items-center justify-center xl:justify-start text-accent' key={index}>
                                  <CountUp end={item.num} duration={5} delay={2} className='text-3xl xl:text-6xl font-extrabold' />
                                  <p
                                      className={`${item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-white
                                      /80 capitalize`}>
                                      {item.text}
                                  </p>
                              </div>
                          )
                      })
                  }
              </div>
          </div>
    </section>
  )
}

export default Credibility