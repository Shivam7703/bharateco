import Banner from '@/components/global/banner'
import Servicesection from '@/components/service/services'
import { serviceBanner, services } from '@/data/homeData'
import React from 'react'

function Service() {
  return (
    <>
       <Banner img ={serviceBanner?.img}
            title={serviceBanner.title}
            para={serviceBanner.para}
            slug={serviceBanner.slug}/>

            <Servicesection data={services}/>
    </>

  )
}

export default Service
