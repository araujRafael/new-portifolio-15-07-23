import { Container } from "@/components/Atom/Container";
import { PageComponent } from "@/components/Atom/PageComponent";

export default function Success() {

  return <PageComponent className="">
    <Container className="!mx-auto flex flex-col justify-center items-center">
      <h1 className="whitespace-nowrap !text-primary-700 text-xl">
        Thanks for you message!
      </h1>
      <img
        className="my-10 max-w-[280px]"
        src="/party.png" alt="" />
    </Container>
  </PageComponent>
}