import React from 'react'
import SectionHeading from '@/components/Helper/SectionHeading'
import NewsCard from './NewsCard'

const News = () => {
  return (
    <div className="pt-16 pb-16">
      <SectionHeading heading="Travelling News for you"></SectionHeading>
      <div className=" w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 items-center mt-20">
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          

        >
          <NewsCard
            image="/images/n1.jpg"
            title="Top 10 places to visit in Jammu and Kashmir"
            date="25th Jan, 2025"
          ></NewsCard>
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay="200"
        >
          <NewsCard
            image="/images/n2.jpg"
            title="Top 10 places to visit in Mumbai"
            date="25th May, 2025"
          ></NewsCard>
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay="300"
        >
          <NewsCard
            image="/images/n3.jpg"
            title="Top 10 places to visit in Himachal Pradesh"
            date="25th July, 2025"
          ></NewsCard>
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay="400"
        >
          <NewsCard
            image="/images/n4.jpg"
            title="Top 10 places to visit in Uttrakhand"
            date="25th Oct, 2025"
          ></NewsCard>
        </div>
      </div>
    </div>
  );
}

export default News
