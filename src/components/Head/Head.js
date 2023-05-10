import React, { useState } from 'react'
import './Head.css'
import Modal from 'react-modal';

const Head = () => {
  const blockverseLogo = "/assets/blockverseLogo.png"
  return (
    <article className='flex flex-col items-center justify-center py-10 gap-4'>
      <img src={blockverseLogo} className='w-1/3 sm:w-2/5' alt="" />
      <div className='flex flex-col items-center justify-center text-white gap-4 headDiv'>
          <h1 className='text-4xl sm:text-5xl md:text-4xl text-center'>PHASE I - PROJECT BUILDING</h1>
          <h1 className='text-3xl sm:text-4xl md:text-3xl tracking-widest'>&lt;WEB_DEV /&gt;</h1>
      </div>
    </article>

  )
}

export default Head