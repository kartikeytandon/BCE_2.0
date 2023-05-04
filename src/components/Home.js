import React from 'react'
import { Link } from 'react-router-dom'
const brlWhiteLogo = "/assets/brlWhiteLogo.png"

const Home = () => {
  return (
    <section className='bg-blue-500 h-screen'>
        <h2 className='text-4xl text-white pb-4 w-fit mx-auto pt-6'>Blockverse 2.0 Schemas</h2>
        <article className='flex flex-wrap mx-auto gap-8 w-fit pt-12 justify-center'>
            <div className='border w-fit p-8'>
                <Link to={'/blockverse'}>
                    <img className='w-36' src={brlWhiteLogo} alt="" />
                    <h2 className='text-xl text-white w-fit mx-auto pt-4'>Schema 1</h2>
                </Link>
            </div>
            <div className='border w-fit p-8'>
                <Link to={'/blockverse'}>
                    <img className='w-36' src={brlWhiteLogo} alt="" />
                    <h2 className='text-xl text-white w-fit mx-auto pt-4'>Schema 2</h2>
                </Link>
            </div>
            <div className='border w-fit p-8'>
                <Link to={'/blockverse'}>
                    <img className='w-36' src={brlWhiteLogo} alt="" />
                    <h2 className='text-xl text-white w-fit mx-auto pt-4'>Schema 3</h2>
                </Link>
            </div>
            <div className='border w-fit p-8'>
                <Link to={'/blockverse'}>
                    <img className='w-36' src={brlWhiteLogo} alt="" />
                    <h2 className='text-xl text-white w-fit mx-auto pt-4'>Schema 4</h2>
                </Link>
            </div>
        </article>
    </section>
  )
}

export default Home