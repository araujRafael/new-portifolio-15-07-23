'use client'
import React, { HTMLAttributes } from 'react';
import { Stack } from '@chakra-ui/react';

// import { Container } from './styles';

interface SectionProps extends HTMLAttributes<HTMLDivElement> {
}

const Section: React.FC<SectionProps> = ({ id, children, ...rest }) => {
  return <Stack h={'100vh'} id={id} pt={['77px', '102px']} {...rest}>
    {children}
  </Stack>;
}

export default Section;