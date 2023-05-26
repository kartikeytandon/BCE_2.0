import React from 'react'
import Head from './Head/Head'
import Logout from './Logout'
// import Confetti from 'react-confetti/dist/types/Confetti'
import ReactConfetti from 'react-confetti'

const Submitted = () => {

  const brlLogo = "/assets/brl-logo-svg.svg"
  const brlCube = "/assets/brl_cube.svg"

  return (
    <section className='homeSection flex flex-col justify-between pb-5 items-center'>
      <ReactConfetti />
        <Head />
        <article className='flex md:flex-row flex-col items-center md:justify-between justify-center w-[95vw] md:w-[80vw] loginDiv md:py-8 md:px-4 py-3 px-2 rounded-lg'>
          <div className='md:w-2/3 w-full border md:border-l-0 md:border-t-0 md:border-b-0 md:border-r-2 border-r-0 border-b-2 border-t-0 border-l-0 border-b-secondary border-opacity-50 border-r-secondary md:pr-10 md:pb-0 pr-0 pb-10 grid gap-4'>
              <h3 className='text-secondary font-lato uppercase font-bold text-xl md:text-2xl text-center '>submission completed!</h3>
              <h3 className='text-secondary font-lato uppercase text-lg md:text-xl text-center '>Thank you for partaking in <span className='font-iceberg font-bold'>phase-1</span> of <span className='font-iceberg font-bold'>blockverse'23</span></h3>
              <h4 className='text-secondary font-lato uppercase text-lg md:text-xl text-center ' >See you in <span className='font-iceberg font-bold'>crypthunt</span>!</h4>
            </div>
            
            {/* Login Button Part of the login page */}
            <div className='grid md:place-items-center justify-center w-1/3 gap-5 md:p-0 p-5'>
              <img src={brlCube} alt="brl_logo_cube" className='aspect-auto mx-auto md:w-1/2 w-[30%]' />
              <Logout />
            </div>
        </article>  

        {/* Footer Logo */}
        <img src={brlLogo} alt="brl_logo" className='w-[8rem] aspect-auto invert my-10' />
    </section>
  )
}

export default Submitted