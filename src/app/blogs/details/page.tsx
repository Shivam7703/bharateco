import Blogdetail from '@/components/blogs/blogdetail'
import Blogsection from '@/components/blogs/Blogs'
import Banner from '@/components/global/banner'
import { blogBanner, blogData } from '@/data/homeData'
import React from 'react'

export default function BlogDetail() {
  return (
    <>
      <Banner img ={blogBanner?.img}
title={blogBanner.title}
para={blogBanner.para}
slug={blogBanner.slug}/>

<Blogdetail/>
    </>
  )
}


