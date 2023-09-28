'use client'
import { DataAirtableMyStack } from '@/@types/airtable';
import { Box, Center, Container, Icon, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import SwiperLoop from '../Molecules/SwiperLoop';
import { BiLogoGithub, BiLogoInstagram, BiLogoLinkedin } from 'react-icons/bi';
import { Link } from '@chakra-ui/next-js';
import Section from '../Atom/Section';


const Network = [
  {
    icon: BiLogoInstagram,
    href: 'https://www.instagram.com/codearea.softwares'
  },
  {
    icon: BiLogoGithub,
    href: 'https://github.com/araujRafael'
  },
  {
    icon: BiLogoLinkedin,
    href: 'https://www.linkedin.com/in/araujrafael/'
  },
]

interface HeroSectionProps {
  myStack: DataAirtableMyStack[] | null | undefined
  id: string
}

const HeroSection: React.FC<HeroSectionProps> = ({ myStack, id }) => {
  return <Section id={id} >
    <Container h={'full'}>
      <Stack
        w={'full'} h={'full'}
        gap={5} flexDir={'column'}
        alignItems={['center']} justifyContent={['center', 'center']}
      >
        <Stack gap={[5]} alignItems={'center'}>
          {/* Main Profile */}
          <Stack
            flexDir={'row'}
            justifyContent={'center'} gap={[2.5, 3, 8]}
            mt={[5, 0]}
          >
            <Image
              src={`https://github.com/araujrafael.png`}
              alt='Picture of me'
              w={[70, 90, 120]}
              h={[70, 90, 120]}
              rounded={'full'}
              mt={[2]}
            />
            <Stack gap={5} >
              <Stack gap={2.5}>
                <Box>
                  {/* Title */}
                  <Text
                    fontSize={['md', 'xl', '2xl', '4xl', '6xl']}
                    fontWeight={'semibold'}
                    whiteSpace={'nowrap'}
                  >
                    {"Hello, I'am"} {' '}
                    {"Rafael Diniz;"}
                  </Text>
                  {/* Subtitle */}
                  <Text
                    fontSize={['sm', 'lg', 'xl', '2xl', '4xl']}
                    color={'primary.900'}
                    fontWeight={'semibold'}
                  >
                    FullStack
                    {' '}
                    <Text as={'span'} color={'secondary.900'}>
                      Developer
                    </Text >
                    <Text as={'span'} color={'white'}>
                      {';'}
                    </Text >
                  </Text>
                </Box>
                {/* network */}
                <Stack flexDir={'row'}
                  gap={6} justifyContent={['center', 'center', 'start']}
                >
                  {
                    Network.map((x, i) => (
                      <Link key={i.toString()} href={x.href}
                        target='_blank'
                        _hover={{
                          color: 'primary.700',
                          scale: 1.5
                        }}
                      >
                        <Icon mt={i === 0 ? .5 : 0} boxSize={[7, 9]} as={x.icon} />
                      </Link>
                    ))
                  }
                </Stack>
              </Stack>
            </Stack>
          </Stack>
          {/* Bio */}
          <Stack w={'full'} maxW={[300, 300, 380, 500]}>
            <Text
              fontWeight={'semibold'}
              fontSize={[16, 20]} textAlign={'center'} >
              Aboute me
            </Text>
            <Text fontWeight={'light'} textAlign={'center'} >
              {`I'm a freelance developer with over 3 years of experience.
              I started learning java mobile, but I really
              liked the ease and versatility that javascript
              has in various environments.`}
            </Text>
          </Stack>
        </Stack>
      </Stack>
    </Container>
    {/* Swiper loop */}
    <Box w={'full'}>
      <Text
        fontSize={[16, 20]}
        fontWeight={'semibold'}
        textAlign={'center'} mb={1.5}
      >
        Technologies
      </Text>
      <SwiperLoop
        className='my-4'
        data={myStack}
        renderItems={({ fields: { image, title } }) => (
          <Box>
            <Center flexDirection={'column'} gap={2}>
              <Image
                w={'auto'} minW={'auto'}
                h={[8, 12]}
                src={image[0].thumbnails['large'].url}
                m={'auto'}
                borderRadius={5}
                alt='cover project'
              />
              <Text
                fontSize={[12.5, 14, 16]}
              >
                {title}
              </Text>
            </Center>
          </Box>
        )}
      />
    </Box>
  </Section>
}

export default HeroSection;