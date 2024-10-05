"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { links } from "../../../data";




const Navbar = () => {
    const pathname = usePathname()
  return (
      <nav className="flex gap-8 capitalize py-6">
          {
            links.map((link, index) => {
                  return (
                      <Link href={link.path} key={index} className={`${link.path === pathname && "text-accent font-bold"} capitalize font-medium hover:text-accent transition-all ease duration-500`}>
                          {link.name}
                      </Link>
                  );
              })
          }
    </nav>
  )
}

export default Navbar