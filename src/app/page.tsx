import { DataAirtableMyStack, DataAirtableProjects } from "@/@types/airtable";
import { getAirTableData } from "@/api/handleApi";
import ContactSection from "@/components/Sections/ContactSection";
import HeroSection from "@/components/Sections/HeroSection";
import ProjectsSection from "@/components/Sections/ProjectsSection";
import SectionCTA from "@/components/Sections/SectionCTA";
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
      <ProjectsSection titleHeading="Projects Frontend" projects={projectsFrondEnd} id="projects" />
      <ProjectsSection titleHeading="Demo Components" projects={projects} id="projects" />
      <ContactSection id="contact" />
    </>
  )
}
