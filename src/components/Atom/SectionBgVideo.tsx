'use client'
import React, { HTMLAttributes } from 'react';
import Section from './Section';

// import { Container } from './styles';

interface SectionBgVideoProps extends HTMLAttributes<HTMLDivElement> { }

const SectionBgVideo: React.FC<SectionBgVideoProps> = ({ children, className, ...rest }) => {
  return <Section {...rest} className={`${className} relative `}>
    {children}
    <video loop autoPlay muted
      className={`
        absolute top-0 left-0
        w-full object-cover
        !min-h-[400px] !h-[400px]
      `}
    >
      <source src="https://res.cloudinary.com/zxx/video/upload/v1695878562/portifolio/nryklsdzwgamols6hi5u.mp4" type="video/mp4" >
        {/* infinity video */}
      </source>
    </video>
  </Section>;
}

export default SectionBgVideo;