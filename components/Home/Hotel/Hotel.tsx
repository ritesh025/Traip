import React from 'react'
import SectionHeading from '@/components/Helper/SectionHeading'
import { hotelsData } from '@/data/data'
import HotelCard from './HotelCard'


const Hotel = () => {
  return (
    <div className='pt-10 pb-10'>
      <SectionHeading heading= 'Recommended Hotels'></SectionHeading>
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 items-center mt-16">
        {hotelsData.map((data, i) => {
          return (
            <div key={data.id} data-aos="fade-left" data-aos-anchor-placement = "top-center"
            data-aos-delay={`${i*100}`}
            >
              <HotelCard hotel={data}/>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Hotel
