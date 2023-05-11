import React from 'react'
import Head from '../../components/Head/Head'
import Schema1 from './Schema1'
import './Schema.css'

const Schema = () => {
  return (
    <section className='schemaSection'>
        <Head />
        <article className='flex flex-col lg:flex-row items-center justify-center lg:justify-center gap-10 lg:gap-32'>
            <Schema1 />
        </article>
    </section>
  )
}

export default Schema