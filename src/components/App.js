import React, { useState, useEffect, useRef } from 'react'
import Header from './Header'
import html2canvas from 'html2canvas';
import { Route, Routes } from 'react-router-dom';
import Leaderboard from './Leaderboard';
import EditorComp from './EditorComp';
import Login from './Login';
import Home from './Home';
import { gapi } from 'gapi-script';
import Submitted from './Submitted';

const clientId = "908559699410-r9n223pa37dahsb359kr91pge6qv4tjh.apps.googleusercontent.com"

function App() {
  // const iframeRef = useRef(null);
  const [screenshot, setScreenshot] = useState(null);
  // const [accessToken, setAccessToken] = useState('');

  // useEffect(() => {
  //   function start() {
  //     gapi.client.init({
  //       clientId: clientId,
  //       scope: ""
  //     }).then(() => {
  //       const user = gapi.auth2.getAuthInstance().currentUser.get();
  //       if (user.isSignedIn()) {
  //         setAccessToken(user.getAuthResponse().access_token);
  //       }
  //     });
  //   }

  //   gapi.load('client:auth2', start);
  //   console.log(accessToken);
  // }, []);

  const [accessToken, setAccessToken] = useState('');

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: "",
        hosted_domain: 'akgec.ac.in'
      }).then(() => {
        const user = gapi.auth2.getAuthInstance().currentUser.get();
        if (user.isSignedIn()) {
          setAccessToken(user.getAuthResponse().access_token);
        }
      });
    }

    gapi.load('client:auth2', start);
  }, []);


  return (
    <>
      {/* <Header /> */}
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/schemas' element={<Home />} />
        <Route path='/blockverse' element={<EditorComp />} />
        <Route path='/leaderboard' element={<Leaderboard />} />
        <Route path='/submitted' element={<Submitted />} />
      </Routes>

    </>
  )
}

export default App;

// Client_ID: 908559699410-r9n223pa37dahsb359kr91pge6qv4tjh.apps.googleusercontent.com
// Client_Secret: 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