'use client'
import React, { HTMLAttributes } from 'react';
import { Text } from '@chakra-ui/react';
// Import Swiper styles
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// import 'swiper/css/effect-cards';
// import required modules
import { Autoplay } from 'swiper/modules';
// import { Container } from './styles';

interface SwiperLoopProps<T> extends HTMLAttributes<HTMLDivElement> {
  data: T[] | null | undefined
  renderItems(x: T): React.ReactNode
}

function SwiperLoop<T extends unknown>(
  {
    className,
    data,
    renderItems
  }: SwiperLoopProps<T>
) {
  return <Swiper
    autoplay={{
      delay: 1500,
      disableOnInteraction: false,
      pauseOnMouseEnter: false,
      stopOnLastSlide: false,
    }}
    loop
    spaceBetween={1.5}
    slidesPerView={4}
    modules={[Autoplay]}
    className={`${className}`}
  >
    {
      data?.map((x, i) => (
        <SwiperSlide
          className={`
            w-full flex flex-row !justify-center !items-center
          `}
        >
          <div key={i.toString()}>
            {renderItems(x)}
          </div>
        </SwiperSlide>
      ))
    }
  </Swiper>;
}

export default SwiperLoop;