

import Hero from '@/components/ui/Hero'
import LatestBlog from '@/components/blog/LatestBlog'

const page = () => {
  return (
    <div>
      <Hero page="blog"/>
       <LatestBlog/>
    </div>
  )
}

export default page