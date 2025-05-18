import SectionHeading from '@/components/Helper/SectionHeading'
import React from 'react'
import WhyChooseCard from './WhyChooseCard'

const WhyChoose = () => {
  return (
    <div className="pt-20 pb-20">
      <SectionHeading heading="Why Choose Us"></SectionHeading>
      <div className="grid w-[80%] mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16 items-center mt-20">
        <div data-aos="fade-up" data-aos-anchor-placement="top-center">
          <WhyChooseCard
            image="/images/c1.svg"
            title="Best Price Guarantee"
          ></WhyChooseCard>
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay="150"
        >
          <WhyChooseCard
            image="/images/c2.svg"
            title="Easy and Fast Booking"
          ></WhyChooseCard>
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay="300"
        >
          <WhyChooseCard
            image="/images/c3.svg"
            title="24/7 Customer Support"
          ></WhyChooseCard>
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay="300"
        >
          <WhyChooseCard
            image="/images/c4.png"
            title="Trusted by Thousands"
          ></WhyChooseCard>
        </div>
      </div>
    </div>
  );
}

export default WhyChoose
