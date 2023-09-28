'use client'
import React, { HTMLAttributes, useEffect } from 'react';
import { Stack } from '@chakra-ui/react';
import { useIntersectionObserver } from 'react-use-observer'
import { useSectionObserver } from '@/contexts/SectionObserver';
import { menuLinks } from '@/constants/menu';


// import { Container } from './styles';

interface SectionProps extends HTMLAttributes<HTMLDivElement> {
}

const Section: React.FC<SectionProps> = ({ id, children, ...rest }) => {
  const { setHash } = useSectionObserver()
  const [ref, intersectionObserverEntry] = useIntersectionObserver({
    root: null,
    rootMargin: '0px',
    threshold: 1
  })

  useEffect(() => {
    let target = intersectionObserverEntry?.target
    setHash(`#${target?.id}`);
  }, [intersectionObserverEntry])


  return <Stack
    ref={ref}
    h={'100vh'} id={id} pt={['77px', '102px']} {...rest}>
    {children}
  </Stack>;
}

export default Section;