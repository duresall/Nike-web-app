import React from 'react'
import { services } from '../constantce'
import ServiceCard from '../constantce/ServiceCard'

const Service = () => {
  return (
   <section className=' max-container flex justify-center flex-wrap gap-9'>

    {services.map((service)=>(
      <ServiceCard key={service.label} {...service}/>
    ))}
             
   </section>
  )
}

export default Service