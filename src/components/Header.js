import React, { useState } from 'react'
import Modal from 'react-modal';
import { Link } from "react-router-dom";
import Leaderboard from './Leaderboard';
import Logout from './Logout';
import EditorComp from './EditorComp';
import axios from 'axios';

const Header = (props) => {

  // Image Import
  const brlLogo = "/assets/brllogo.png"
  const schema = "/assets/randomSchema.png"

  const [isCheck, setIsCheck] = useState(false)
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
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
  
  const handleCheck = () => {
    setIsCheck(true)
    alert('you can now submit your response!')
  }
  const finalSubmit = () => {
    console.log(props.html)
    console.log(props.css)
    let html_code = props.html
    let css_code = props.css
    let submitted = true
    axios.post('http://43.206.130.198/submit/', { html_code, css_code, submitted })
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error(error);
        });
  }
  return (
    <header className='flex items-center justify-between mx-8'>
        <img src={brlLogo} alt="" className='w-1/6' />
        <nav className='flex gap-4'>
            <button onClick={openModal} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                Task
            </button>
            <button onClick={handleCheck} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                Check
            </button>
            <Link to="/leaderboard" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                Leaderboard
            </Link>
            {/* <button className=' bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'> */}
              <Logout />
            {/* </button> */}

            {
                isCheck 
                    ? <button type="submit" className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded' onClick={finalSubmit}>Final Submit</button>
                    : <button disabled className='bg-gray-500 text-gray-400 font-bold py-2 px-4 rounded cursor-not-allowed'>Final Submit</button>
            }
        </nav>
        <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        >
            <button onClick={closeModal} className='bg-red-500 text-white font-bold py-2 px-4 rounded uppercase hovfer:bg-red-600'>close</button>
            <img src={schema} alt="" />
        </Modal>
    </header>
  )
}

export default Header