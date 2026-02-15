import Head from "next/head"
import Footer from "./ui/Footer"
import Navbar from "./ui/Navbar"

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Ita Services LLC | IT Consulting</title>
        <meta
          name="description"
          content="Ita Services LLC provides strategic IT consulting for growing businesses. IT strategy, cloud infrastructure, and cybersecurity solutions based in Sheridan, WY."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Ita Services LLC | IT Consulting" />
        <meta property="og:description" content="Strategic IT consulting for growing businesses. IT strategy, cloud infrastructure, and cybersecurity solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ita-services.co" />
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
