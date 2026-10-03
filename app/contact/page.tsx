import React from 'react'
import Hero from '@/components/ui/Hero'
import ContactForm from '@/components/contact/ContactForm'
import OurLocation from '@/components/contact/OurLocation'

const page = () => {
  return (
    <div>
        <Hero page="contact"/>
        <ContactForm/>
        <OurLocation/>
    </div>
  )
}

export default page