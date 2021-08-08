import Head from 'next/head'
import Link from 'next/link'
import { HeaderMe } from '../components/me/HeaderMe'
import { Professional } from '../components/me/Professional'

const Home = () => {
  return (
    <>
      <main className="container_grid">
        <HeaderMe />
        <Professional />
        {/* <div>Tecnologias</div>
        <div>About me</div>
        <div>Proyectos</div>
        <div>Contacto</div> */}
      </main>
    </>
  )
}

Home.layout = 'PUBLIC'
export default Home
