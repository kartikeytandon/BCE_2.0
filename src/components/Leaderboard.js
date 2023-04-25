import React, { useState } from 'react'
import Modal from 'react-modal';

const Leaderboard = (props) => {
  const [leaderboardIsOpen, setLeaderboardIsOpen] = React.useState(false);

  function openLeaderboardModal() {
    setLeaderboardIsOpen(true);
  }
  function closeLeaderboardModal() {
    setLeaderboardIsOpen(false);
  }

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '90%',
      height: '90%',
    },
  };

  return (
    <section>
        <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        >
            <button onClick={closeModal} className='bg-red-500 text-white font-bold py-2 px-4 rounded uppercase hover:bg-red-600'>close</button>
            {/* <img src={schema} alt="" /> */}
            <h1>Phase - 1 Leaderboard</h1>
      </Modal>
    </section>
  )
}

export default Leaderboard