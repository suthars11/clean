import Whychoose from '@/components/home/Whychoose'
import React from 'react'
import HowItWorks from '@/components/home/HowItWorks'
import Hero from '@/components/ui/Hero'
const page = () => {
  return (
    <div>
      <Hero page="whyChooseUs"/>
        <HowItWorks/>
         <Whychoose/>
    </div>
  )
}

export default page