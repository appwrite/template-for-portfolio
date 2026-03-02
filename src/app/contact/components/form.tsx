'use client'

import { useFormStatus } from 'react-dom'
import { submitContactForm } from '~/actions/contact'
import { Button } from '~/components/button'

export const Form = () => {
  const { pending } = useFormStatus()

  return (
    <form
      action={submitContactForm}
      aria-disabled={pending}
      className="mb-20 grid grid-cols-1 gap-4 md:col-span-8 md:grid-cols-2"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          required
          placeholder="Full name"
          className="rounded-lg border border-white/8 p-2"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          required
          placeholder="Email address"
          className="rounded-lg border border-white/8 p-2"
        />
      </div>
      <div className="col-span-2 flex flex-col gap-2">
        <label htmlFor="subject">Subject</label>
        <input
          type="text"
          name="subject"
          required
          placeholder="Message subject"
          className="rounded-lg border border-white/8 p-2"
        />
      </div>
      <div className="col-span-2 flex flex-col gap-2">
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          required
          placeholder="Your message"
          className="min-h-[250px] rounded-lg border border-white/8 p-2"
        />
      </div>

      <Button disabled={pending} type="submit">
        Submit message
      </Button>
    </form>
  )
}
