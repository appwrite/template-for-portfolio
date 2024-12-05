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
            href="mailto:walter@appwrite.io"
            className="flex size-8 items-center justify-center rounded-lg border border-white/8 bg-[#1D1D21]"
          >
            <GitHub />
          </a>

          <a
            href="mailto:walter@appwrite.io"
            className="flex size-8 items-center justify-center rounded-lg border border-white/8 bg-[#1D1D21]"
          >
            <LinkedIn />
          </a>

          <a
            href="mailto:walter@appwrite.io"
            className="flex size-8 items-center justify-center rounded-lg border border-white/8 bg-[#1D1D21]"
          >
            <Email />
          </a>
        </div>
      </div>
      <Form />
    </div>
  )
}
