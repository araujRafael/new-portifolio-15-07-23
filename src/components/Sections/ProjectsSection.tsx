'use client'
import React, { HTMLAttributes } from 'react';
import { Badge, Box, Button, Container, HStack, Icon, Link, Stack, Text } from '@chakra-ui/react';
import moment from 'moment';
import { DataAirtableProjects } from '@/@types/airtable';
import Section from '../Atom/Section';
import SwiperLoopCards from '../Molecules/SwiperLoopCards';
import { Image } from '@chakra-ui/react';
import { BiLogoGithub } from 'react-icons/bi';
import { FaEye } from "react-icons/fa";

// 

// import { Container } from './styles';

interface ProjectsSectionProps extends HTMLAttributes<HTMLDivElement> {
  titleHeading: string
  projects: DataAirtableProjects[] | null | undefined
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ titleHeading, projects, id }) => {
  return <Section id={id}
    className='!h-min'
  >
    <Container h={'full'} display={'flex'} py={4}
      flexDir={'column'} justifyContent={'center'}
    >
      <Text mb={8}
        fontSize={[26, 42]} fontWeight={'semibold'}
      >
        {titleHeading}
      </Text>
      <Stack h={'min'} w={'full'} flexDir={'row'}>
        <SwiperLoopCards
          className=''
          data={projects}
          renderItems={({ fields: { image, title, description, tags, url, repo, created_at } }) => (
            <Stack>
              <Image
                rounded={'md'}
                objectFit={'cover'}
                src={image[0].thumbnails.full.url}
                alt='cover project'
                w={'full'}
                h={[300, 380]}
              />
              {/* Cover Content */}

              {/* GlassMorph */}
              <Stack
                overflow={'hidden'}
                w={'full'} h={'min'}
                bg={'whiteAlpha.700'}
                position={'absolute'}
                bottom={0}
                rounded={'md'}
                borderWidth={1}
                borderColor={'blackAlpha.700'}
                className={`backdrop-blur-sm backdrop-filter shadow-md`}
                px={4} py={2}
              >
                {/* GlassMorph */}
                <Stack h={'full'} justifyContent={'space-between'} >
                  <Stack>
                    <Text fontWeight={'bold'}
                      fontSize={20} color={'blackAlpha.800'}
                      lineHeight={'6'}
                    >
                      {title}
                    </Text>
                    <Text
                      fontSize={12} color={'blackAlpha.800'}
                      lineHeight={'6'}
                    >
                      {description}
                    </Text>
                    <HStack flexWrap={'wrap'}>
                      {
                        tags?.map((badge, idx) => (
                          <Badge
                            key={idx}
                            shadow={'md'} color={'gray.700'}
                            bg={'primary.900'} rounded={'md'}>
                            {badge}
                          </Badge>
                        ))
                      }
                    </HStack>
                    <Text
                      lineHeight={'3'}
                      fontSize={12}
                      color={'blackAlpha.600'}>
                      {moment(created_at).fromNow()}
                    </Text>
                  </Stack>
                  <Stack
                    fontSize={[20, 26]}
                    gap={2}
                    flexDir={'row'} justifyContent={'space-between'}>
                    {repo && <Link gap={3}
                      w={'full'}
                      ring={1}
                      ringColor={'blackAlpha.900'}
                      href={repo}
                      target='_blank'
                      color={'blackAlpha.900'}
                      display={'flex'}
                      justifyContent={'center'}
                      alignItems={'center'}
                      rounded={'md'}
                    >
                      <Icon
                        fontSize={[26, 30]}
                        as={BiLogoGithub}
                      />
                      Github
                    </Link>}
                    <Link gap={3}
                      w={'full'}
                      ring={1}
                      ringColor={'blackAlpha.900'}
                      href={url}
                      target='_blank'
                      color={'blackAlpha.900'}
                      display={'flex'}
                      justifyContent={'center'}
                      alignItems={'center'}
                      rounded={'md'}
                    >
                      <FaEye />
                      View
                    </Link>
                  </Stack>
                </Stack>
              </Stack>
              {/* GlassMorph - end */}

            </Stack>
          )}
        />
      </Stack>
    </Container>
  </Section >;
}

export default ProjectsSection;
