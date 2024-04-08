import { DataAirtableMyStack, DataAirtableProjects } from "@/@types/airtable";
import { getAirTableData } from "@/api/handleApi";
import SectionGridProjects from "@/components/Organisms/SectionGridProjects";
import ContactSection from "@/components/Sections/ContactSection";
import GridLayoutProjects from "@/components/Sections/GridLayoutProjects";
import HeroSection from "@/components/Sections/HeroSection";
import ProjectsSection from "@/components/Sections/ProjectsSection";
import SectionCTA from "@/components/Sections/SectionCTA";
import { Image, Stack } from "@chakra-ui/react";
import { Metadata } from "next";



export default async function Home() {
  // Data
  const myStack = await getAirTableData<DataAirtableMyStack>('my stack')
  const projects = await getAirTableData<DataAirtableProjects>('projects-demo')
  const projectsFrondEnd = await getAirTableData<DataAirtableProjects>('projects-frontend')

  // hook

  return (
    <>
      <HeroSection myStack={myStack} id="hero" />
      <SectionCTA id="cta" />
      <SectionGridProjects
        data={projects ?? []}
        titleSection="Demo"
        sectionId="demo"
      />
      <SectionGridProjects
        data={projectsFrondEnd ?? []}
        titleSection="Projects"
        sectionId="projects"
      />
      <ContactSection id="contact" />
    </>
  )
}
