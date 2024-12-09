import '~/styles/globals.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Footer } from '~/components/footer'
import { Header } from '~/components/header'
import { cn } from '~/utils/cn'

const inter = Inter({
  variable: '--font-sans',
  display: 'optional',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Walter O'Brien",
  description: 'A Next.js Portfolio Starter, brought to you by Appwrite.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'flex min-h-screen flex-col items-center bg-neutral-900 font-sans text-neutral-250 text-sm antialiased selection:bg-blue-800 selection:text-white',
          inter.variable,
        )}
      >
        <Header />
        <main className="mx-auto w-full grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
