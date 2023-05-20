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
import Protected from './Pages/Protected';

const clientId = "908559699410-r9n223pa37dahsb359kr91pge6qv4tjh.apps.googleusercontent.com"
const scope = "email profile"

function App() {
  const [screenshot, setScreenshot] = useState(null);

  const [accessToken, setAccessToken] = useState('');

  // useEffect(() => {
  //   function start() {
  //     gapi.client.init({
  //       clientId: clientId,
  //       scope: scope,
  //     }).then(() => {
  //       const user = gapi.auth2.getAuthInstance().currentUser.get();
  //       if (user.isSignedIn()) {
  //         setAccessToken(user.getAuthResponse().access_token);
  //         console.log(accessToken);
  //       }
  //     });
  //   }

  //   gapi.load('client:auth2', start);
  // }, [accessToken]);

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: scope,
      }).then(() => {
        const user = gapi.auth2.getAuthInstance().currentUser.get();
        if (user.isSignedIn()) {
          const token = user.getAuthResponse().access_token;
          setAccessToken(token);
          console.log(token);
        }
      });
    }
  
    gapi.load('client:auth2', start);
  }, []);


  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/schema' element={<Protected><Schema /></Protected>} />
        <Route path='/blockverse' element={<Protected><EditorComp /></Protected>} />
        <Route path='/leaderboard' element={<Protected><Leaderboard /></Protected>} />
        <Route path='/submitted' element={<Protected><Submitted /></Protected>} />
        <Route path='/logout' element={<Logout />} />
      </Routes>
    </>
  )
}

export default App;

// Client_ID: 908559699410-r9n223pa37dahsb359kr91pge6qv4tjh.apps.googleusercontent.com
// Client_Secret: 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

{/* <Route path='/schema' element={<Schema />} /> */}
{/* <Route path='/blockverse' element={<EditorComp />} />
<Route path='/leaderboard' element={<Leaderboard />} />
<Route path='/submitted' element={<Submitted />} /> */}