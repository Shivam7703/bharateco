import Banner from '@/components/global/banner'
import Servicedetail from '@/components/service/servicedetail'
import { serviceBanner } from '@/data/homeData'
import React from 'react'

function ServiceDetail() {
  return (
    <>
        <Banner img ={serviceBanner?.img}
                  title={serviceBanner.title}
                  para={serviceBanner.para}
                  slug={serviceBanner.slug}/>

                  <Servicedetail/>
    </>
  )
}

export default ServiceDetail
