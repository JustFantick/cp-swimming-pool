import { Roboto } from 'next/font/google'
import './globals.scss'

const roboto = Roboto({
  subsets: ['cyrillic-ext'],
  weight: ['400', '700'],
})

export const metadata = {
  title: 'Pool to swim',
  description: 'Swimming pool website developed as course project',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}