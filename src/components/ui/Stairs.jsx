import { motion } from "framer-motion"


const stairsAnimation = {
    initial: {
        top: "0%",
    },
    animate: {
        top: "100%",
    },
    exit: {
        top: ["100%","0"],
    },
}

const reverseIndex = (index) => {
    const totalsteps = 1;
    return totalsteps - index - 1;
}


const Stairs = () => {
  return (
      <>
          {[...Array(1)].map((_, index) => {
             return(<motion.div key={index} variants={stairsAnimation} initial='initial' animate="animate" exit="exit" transition={{ duration: 0.6, ease: "easeInOut", delay: reverseIndex(index) * 0.1 }}
                  className="h-full w-full bg-white relative"
              />)
          })}
    </>
  )
}

export default Stairs