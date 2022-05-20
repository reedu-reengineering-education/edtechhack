import Head from 'next/head'
import Footer from './Footer'
import Navbar from './Navbar'

export type LayoutProps = {
  children: React.ReactElement
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}
