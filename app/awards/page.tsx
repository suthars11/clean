import React from 'react'
import Hero from "@/components/ui/Hero";
import Achievements from '@/components/awards/Achievements';
const page = () => {
  return (
    <div>
        <Hero page="awards"/>
        <Achievements/>
    </div>
  )
}

export default page