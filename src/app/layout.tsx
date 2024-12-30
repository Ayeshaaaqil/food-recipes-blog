import Footer from './components/footer'
import Header from './components/header'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Food Recipe Blog',
  description: 'A blog about delicious food recipes',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-gray-800 text-white p-4">
          <div className="container mx-auto">
            <a href="/" className="text-2xl font-bold">Food Recipe Blog</a>
          </div>
        </nav>
        <main>
          <Header/>
          {children}
          <Footer/>
          </main>
      </body>
    </html>
  )
}

