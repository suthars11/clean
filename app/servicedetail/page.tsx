import React from 'react'
import Overview from '@/components/service/Overview'
import Hero from "@/components/ui/Hero"

const page = () => {
  return (
    <div>
        <Hero page="serviceDetail"/>
        <Overview/>
    </div>
  )
}

export default page