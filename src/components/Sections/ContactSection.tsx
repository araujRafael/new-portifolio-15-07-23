'use client'
import React, { HTMLAttributes } from 'react';
import { Container, Text } from '@chakra-ui/react';
import FormContact from '../Molecules/FormContact';
import Section from '../Atom/Section';

// import { Container } from './styles';

interface ContactSectionProps extends HTMLAttributes<HTMLDivElement> { }

const ContactSection: React.FC<ContactSectionProps> = ({ id }) => {
  return <Section id={id}>
    <Container gap={0}>
      <Text
        fontSize={[26, 42]} fontWeight={'semibold'}
      >
        Contact me
      </Text>
      <FormContact />
    </Container>
  </Section>;
}

export default ContactSection;