import React from 'react'
import Hero from "@/components/ui/Hero";
import Review from '@/components/testimonials/Review';
const page = () => {
  return (
    <div>
        <Hero page="testimonials"/>
        <Review/>
    </div>
  )
}

export default page