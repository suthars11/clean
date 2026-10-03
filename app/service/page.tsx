import React from 'react'
import ServiceGoal from '@/components/service/ServiceGoal'
import GetInTouch from '@/components/service/GetInTouch'
import Hero from '@/components/ui/Hero'

const page = () => {
  return (
    <div>
      <Hero page="service"/>
        <ServiceGoal/>
        <GetInTouch/>
    </div>
  )
}

export default page