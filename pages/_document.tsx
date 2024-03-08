import Navbar from '@/utils/navbar'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-gradient-to-bl  from-sky-900 via-gray-900 to-slate-900">
        <Navbar />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
