import React from 'react'

import OurProcess from '@/components/investment/OurProcess'
import ProcessWork from '@/components/investment/ProcessWork'
import Hero from '@/components/ui/Hero'

const page = () => {
  return (
    <div>
       <Hero page="investment"/>
        <OurProcess/>
        <ProcessWork/>
    </div>
  )
}

export default page