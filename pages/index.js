import Head from 'next/head'
import Link from 'next/link'
import { HeaderMe } from '../components/me/HeaderMe'
import { Habilities } from '../components/me/Habilities'
import { About } from '../components/me/About'

const Home = () => {
  return (
    <>
      <main className="home">
        <HeaderMe />
        <About />
        <Habilities />
        {/* <div>Tecnologias</div>
        <div>About me</div>
        <div>Proyectos</div>
        <div>Contacto</div> */}
      </main>
      <style jsx>{`
        .home {
          display: grid;
          grid-template-rows: 80vh min-content max-content repeat(
              3,
              min-content
            );
        }
      `}</style>
    </>
  )
}

Home.layout = 'PUBLIC'
export default Home
