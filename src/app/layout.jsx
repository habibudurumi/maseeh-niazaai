import localFont from "next/font/local";
import {Poppins} from 'next/font/google'
import "./globals.css";
import Header from "@/components/ui/Header";
import PageTransition from "@/components/ui/PageTransition";
import StairTransition from '@/components/StairTransition';
import AnimatedCursorPointer from "@/components/AnimatedCursorPointer";


const poppins = Poppins({subsets:["latin"], weight:['100','200','300','400','500','600','700','800','900']})
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Maseeh Niazaai",
  description: "Maseeh Maseeh fullstack developer portfolio website",
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} ${geistSans.variable} antialiased pt-16`}
      >
          <AnimatedCursorPointer/>
          <Header />
          <StairTransition/>
          <PageTransition>
            {children}
          </PageTransition>
      
       
      </body>
    </html>
  );
}
