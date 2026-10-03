import React from 'react'
import HeroSection from '@/components/home/HeroSection'
import AboutSection from '@/components/home/AboutSection'
import ServiceSection from '@/components/home/ServiceSection'
import Whychoose from '@/components/home/Whychoose'
import HowItWorks from '@/components/home/HowItWorks';
import Trusted from '@/components/home/Trusted'
import Testimonials from '@/components/home/Testimonials'
import BlogsSection from '@/components/home/BlogsSection'
import OurPartners from '@/components/home/OurPartners'

const page = () => {
  return (
    <div>
      <HeroSection/>
      <AboutSection/>
      <ServiceSection/>
      <Whychoose/>
      <HowItWorks/>
      <Trusted/>
      <OurPartners/>
      <Testimonials/>
      <BlogsSection/>
    </div>
  )
}

export default page