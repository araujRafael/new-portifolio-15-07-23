'use client'
import React, { HTMLAttributes } from 'react';
import SectionBgVideo from '../Atom/SectionBgVideo';
import { Container, Image, Link, Stack, Text } from '@chakra-ui/react';

// import { Container } from './styles';

interface SectionCTAProps extends HTMLAttributes<HTMLDivElement> { }

const SectionCTA: React.FC<SectionCTAProps> = ({ }) => {
  return <SectionBgVideo className='!min-h-min !h-min' >
    <Container minH={'min'} h={'min'} display={'flex'}
      justifyContent={'center'} alignItems={'center'}
      pos={'relative'}
    >
      {/* Card */}
      <Stack w={'100%'} h={['min']}
        bg={'whiteAlpha.500'}
        m={'auto'}
        position={'relative'} zIndex={1}
        rounded={'lg'}
        className={`backdrop-blur-sm backdrop-filter`}
        flexDir={['column', 'column', 'row', 'row', 'row']}
      >
        <Stack px={8}
          w={['100%', '100%', '50%']}
          h={['min', '100%', '100%']}
          justifyContent={'center'} alignItems={'center'}
        >
          <Image src='/images/logo.png'
            w={[120, 250]}
            h={'auto'}
            alt='logo'
          />
        </Stack>
        <Stack
          w={['100%', '100%', '50%']}
          h={['min', '100%', '100%']}
          p={4} justifyContent={['center']} alignItems={['center']}
          gap={4}
        >
          <Text textAlign={'center'} fontSize={[20, 36]}
            fontWeight={'bold'} color={'blackAlpha.700'}
            lineHeight={'10'}
          >
            Do you need a Developer?
          </Text>
          <Text textAlign={'center'} fontSize={[16, 22]}
            fontWeight={'normal'} color={'blackAlpha.700'}
            lineHeight={'7'}
          >
            find out about the work I do on the freelancer website
          </Text>
          <Link
            borderColor={'whiteAlpha.500'}
            variant={'outline'}
            href='https://fiverr.com/rafaeldiniz94'
            target='_blank'
          >
            Visit
          </Link>
        </Stack>
      </Stack>
      {/* Card - end*/}
    </Container>
  </SectionBgVideo>;
}

export default SectionCTA;