import type { Metadata } from "next";
import { Geist, Geist_Mono,Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroProvide from "@/context/HeroProvide";
import { data } from "@/data/data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: data.copy.metadata.title,
  description: data.copy.metadata.description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
       <body className={`min-h-full bg-white ${poppins.className}`}>
        <HeroProvide>
          <div className="mx-auto flex min-h-screen w-full max-w-[1350px] flex-col overflow-x-clip bg-white">
            <div className="sticky top-0 z-50 w-full">
              <Header/>
              <Navbar/>
            </div>
            <main className="flex-1">{children}</main>
            <Footer/>
          </div>
           </HeroProvide>
        </body>
    </html>
  );
}
