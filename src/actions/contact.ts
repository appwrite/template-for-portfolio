'use server'

export const submitContactForm = async (formData: FormData) => {
  'use server'

  const rawFormData = {
    name: formData.get('name'),
    email: formData.get('email'),
    subject: formData.get('subject'),
    message: formData.get('message'),
  }

  console.log(rawFormData)
}
