import React from 'react'

type Props = {
    heading: string;
}

const SectionHeading = ({heading}: Props) => {
  return (
    <div className='w-[80%] mx-auto'>
      <h1 className='text-xl sm:text-3xl text-emerald-900 font-bold'> {heading}</h1>
      <p className='mt-2 text-gray-800 sm:text-base text-sm font-medium'>
        The best choice for your next trip, Traip helps you find the perfect trip, whether you are planning a weekend getaway, a family vacation, or a business trip. 
      </p>
    </div>
  )
}

export default SectionHeading
