'use client'
import React, { HTMLAttributes } from 'react';
// Import Swiper styles
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/effect-cards';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

interface SwiperLoopCardsProps<T> extends HTMLAttributes<HTMLDivElement> {
  data: T[] | null | undefined
  renderItems(x: T): React.ReactNode
}

function SwiperLoopCards<T extends unknown>(
  {
    className,
    data,
    renderItems
  }: SwiperLoopCardsProps<T>
) {
  return <Swiper
    // autoplay={{
    //   delay: 2000,
    //   disableOnInteraction: false,
    //   pauseOnMouseEnter: false,
    //   stopOnLastSlide: false,
    // }}
    loop
    spaceBetween={10}
    slidesPerView={1.1}
    modules={[Autoplay, Navigation]}
    // pagination={{
    //   clickable: true,
    // }}
    navigation={{
      enabled: true
    }}
    className={`${className}`}
  >
    {
      data?.map((x, i) => (
        <SwiperSlide
          key={i.toString()}
          className={`
            w-full flex flex-row !justify-center !items-center
          `}
        >
          {renderItems(x)}
        </SwiperSlide>
      ))
    }
  </Swiper>;
}

export default SwiperLoopCards;