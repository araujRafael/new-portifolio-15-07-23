'use client'
import React from "react"
import GridLayoutProjects from "../Sections/GridLayoutProjects"
import { Image, Stack, Text } from "@chakra-ui/react"
import { DataAirtableProjects } from "@/@types/airtable"
import Link from "next/link"

interface SectionGridProjectsProps {
    data: DataAirtableProjects[]
    titleSection: string
    sectionId: string
}

export default function SectionGridProjects({
    data, titleSection, sectionId
}: SectionGridProjectsProps) {
    return (
        <GridLayoutProjects
            title={titleSection}
            sectionId={sectionId}
            data={data}
            renderItems={({ fields: { image, title, description, repo, url, tags, created_at } }) => (
                <Stack as={Link} href={url} cursor={'pointer'} target="_blank">
                    <Image w={'full'} h={'200px'}
                        objectFit={'cover'}
                        borderTopRadius={'lg'}
                        src={image[0].thumbnails.large.url}
                    />
                    <Stack p={1}>
                        <Text fontWeight={'semibold'}>
                            {title}
                        </Text>
                        <Text >
                            {description?.slice(0, 100)}
                        </Text>
                    </Stack>
                </Stack>
            )}
        />
    )
}