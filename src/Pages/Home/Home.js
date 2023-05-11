import React from 'react'
import Head from '../components/Head/Head'
import Login from '../../components/Login'
// import "./Home.css"
// import brlLogo from '/assets/brlLogo2.png'

const Home = () => {
  const brlLogo = "/assets/brl-logo-svg.svg"
  const brlCube = "/assets/brl_cube.svg"

  return (
    <section className='homeSection flex flex-col justify-between pb-5 items-center'>
        <Head />
        <article className='flex items-center justify-center w-[80vw] loginDiv p-4'>
          {/* INSTRUCTIONS ON LOGIN PAGE */}
            <div className='w-2/3 border border-l-0 border-t-0 border-b-0 border-r-2 border-opacity-50 border-r-secondary pr-10'>
              <h3 className='text-secondary font-lato uppercase text-2xl text-center '>instructions</h3>
              <ul className='text-secondary text-sm text-justify px-4 py-3 list-disc grid gap-1'>
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
            <div className='grid place-items-center w-1/3'>
              <img src={brlCube} alt="brl_logo_cube" className='aspect-auto w-1/6' />
              <Login />
            </div>
        </article>

        {/* Footer Logo */}
        <img src={brlLogo} alt="brl_logo" className='w-[10rem] aspect-auto invert' />
    </section>
  )
}
