import Blogsection from '@/components/blogs/Blogs'
import Banner from '@/components/global/banner'
import { blogBanner, blogData } from '@/data/homeData'
import React from 'react'

function Blogs() {
  return (
    <div>
      <Banner img ={blogBanner?.img}
title={blogBanner.title}
para={blogBanner.para}
slug={blogBanner.slug}/>

<Blogsection data={blogData}/>
    </div>
  )
}

export default Blogs
