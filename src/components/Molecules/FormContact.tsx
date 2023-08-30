import React from 'react'
import { InputLabel } from '../Atom/InputLabel'
import { TextArea } from "@/components/Atom/Textarea";

export default function FormContact() {
  const MY_EMAIL = process.env.MY_EMAIL
  const NEXT_URL = process.env.NEXT_URL
  const BLACKLIST_SPAM = process.env.BLACKLIST_SPAM

  return (
    <form
      action={`https://formsubmit.co/${MY_EMAIL}`}
      method="post"
      className="min-w-[280px] w-full flex flex-col gap-2"
    >
      {/* hidden */}
      {/* <InputLabel
      type="hidden"
      name="_webhook"
      value={`${NEXT_URL}/api/webhook`}
    /> */}
      <InputLabel
        type="hidden"
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
      {/*  */}
      <InputLabel
        title="Name"
        name="name"
        type="text"
      />
      <InputLabel
        title="Email"
        name="email"
        type="email"
      />
      <TextArea
        title="Message"
        name="message"
        cols={30} rows={5}
      />
      <button
        type="submit"
        className="bg-cyan-600 px-10 py-2 w-full rounded-md"
      >
        Send
      </button>
    </form>
  )
}
