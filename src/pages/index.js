import Head from 'next/head'
import Sidebar from "../components/Sidebar"

export default function Home() {
  return (
    <>
      <Head>
        <title>OptimUS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-neutral-900 min-h-screen flex max-w-[1600px] mx-auto">
        <Sidebar />
      </div>
    </>
  )
}
