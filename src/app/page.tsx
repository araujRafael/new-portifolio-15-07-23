import { DataAirtableMyStack, DataAirtableProjects } from "@/@types/airtable";
import { getAirTableData } from "@/api/handleApi";
import ContactSection from "@/components/Sections/ContactSection";
import HeroSection from "@/components/Sections/HeroSection";
import ProjectsSection from "@/components/Sections/ProjectsSection";
import SectionCTA from "@/components/Sections/SectionCTA";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Profile | Rafael Diniz;',
  description: 'Full stack developer in Javascript and Typescript. Over 3 years of developer'
}

export default async function Home() {
  // Data
  const myStack = await getAirTableData<DataAirtableMyStack>('my stack')
  const projects = await getAirTableData<DataAirtableProjects>('projects')

  // hook

  return (
    <>
      <HeroSection myStack={myStack} id="hero" />
      <SectionCTA id="cta" />
      <ProjectsSection id="projects" projects={projects} />
      <ContactSection id="contact" />
    </>
  )
}
