import React, { useEffect, useState } from 'react'
import Modal from 'react-modal';
import { Link, Navigate } from "react-router-dom";
import Leaderboard from './Leaderboard';
import Logout from './Logout';
import EditorComp from './EditorComp/EditorComp';
import axios from 'axios';
import Cookies from 'js-cookie';
import Assets from './Assets';
import LogoTimer from './LogoTimer';
// import { encode, decode, Base64 } from 'js-base64';
import Base64, { decode } from 'base-64'
import Loader from './Loader';
import TeamCard from './TeamCard';
import {IoIosPeople} from "react-icons/io"

const Header = (props) => {
  
  const scoreBg = "/assets/ScoreBg.png"
  const taskIcon = "/assets/taskicon.webp"
  const checkIcon = "/assets/checkicon.webp"
  const leaderboardIcon = "/assets/leaderboardicon.webp"
  const submitIcon = "/assets/submiticon.webp"
  const schema = "/assets/schemasample.webp"

  const schemaUrl = localStorage.getItem('schemaImgUrl')

  // const accessToken = Cookies.get('accessToken');
  const accessToken = localStorage.getItem('accessToken')

  const [ isAssets, setIsAssets ] = useState(false)
  const [isCheck, setIsCheck] = useState(false)
  const [ isLoadingAfterCheck, setIsLoadingAfterCheck ] = useState(false)
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [submitted, setSubmitted] = useState(false)
  const [disabled, setDisabled] = useState(false);
  const [currScore, setCurrScore] = useState(() => {
  const score = localStorage.getItem('currScore')
  return score ? Number(score) : 0
});
  const [ isTeamModalOpen, setIsTeamModalOpen ] = useState(false)

  const [ isTeamVisible, setIsTeamVisible ] = useState(false)

  function mouseOnTeam(){
    setIsTeamVisible(true)
  }

  function mouseNotOnTeam(){
    setIsTeamVisible(false)
  }

  // let timeLeft = 20;

  // const checkDisabled = () => {
  //   const intervalId = setInterval(() => {
  //     timeLeft--;
  //     // console.log(`Time left: ${timeLeft}s`);
  
  //     if (timeLeft === 0) {
  //       clearInterval(intervalId)
  //       console.log('Timer ended!')
  //       setDisabled(false)
  //     }
  //   }, 3750);
  // }

  useEffect(() => {
    localStorage.setItem('currScore', currScore);
    localStorage.setItem('isSubmitted', submitted)
  }, [currScore]);

  // localStorage.setItem('currentScore', 0);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

   function openTeamModal(){
    setIsTeamModalOpen(true)
  }

  function closeTeamModal() {
    setIsTeamModalOpen(false)
  }

  const handleAsset = () => {
    setIsAssets(!isAssets)
    // console.log(isAssets)
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
      borderRadius: '20px',
    },
  };      
  
  const handleCheck = () => {
    setIsLoadingAfterCheck(true)
    setIsCheck(true)
    setDisabled(true)
    // checkDisabled()
    setTimeout(() => {setDisabled(false)}, 120000)
    // alert('you can now submit your response!');

    let html_code = props.html.replace(/(\r\n|\n|\r)/gm, "")
    let css_code = props.css.replace(/(\r\n|\n|\r)/gm, "") 

    // console.log(html_code);
    // console.log(css_code);

    // console.log(html_code);
    // console.log(css_code);
    
    
    axios.post('https://blockverseapi.brlakgec.com/score/', { html_code, css_code }, {
      headers: {  
        Authorization: `Token ${accessToken}`
      }
    })
    .then(response => {
      // console.log(response.data);
      if (response.data.status === 501) {
        alert(response.data.message);
      }  else {

        let cScore = response.data.score
        localStorage.setItem('currentScore', cScore)
        // let currentSavedScore = localStorage.getItem('currentScore')
        setCurrScore(localStorage.getItem('currentScore'))
        setIsLoadingAfterCheck(false)
      }
    })
    .catch(error => {
      console.error(error);
    });
    
    // console.log(html_code);
    // console.log(css_code);
  }

  // to clear the stored remaining time when the timer component unmounts
  useEffect(() => {
    return () => {
      localStorage.removeItem('remainingTime');
    };
  }, []);

  const finalSubmit = () => {
    // console.log(props.html)
    // console.log(props.css)
    let html_code = props.html
    let css_code = props.css
    // let submitted = true
    setSubmitted(true)
    axios.post('https://blockverseapi.brlakgec.com/submit/', { html_code, css_code }, {
      headers: {
        Authorization: `Token ${accessToken}`
      }
    })
        .then(response => {
            // console.log(response.data);
            localStorage.setItem('isSubmitted', true)
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
    <header className='flex items-center justify-between px-6 h-20'>
        {/* Logo with timer that appears as we hover it */}
        <LogoTimer html={props.html} css={props.css} />

        <div id='score' className='flex items-center gap-4'>
          <h1 className='text-xl font-semibold'>Current Score:</h1>
          <h1 className='text-xl font-semibold'> {isLoadingAfterCheck ? <Loader /> : currScore} </h1>
        </div>
        <nav className='flex gap-4'>
          <div className='flex'>
            <button onClick={openModal} className='headBtn flex items-center gap-2 px-5 py-2'>
              <span className='text-xl'>TASK</span>
              <img src={taskIcon} alt="" className='ml-2' />
            </button>
          </div>
          <div className='flex'>
            <Link to="/leaderboard">
              <button className='headBtn flex items-center gap-2 px-5 py-2'>
              <span className='text-xl'>LEADERBOARD</span>
       
                <img src={leaderboardIcon} alt="" className='ml-2' />
              
            </button>
            </Link>
          </div>
          {
            disabled ? 
            <div className='flex'>
              <button className='headBtn cursor-not-allowed flex items-center gap-2 px-5 py-2'>
                <span className='text-xl text-gray-500'>CHECK</span>
                <img src={checkIcon} alt="" className='ml-2 opacity-50' />
              </button>
            </div> : 
            <div className='flex'>
              <button onClick={() => {
                handleCheck()
              }} className='headBtn flex items-center gap-2 px-5 py-2'>
                <span className='text-xl'>CHECK</span>
                <img src={checkIcon} alt="" className='ml-2' />
              </button>
            </div>
          }

            {
                isCheck 
                    ? <div className='flex'>
                    <button onClick={finalSubmitCheck} className='headBtn flex items-center gap-2 px-5 py-2'>
                      <span className='text-xl'>SUBMIT</span>
                      <img src={submitIcon} alt="" className='ml-2' />
                    </button>
                  </div>
                    : <div disabled className='flex'>
                    <button className='headBtn flex cursor-not-allowed  items-center gap-2 px-5 py-2'>
                    <span className='text-xl text-gray-500'>SUBMIT</span>
                      <img src={submitIcon} alt="" className='ml-2 opacity-50' />
                    </button>
                  </div>
            }
            
        </nav>

            {/* TEAM BUTTON */}
        <div className='flex absolute bottom-5 right-5'>
            <button onClick={openTeamModal} onMouseEnter={mouseOnTeam} onMouseLeave={mouseNotOnTeam} className='headBtn rounded-full flex transition-width ease-in-out duration-500 items-center gap-2 p-2'>
              {/* <span className={`text-xl ${isTeamVisible ? 'w-auto' : 'w-0'} transition-width ease-in-out duration-500`}>{isTeamVisible && 'OUR TEAM'}</span> */}
              {/* {
                isTeamVisible && <span className='text-xl'>OUR TEAM</span>
              } */}
              <IoIosPeople fontSize={30} />
              {/* <img src={teamSVG} alt="" className='ml-2' /> */}
            </button>
          </div>

            {/* TEAM MODAL */}
           <Modal
        isOpen={isTeamModalOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeTeamModal}
        style={customStyles}
        contentLabel="Example Modal"
        overlayClassName="Overlay"
        >
            <div className='grid grid-rows-1 grid-cols-3 w-[100%]'>
              <div></div>

                <div>
                  <h1 className='text-4xl tracking-wider col-start-2 text-center self-center'>Creators</h1>
                </div>

                <div className='flex items-center gap-4 justify-self-end'>
                  <button className='tracking-wide w-fit py-2 px-4' onClick={closeTeamModal}>CLOSE</button>
                </div>
            </div>
            <div className='flex justify-center my-8'>
              {/* {
                isAssets ?
                  <Assets /> : 
                <img src={schemaUrl} alt="" className='w-3/4' />
              } */}

              <TeamCard />
            </div>
        </Modal>

        <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        overlayClassName="Overlay"
        >
            <div className='flex justify-between items-center'>
                <div>
                  <h1 className='text-4xl tracking-wider text-center self-center'>{ !isAssets ? 'PREVIEW' : 'ASSETS' }</h1>
                </div>

                <div className='flex items-center gap-4'>
                  <button className='tracking-wide py-2 px-4' onClick={closeModal}>CLOSE</button>
                  <button className='tracking-wide py-2 px-4' onClick={handleAsset}>
                    { isAssets ? 'PREVIEW' : 'ASSETS' }
                  </button>
                  
                </div>
            </div>
            <div className='flex justify-center my-8'>
              {
                isAssets ?
                  <Assets /> : 
                <img src={schemaUrl} alt="" className='w-3/4' />
              }
            </div>
        </Modal>
    </header>
  )
}

export default Header
