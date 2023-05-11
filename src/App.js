import React, { useState, useEffect, useRef } from 'react'
import Header from './components/Header'
import html2canvas from 'html2canvas';
import { Route, Routes } from 'react-router-dom';
import Leaderboard from './components/Leaderboard';
import EditorComp from './components/EditorComp/EditorComp';
import Login from './components/Login';
// import Home from './components/home';
import { gapi } from 'gapi-script';
import Submitted from './components/Submitted';

// import Home from './Pages/Home/Home';
// import { Home } from "./Pages/Home"
import Logout from './components/Logout';
import Schema from './Pages/Schema/Schema';
import Home from './Pages/Home/Home';

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
        // hosted_domain: 'akgec.ac.in'
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
        {/* <Route path='/schemas' element={<Home />} /> */}
        <Route path='/blockverse' element={<EditorComp />} />
        <Route path='/leaderboard' element={<Leaderboard />} />
        <Route path='/submitted' element={<Submitted />} />

        {/* ***** */}
        <Route path='/newHome' element={<Home />} />
        <Route path='/logout' element={<Logout />} />
        <Route path='/schema' element={<Schema />} />
      </Routes>

    </>
  )
}

export default App;

// Client_ID: 908559699410-r9n223pa37dahsb359kr91pge6qv4tjh.apps.googleusercontent.com
// Client_Secret: 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