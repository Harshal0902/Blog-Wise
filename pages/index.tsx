import 'tailwindcss/tailwind.css'
import Head from 'next/head'
import HomeCards from '../components/homeCards/homeCards'
import { motion } from "framer-motion"

export default function Home() {

  const fadeLogo = {
    hidden: {
      scale: .8,
      opacity: 0
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: .6,
      }
    },
  }

  return (
    <div>
      <Head>
        <title>Blog Wise</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>

      <motion.div variants={fadeLogo} initial="hidden" animate="visible" className="grid w-full py-10 place-items-center">
        <h1 className="pb-2 text-5xl font-semibold tracking-wide font-dancingScript lg:text-6xl">
          Blog Wise
        </h1>
        <div className="inline-flex h-1 bg-indigo-500 rounded-full w-60"></div>
      </motion.div>

      <HomeCards />
      <HomeCards />
    </div>
  )
}
