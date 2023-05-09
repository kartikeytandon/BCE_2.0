import React, { useState } from 'react'
import Modal from 'react-modal';
import { Navigate } from 'react-router-dom';

const Schema1 = () => {
  const schemaSample = "/assets/schemaSample.png"
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          width: '80%',
          height: '90%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'rgba(0, 10, 39, 0.82)',
          mixBlendMode: 'normal',
          border: '2px solid #2E003A',
          backdropFilter: 'blur(8.5px)',
          borderRadius: '20px',
        },
      };      

  const [modalIsOpen, setIsOpen] = useState(false)
  const [start, setStart] = useState(false)

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }  
  function startCode() {
    setStart(true)
  }
  if(start) {
    return (
        <Navigate to='/blockverse' />
    )
  }
  return (
    <div className='schema w-fit flex flex-col justify-center items-center gap-4 px-8 py-4'>
        <h1 className='text-xl tracking-wide'>SCHEMA - 1</h1>
        <img src={schemaSample} alt="" className='w-52' />
        <button className='tracking-wide py-2 px-4' onClick={openModal}>SELECT</button>

        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
        >   
        <div>
            <h1 className='text-3xl tracking-wide text-center'>SCHEMA - 1</h1>
            <div id='warning'>
                <p className='text-bold text-xl tracking-wider text-center py-2 mx-4 my-2'>YOU CANNOT REVERT THIS ACTION. CHOOSE WISELY!</p>
            </div>
            <div className='flex justify-center my-8'>
                <img src={schemaSample} alt="" className='w-2/4' />
            </div>
            <div className='flex items-center justify-center gap-8'>
                <button className='tracking-wide py-2 px-4' onClick={closeModal}>RETURN</button>
                <button className='tracking-wide py-2 px-4' onClick={startCode}>START</button>
            </div>
        </div>

        </Modal>
    </div>
  )
}

export default Schema1