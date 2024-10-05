import Link from "next/link"
import { Button } from "./button"
import Navbar from "./Navbar.jsx"
import MobileMenu from "./MobileMenu"
import Image from "next/image"
const Header = () => {
  return (
        <header className="py-0 xl:py-0 text-white/70 fixed top-0 w-full z-50 backdrop-blur-sm bg-black/50">
          <div className="container mx-auto flex justify-between items-center">
              
              {/*site logo*/}
              <Link href='/'>
                  <h1 className="text-4xl font-semibold">
                      <Image src="/niazaai.svg" height={120} width={170}/>
                  </h1>
              </Link>

              {/*desktop navbar and cta button*/}
              <div className="hidden xl:flex items-center gap-8 z-60">
                  <Navbar />
                  <Link href='/quote'>
                      <Button size='lg'>Get Quote</Button>
                  </Link>
              </div>

              {/*mobile navbar*/}
              <div className="xl:hidden py-5 sticky top-0">
                  <MobileMenu/>
              </div>
          </div>
        </header>
  )
}

export default Header