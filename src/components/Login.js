import React from 'react'
import { Link } from 'react-router-dom'
const brlWhiteLogo = "/assets/brlWhiteLogo.png"

const Login = () => {
  return (
    <section className='bg-blue-500 h-screen'>
        <div className='w-fit mx-auto py-20'>
            <img src={brlWhiteLogo} alt="" />
        </div>
        <article className='border w-fit text-center p-10 mx-auto'>
            <h2 className='text-4xl text-white pb-4'>Blockverse 2.0</h2>
            <div className='m-4 ml-0 mr-0'>
                <input type="text" placeholder='Username' className='w-64 h-8 outline-none pl-2' />
            </div>
            <div className='m-4 ml-0 mr-0'>
                <input type="password" placeholder='Password' className='w-64 h-8 outline-none pl-2' />
            </div>
            <div className='mt-6'>
                <Link className='border py-2 px-4 text-white' to={'/home'}>
                    Login
                </Link>
            </div>
        </article>
    </section>
  )
}

export default Login