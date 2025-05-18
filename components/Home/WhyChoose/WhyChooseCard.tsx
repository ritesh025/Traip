import React from 'react'
import Image from 'next/image'

type Props ={
    image:string,
    title:string
}
const WhyChooseCard = ({image,title}:Props) => {
  return (
    <div>
      <Image src={image} alt="image" width={70} height={70} className="mx-auto object-contain" />

    <h1 className="mt-6 text-center text-gray-900 font-medium text-lg">{title}</h1>
    <p className="mt-2 text-center text-gray-600 text-xs font-medium ">Traip is a one-stop destination for all your travel needs. Whether you're planning a weekend getaway, a family vacation, or a business trip, we've got you covered. </p>

    </div>
  )
}

export default WhyChooseCard
