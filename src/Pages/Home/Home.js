import React from 'react'
import Head from '../../components/Head/Head'
import Login from '../../components/Login'
// import "./Home.css"
// import brlLogo from '/assets/brlLogo2.png'

const Home = () => {
  const brlLogo = "/assets/brl-logo-svg.svg"
  const brlCube = "/assets/brl_cube.svg"

  return (
    <section className='homeSection flex flex-col justify-between pb-5 items-center'>
        <Head />
        <article className='flex md:flex-row flex-col items-center md:justify-between justify-center w-[95vw] md:w-[80vw] loginDiv p-3 rounded-lg'>
          {/* INSTRUCTIONS ON LOGIN PAGE */}
            <div className='md:w-2/3 w-full border md:border-l-0 md:border-t-0 md:border-b-0 md:border-r-2 border-r-0 border-b-2 border-t-0 border-l-0 border-b-secondary border-opacity-50 border-r-secondary md:pr-10 md:pb-0 pr-0 pb-10'>
              <h3 className='text-secondary font-lato uppercase text-lg md:text-xl text-center '>instructions</h3>
              <ul className='text-secondary text-xs md:text-sm text-justify px-5 md:px-12 py-5 list-disc grid gap-1'>
                <li>You will be provided with a set of schemas, of which you have to choose one and develop it.</li>
                <li>You have to develop the UI entirely on this platform.</li>
                <li>You can not change the choice of your schema.</li>
                <li>You have to use HTML and CSS to develop the User Interface.</li>
                <li>You can preview your schema during in the development mode.</li>
                <li>All the assets used in the UI schema will be provided in the portal itself.</li>
                <li>You can check your score in real time, and check your standings at the leaderboard.</li>
                <li>You won’t be able to make any changes in your tasks after the final submission.</li>
              </ul>
            </div>
            
            {/* Login Button Part of the login page */}
            <div className='grid md:place-items-center justify-center w-1/3 md:p-0 p-5'>
              <img src={brlCube} alt="brl_logo_cube" className='aspect-auto mx-auto md:w-1/4 w-[30%]' />
              <Login />
            </div>
        </article>  

        {/* Footer Logo */}
        <img src={brlLogo} alt="brl_logo" className='w-[8rem] aspect-auto invert my-10' />
    </section>
  )
}

export default Home