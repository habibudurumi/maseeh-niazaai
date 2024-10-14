"use client";
import { ReactTyped } from "react-typed";

const TypedFont = () => {
  return (
    
    <div className=" leading-snug">
      <ReactTyped className="leading-6" strings={["FullStack Web Developer<br/> Entrepreneur"]} typeSpeed={140}
      startDelay={0} // Ensure no delay on page refresh
      backSpeed={50} // Optional: Set the back speed if needed
      backDelay={2000} // Optional: Set the delay before typing again
        loop={false} // Optional: Set to true if you want it to loop
      />
    
    </div>

  )
}

export default TypedFont