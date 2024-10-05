"use client"

import { Sheet, SheetContent, SheetTrigger } from "./sheet"
import { Button } from "./button"
import * as SheetPrimitive from "@radix-ui/react-dialog"
import { usePathname } from "next/navigation" 
import Link from "next/link"
import { CiMenuFries } from 'react-icons/ci'
import Image from "next/image"
import { links } from "../../../data"

const SheetClose = SheetPrimitive.Close



const MobileMenu = () => {
    const pathname = usePathname()
    return (
      <Sheet>
        <SheetTrigger className='flex justify-center items-center'>
          <CiMenuFries className=" text-[32px] text-accent"/>
        </SheetTrigger>
        <SheetContent className="flex flex-col">
            <div className="mt-20 mb-20 text-2xl text-center">
                    <Link href='/'>
                        <h1 className="text-4xl font-semibold flex justify-center items-center">
                            <Image src="/niazaai.svg" height={120} width={170}/>
                        </h1>
                    </Link> 
                    
            </div>  
            <nav className="flex flex-col justify-center items-center gap-8">
              {
                links.map((link, index)=>{
                    return (
                            <Link
                                href={link.path}
                            
                                key={index}
                                className={`${link.path === pathname && 'text-accent'}  text-lg hover:text-accent transition-all`}
                            >
                                <SheetPrimitive.Close className="capitalize">
                                    {link.name}
                                </SheetPrimitive.Close>
                            </Link>
                    )
                })
                    } 
               <Link href='/quote'>
                    <SheetPrimitive.Close>
                        <Button size='lg'>Get Quote</Button>
                    </SheetPrimitive.Close>
                </Link>      
            </nav>    
        </SheetContent>
      </Sheet>
  )
}

export default MobileMenu