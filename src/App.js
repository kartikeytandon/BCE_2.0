import React, { useState, useEffect, useRef } from 'react'
import Header from './components/Header'
import html2canvas from 'html2canvas';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
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

// Blocking context menu and prevent opening inspect ----> OFF in DEV Mode 
// TO BE TURNED ON IN DEPLOYMENT MODE

// const preventKeyboardShortcuts = (event) => {
//   if (event.keyCode === 123) {
//     event.preventDefault();
//   }
//   if (event.ctrlKey && event.shiftKey && event.keyCode === 'I'.charCodeAt(0)) {
//     event.preventDefault();
//   }
//   if (event.ctrlKey && event.shiftKey && event.keyCode === 'J'.charCodeAt(0)) {
//     event.preventDefault();
//   }
//   if (event.ctrlKey && event.keyCode === 'U'.charCodeAt(0)) {
//     event.preventDefault();
//   }
// };

// const preventRightClick = (event) => {
//   event.preventDefault();
// };

function App() {
  const [screenshot, setScreenshot] = useState(null);

  const [accessToken, setAccessToken] = useState('');


  const location = useLocation();
const navigate = useNavigate();

const [selectedSchema, setSelectedSchema] = useState(localStorage.getItem('selectedSchema'));
const [submitted, setSubmitted] = useState(localStorage.getItem('isSubmitted'));

// useEffect(() => {
//   console.log("Location Pathname:", location.pathname);
//   console.log("Selected Schema:", selectedSchema);

//   if (location.pathname === '/schema' && selectedSchema === 'true') {
//     console.log("Navigating to /blockverse");
//     navigate('/blockverse');
//   }
// }, [location.pathname, selectedSchema]);

// For preventing the navigation from blockverse route to schema route after the schema selection
// useEffect(() => {
//   console.log("Location Pathname:", location.pathname);
//   console.log("Selected Schema:", selectedSchema);

//   localStorage.setItem('schemaUpdated', true)

//   const targetRoute = '/blockverse';

//   // (location.pathname === '/schema' && localStorage.getItem('schemaUpdated') === 'true')
//   if ((location.pathname === '/schema' && selectedSchema === 'true')) {
//     console.log("Navigating to /blockverse");
//     navigate(targetRoute, { replace: true });
//   }
// }, [location.pathname, selectedSchema]);


// useEffect(() => {
//   console.log("Location Pathname:", location.pathname);
//   console.log("Selected Schema:", submitted);

//   localStorage.setItem('finallySubmitted', true)
  
//   const targetRoute = '/submitted';

//   // (location.pathname === '/blockverse' && localStorage.getItem('finallySubmitted') === 'true')
//   if ((location.pathname === '/blockverse' && submitted === 'true')) {
//     console.log("Navigating to /submitted");
//     navigate(targetRoute, { replace: true });
//   }
// }, [location.pathname, selectedSchema]);







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

  // Preventing console ----> TO BE TURNED ON IN DEPLOYMENT MODE

  //   useEffect(() => {
  //   document.addEventListener('keydown', preventKeyboardShortcuts, false);
  //   document.addEventListener('contextmenu', preventRightClick, false)
  //   return () => {
  //     document.removeEventListener('keydown', preventKeyboardShortcuts, false);
  //     document.removeEventListener('contextmenu', preventRightClick, false)
  //   };
  // }, []);

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