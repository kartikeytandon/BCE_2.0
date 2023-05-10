import React from 'react'
import Head from '../components/Head/Head'
import Login from '../components/Login'
<<<<<<< HEAD
// import brlLogo from '/assets/brlLogo2.png'
=======
// import brlLogo from '../assets/brlLogo2.png'
>>>>>>> ab717a60f17255c3eec41205574ab76975641810

const Home = () => {
  const brlLogo = "/assets/brlLogo2.png"
  return (
    <section className='homeSection'>
        <Head />
        <article className='flex flex-col items-center justify-center gap-6 loginDiv'>
            <img src={brlLogo} alt="" />
            <Login />
        </article>
    </section>
  )
}

export default Home