export const Footer = () => {
  return (
    <div className="flex flex-col border border-white/8 bg-linear-to-b from-[#232325]/90 to-[#19191C]">
      <div className="container flex min-h-100 grow flex-col items-center justify-center text-center">
        <h2 className="text-7xl text-white">Let's work together</h2>
      </div>

      <footer className="border-[#2D2D31] border-t py-8 text-[#C3C3C6]">
        <div className="container mx-auto">
          Deployed by{' '}
          <a
            href="https://appwrite.io"
            target="_blank"
            rel="noreferrer"
            className="text-white"
          >
            Appwrite
          </a>
          . Source code available on{' '}
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="text-white"
          >
            GitHub
          </a>
        </div>
      </footer>
    </div>
  )
}
