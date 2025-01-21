import Banner from '@/components/global/banner';
import Servicedetail from '@/components/service/servicedetail';
import { servicedata } from '@/data/homeData';
import React from 'react';

type Props = {
  params: {
    slug: string;
  };
};

function ServiceDetail({ params }: Props) {
  // Find the matching service based on the slug
  const service = servicedata?.services.find(
    (service) => service?.slug.replace('/services/', '') === params?.slug
  );
  // Render the components only if the service is found
  if (!service) {
    return <p>Service not found.</p>; // Optional: Fallback for invalid slugs
  }

  return (
    <>
      <Banner
        img={service.img}
        title={service.title}
        para={service.text}
        slug={"services / " + service.title}
      />
      <Servicedetail data={service?.details} />
    </>
  );
}

export default ServiceDetail;
