import Banner from '@/components/global/banner'
import Servicesection from '@/components/service/services'
import { servicedata } from '@/data/homeData'
import React from 'react'

function Service() {
  return (
    <>
       <Banner img ={servicedata?.img}
            title={servicedata.title}
            para={servicedata.para}
            slug={servicedata.slug}/>
            <Servicesection data={servicedata?.services}/>
    </>

  )
}

export default Service
