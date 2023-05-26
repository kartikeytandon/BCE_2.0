import React, { useState } from 'react'
import './Head.css'
import Modal from 'react-modal';

const Head = () => {
  const blockverseLogo = "/assets/blockverselogo.webp"
  return (
    <article className='flex flex-col items-center justify-center  pb-4 md:pb'>
      <img src={blockverseLogo} className='w-[70%] md:w-[45%] blockverse_logo' alt="" />
      <div className='flex flex-col items-center justify-center text-white headDiv md:p-0 py-2'>
          <h1 className='text-xl text-center'>PHASE I - PROJECT BUILDING</h1>
          <h1 className='text-base tracking-widest'>&lt;WEB_DEV /&gt;</h1>
      </div>
    </article>

  )
}

export default Head