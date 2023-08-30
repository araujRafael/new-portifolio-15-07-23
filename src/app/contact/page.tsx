import { Container } from "@/components/Atom/Container";
import { PageComponent } from "@/components/Atom/PageComponent";
import FormContact from "@/components/Molecules/FormContact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: 'Contact %s',
    default: 'Contact',
  },
  description: 'Look some projects made by me'
}

export default function Contact() {
  return <PageComponent className="">
    <Container className="!mx-auto flex flex-col justify-center items-center">
      <FormContact />
    </Container>
  </PageComponent>
}