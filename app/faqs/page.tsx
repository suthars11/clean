import React from 'react'
import Hero from "@/components/ui/Hero";
import Faq from '@/components/faq/Faq';
const page = () => {
  return (
    <div>
        <Hero page="faqs"/>
        <Faq/>
    </div>
  )
}

export default page