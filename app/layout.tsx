import type { Metadata } from 'next'
import '../src/styles/index.css'

export const metadata: Metadata = {
  title: 'Capital Desk',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
