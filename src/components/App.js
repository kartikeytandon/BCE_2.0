import React, { useState, useEffect, useRef } from 'react'
import Header from './Header'
import html2canvas from 'html2canvas';
import { Route, Routes } from 'react-router-dom';
import Leaderboard from './Leaderboard';
import EditorComp from './EditorComp';

function App() {
  // const iframeRef = useRef(null);
  const [screenshot, setScreenshot] = useState(null);
  
  // const [ expanded, setExpanded] = useState(false);
  
  // const handleScreenshot = () => {
  //   html2canvas(iframeRef.current.contentDocument.body).then(canvas => {
  //     const img = canvas.toDataURL();
  //     setScreenshot(img);
  //   });
  // };

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<EditorComp />} />
        <Route path='/leaderboard' element={<Leaderboard />} />
      </Routes>
    </>
  )
}

export default App;