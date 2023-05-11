import React, { useState } from 'react'
import './Head.css'
// import blockverseLogo from '../../assets/blockverseLogo.png'
import Modal from 'react-modal';

const Head = () => {
  const blockverseLogo = "/assets/blockverse_logo.svg"
  return (
    <article className='flex flex-col items-center justify-center'>
      <img src={blockverseLogo} className='w-[80%] blockverse_logo' alt="" />
      <div className='flex flex-col items-center justify-center text-white headDiv'>
          <h1 className='text-2xl text-center'>PHASE I - PROJECT BUILDING</h1>
          <h1 className='text-lg tracking-widest'>&lt;WEB_DEV /&gt;</h1>
      </div>
    </article>

  )
}

export default Head