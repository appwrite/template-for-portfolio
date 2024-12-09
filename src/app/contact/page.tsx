import { Form } from './components/form'
import { Email, GitHub, LinkedIn } from './components/icons'

export default function Contact() {
  return (
    <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
      <div className="md:col-span-4">
        <h1 className="mb-4 font-500 text-4xl text-white">Contact me</h1>
        <p>
          Interested in working together? Reach out through the form or email me
          directly—I’d love to hear from you!
        </p>

        <div className="mt-8 flex gap-2">
          <a
            href="https://github.com"
            className="flex size-8 items-center justify-center rounded-lg border border-white/8 bg-neutral-850"
          >
            <GitHub />
          </a>

          <a
            href="https://linkedin.com"
            className="flex size-8 items-center justify-center rounded-lg border border-white/8 bg-neutral-850"
          >
            <LinkedIn />
          </a>

          <a
            href="mailto:walter@appwrite.io"
            className="flex size-8 items-center justify-center rounded-lg border border-white/8 bg-neutral-850"
          >
            <Email />
          </a>
        </div>
      </div>
      <Form />
    </div>
  )
}
