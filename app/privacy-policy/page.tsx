import React from 'react'
import Policy from '@/components/privacy-policy/Policy'
import Hero from '@/components/ui/Hero'

const page = () => {
  return (
    <div>
        <Hero page="privacyPolicy"/>
        <Policy/>
    </div>
  )
}

export default page