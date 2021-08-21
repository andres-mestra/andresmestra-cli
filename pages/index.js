import Head from 'next/head'
import Link from 'next/link'
import { HeaderMe } from '../components/me/HeaderMe'
import { Habilities } from '../components/me/Habilities'
import { About } from '../components/me/About'
import { Projects } from '../components/me/Projects'
import sty from '../styles/pages/home.module.scss'

const Home = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Andre Mestra</title>
      </Head>
      <main className={sty.home}>
        <HeaderMe />
        <About />
        <Habilities />
        <Projects />
      </main>
    </>
  )
}

Home.layout = 'PUBLIC'
export default Home
