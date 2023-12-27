import React from 'react'
import { InputLabel } from '../Atom/InputLabel'
import { TextArea } from "@/components/Atom/Textarea";
import { Button } from '@chakra-ui/react';

export default function FormContact() {
  const MY_EMAIL = process.env.MY_EMAIL
  const NEXT_URL = process.env.NEXT_URL
  const BLACKLIST_SPAM = process.env.BLACKLIST_SPAM

  return (
    <form
      action={`https://formsubmit.co/${MY_EMAIL}`}
      method="post"
      className="!max-h-min !h-min min-w-[280px] w-full flex flex-col gap-2"
    >
      {/*  visible */}
      <InputLabel
        title="Name"
        name="name"
        type="text"
        isRequired
      />
      <InputLabel
        title="Email"
        name="email"
        type="email"
        isRequired
      />
      <TextArea
        title="Message"
        name="message"
        cols={30} rows={5}
        isRequired
      />
      <Button
        variant={'solid'}
        type="submit"
      >
        Send
      </Button>
      {/* hidden */}
      {/* <InputLabel
      type="hidden"
      name="_webhook"
      value={`${NEXT_URL}/api/webhook`}
    /> */}
      <InputLabel
        type='hidden'
        name="_next"
        value={`${NEXT_URL}/success`}
      />
      <InputLabel
        name="_subject"
        type="hidden"
        value="Messagem from my portifolio!"
      />
      <InputLabel
        name="_blacklist"
        type="hidden"
        value={BLACKLIST_SPAM}
      />
      <InputLabel
        name="_captcha"
        type="hidden"
        value={'true'}
      />
      <InputLabel
        name="_autoresponse"
        type="hidden"
        value={'Thank you for your message, I will get back to you shortly.'}
      />
    </form>
  )
}
