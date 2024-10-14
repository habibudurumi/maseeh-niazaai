'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import Swal from "sweetalert2"
import { info } from "../../../data";






import { motion } from "framer-motion";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const Contact = () => {
  
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "a9bf31f4-9155-482b-8de0-d4595fc5a831");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
        Swal.fire({
          title: "Success!",
          text: "Your Message is sent!",
          icon: "success",
          confirmButtonColor:"#00ff99"
        });
      event.target.reset();
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  };
  
  return (
    <motion.section initial={{opacity: 0}} animate={{opacity:1, transition:{delay:2.4, duration:0.4, ease:'easeIn'}}} className="py-6">
      <div className="container mx-auto mt-20">
        <div className="flex flex-col md:flex-row gap-[50px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form onSubmit={onSubmit} className="flex flex-col gap-6 p-4 xl:p-10 bg-[#27272c] rounded-md">
              <h3 className="text-lg xl:text-3xl text-accent">Let's Work Together</h3>
              <p className="text-white/60">Contact me today for any web development service or issue you may have.</p>

              {/* input form */}
              <div className="grid grid-cols-1  gap-6">
                <Input type="name" placeholder="Name" name="name" required/>
                <Input type="email" placeholder="Email" name="email" required/>
              </div>

           

              <Textarea className="h-[200px]" placeholder="Type your message here... " name="message" required />
          
              
              <Button size='md' className="max-w-40 py-2 px-4 rounded-md">Send Message</Button>
            </form>
            <span>{result}</span>
          </div>
          <div className="flex-1 flex items-center xl:justify-start order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-6">
              {
                info.map((item, index) => {
                  return (
                    <li key={index} className="flex items-center gap-6">
                      <div className="w-[40px] h-[40px] xl:w-[70px] xl:h-[70px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                        <div className="text-base">{item.icon}</div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-white/60">{item.title} </h3>
                        <p className="text-lg">{item.description}</p>
                      </div>
                    </li>
                  )
                })
              }
              <div>
                <h3 className="text-accent mt-6 font-bold text-2xl">Follow Me On</h3>
                <div className="flex items-center gap-6 mt-3">
                  <a href="#" className="social-icon-style"><FaLinkedin/></a>
                  <a href="#" className="social-icon-style"><FaGithub/></a>
                  <a href="#" className="social-icon-style"><FaXTwitter/></a>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </motion.section> 
  )
}

export default Contact