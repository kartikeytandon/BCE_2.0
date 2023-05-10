import React, { useEffect, useState } from 'react'
import Modal from 'react-modal';
import { Link, Navigate } from "react-router-dom";
import Leaderboard from './Leaderboard';
import Logout from './Logout';
import EditorComp from './EditorComp/EditorComp';
import axios from 'axios';
import Cookies from 'js-cookie';
// import blockverseLogo from '../../public/assets/blockverseLogo.png'
// import headerBg from '../../public/assets/HeaderBg.png'


const Header = (props) => {
  const blockverseLogo = "/assets/blockverseLogo.png"
  const scoreBg = "/assets/ScoreBg.png"
  const taskIcon = "/assets/TaskIcon.png"
  const checkIcon = "/assets/CheckIcon.png"
  const leaderboardIcon = "/assets/LeaderboardIcon.png"
  const submitIcon = "/assets/SubmitIcon.png"
  const schema = "/assets/schemaSample.png"

  const accessToken = Cookies.get('accessToken');

  const [isCheck, setIsCheck] = useState(false)
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [submitted, setSubmitted] = useState(false)
  const [disabled, setDisabled] = useState(false);
  const [currScore, setCurrScore] = useState(() => {
  const score = localStorage.getItem('currScore')
  return score ? Number(score) : 0
});

  useEffect(() => {
    localStorage.setItem('currScore', currScore);
  }, [currScore]);

  // localStorage.setItem('currentScore', 0);

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
  
  const handleCheck = () => {
    setIsCheck(true);
    alert('you can now submit your response!');
  
    // let html_code = `${props.html}`
    let html_code = props.html.replace(/(\r\n|\n|\r)/gm, "")
    let css_code = props.css.replace(/(\r\n|\n|\r)/gm, "")

    console.log(html_code);
    console.log(css_code);

    
    axios.post('http://43.206.130.198/score/', { html_code, css_code }, {
      headers: {
        Authorization: `Token ${accessToken}`
      }
    })
    .then(response => {
      console.log(response.data);
      let cScore = response.data.score
      localStorage.setItem('currentScore', cScore)
      // let currentSavedScore = localStorage.getItem('currentScore')
      setCurrScore(localStorage.getItem('currentScore'))
      
    })
    .catch(error => {
      console.error(error);
    });
    
    // console.log(html_code);
    // console.log(css_code);
  }

  const finalSubmit = () => {
    console.log(props.html)
    console.log(props.css)
    let html_code = props.html
    let css_code = props.css
    let submitted = true
    setSubmitted(true)
    axios.post('http://43.206.130.198/submit/', { html_code, css_code, submitted }, {
      headers: {
        Authorization: `Token ${accessToken}`
      }
    })
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error(error);
        });  
  }

  if(submitted) {
    return (
      <Navigate
        to={{
          pathname: '/submitted',
        }}
      />
    )
  }

  const finalSubmitCheck = () => {
    const result = window.confirm("Are you sure you want to submit?")
    if(result) {
      finalSubmit()
    }
  }
  return (
    <header className='flex items-center justify-between px-6'>
        <img src={blockverseLogo} alt="" className='w-1/6 p-2' />
        <div id='score'>
          <h1 className='text-xl font-semibold'>Current Score: {currScore}</h1>
        </div>
        <nav className='flex gap-4'>
          <div className='flex'>
            <button onClick={openModal} className='headBtn flex items-center gap-2 px-5 py-2'>
              <span className='text-xl'>TASK</span>
              <img src={taskIcon} alt="" className='ml-2' />
            </button>
          </div>
          <div className='flex'>
              <button className='headBtn flex items-center gap-2 px-5 py-2'>
              <span className='text-xl'>LEADERBOARD</span>
              <Link to="/leaderboard">
                <img src={leaderboardIcon} alt="" className='ml-2' />
              </Link>
            </button>
          </div>
          <div className='flex'>
            <button onClick={() => {
              handleCheck()
            }} className='headBtn flex items-center gap-2 px-5 py-2'>
              <span className='text-xl'>CHECK</span>
              <img src={checkIcon} alt="" className='ml-2' />
            </button>
          </div>

            {
                isCheck 
                    ? <div className='flex'>
                    <button onClick={finalSubmitCheck} className='headBtn flex items-center gap-2 px-5 py-2'>
                      <span className='text-xl'>SUBMIT</span>
                      <img src={submitIcon} alt="" className='ml-2' />
                    </button>
                  </div>
                    : <div disabled className='flex'>
                    <button className='headBtn flex items-center gap-2 px-5 py-2'>
                    <span className='text-xl text-gray-500'>SUBMIT</span>
                      <img src={submitIcon} alt="" className='ml-2' />
                    </button>
                  </div>
            }
        </nav>
        <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        >
            <div className='flex flex-col justify-center items-center gap-4'>
                <div className='flex items-center gap-4'>
                  <button className='tracking-wide py-2 px-4' onClick={closeModal}>CLOSE</button>
                  <button className='tracking-wide py-2 px-4' onClick={closeModal}>ASSETS</button>
                </div>
                <h1 className='text-4xl tracking-wider text-center'>PREVIEW</h1>
            </div>
            <div className='flex justify-center my-8'>
              <img src={schema} alt="" className='w-3/4' />
            </div>
        </Modal>
    </header>
  )
}

export default Header