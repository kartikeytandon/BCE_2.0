import React from 'react'
import Head from '../../components/Head/Head'
import Schema1 from './Schema1'
import './Schema.css'

const Schema = () => {
  const brlLogo = "/assets/brl-logo-svg.svg"
  return (
    <section className='schemaSection flex flex-col justify-between pb-5 items-center'>
        <div className='w-[60%]'>
          <Head />
        </div>
        <article className='flex flex-col lg:flex-row items-center justify-center lg:justify-center gap-10 lg:gap-32'>
            <Schema1 />
        </article>

         {/* Footer Logo */}
        <img src={brlLogo} alt="brl_logo" className='w-[10rem] aspect-auto invert' />
    </section>
  )
}

export default Schema