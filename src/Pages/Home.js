import React from 'react'
import Head from '../components/Head/Head'
import Login from '../components/Login'
// import brlLogo from '/assets/brlLogo2.png'

const Home = () => {
  const brlLogo = "/assets/brlLogo2.png"
  return (
    <section>
        <Head />
        <article className='flex flex-col items-center justify-center gap-6 loginDiv'>
            <img src={brlLogo} alt="" />
            <Login />
        </article>
    </section>
  )
}

export default Home