'use client'
import Section from "@/components/Atom/Section";
import { Button, Container, Stack } from "@chakra-ui/react";
import { useRouter } from "next//navigation";

export default function Success() {
  const { replace } = useRouter()

  return <Section>
    <Container h={'full'}>
      <Stack w={'full'} h={'full'} flexDir={'column'}
        justifyContent={'center'} alignItems={'center'}
      >
        <h1 className="whitespace-nowrap !text-primary-700 text-xl">
          Thanks for you message!
        </h1>
        <img
          className="my-10 max-w-[280px]"
          src="/images/party.png" alt=""
        />
        <Button
          onClick={() => replace('/')}
        >
          Back to Home
        </Button>
      </Stack>
    </Container>
  </Section>
}