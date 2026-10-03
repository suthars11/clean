import React from 'react'
import Consultation from '@/components/consultation/Consultation'
import Hero from "@/components/ui/Hero";
const page = () => {
  return (
    <div>
        <Hero page="bookConsultation"/>
        <Consultation/>
    </div>
  )
}

export default page