'use client'
import React, { ReactNode } from "react"
import Section from "../Atom/Section"
import { Container, Grid, GridItem, Heading, Stack, Text } from "@chakra-ui/react"

interface GridLayoutProjectsProps<T> {
    data: T[]
    renderItems(item: T): ReactNode
    title: string
    sectionId: string
}

export default function GridLayoutProjects<T extends unknown>({
    data, title, sectionId, renderItems
}: GridLayoutProjectsProps<T>) {
    return (
        <Section className="h-min" id={sectionId}>
            <Container>
                <Heading>
                    {title}
                </Heading>
                {/* Content */}
                <Grid
                    mt={'6'}
                    gridTemplateColumns={'repeat(4,1fr)'}
                    columnGap={'3'}
                    rowGap={'3'}
                >
                    {
                        data.map((x) => (
                            <GridItem minH={'200px'} w={'full'}>
                                {renderItems(x)}
                            </GridItem>
                        ))
                    }
                </Grid>
            </Container>
        </Section>
    )
}