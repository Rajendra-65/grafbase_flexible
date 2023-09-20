import './globals.css'
import Footer from "@/Components/Footer"
import Navbar from "@/Components/Navbar"
export const metadata = {
  title: 'Flexible',
  description: 'ShowCase and discover remarkable developer Projects',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <main>
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  )
}
