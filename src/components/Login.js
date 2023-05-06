import React, { useState } from 'react'
import { GoogleLogin } from 'react-google-login'
import { Navigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';

const brlWhiteLogo = "/assets/brlWhiteLogo.png"

const clientId = "908559699410-r9n223pa37dahsb359kr91pge6qv4tjh.apps.googleusercontent.com"

const Login = () => {
  const location = useLocation();
    const [loggedIn, setLoggedIn] = useState(false);
    let email;
    let accessToken

  const onSuccess = (res) => {
    console.log("Login success", res.profileObj);
    // console.log(res.getAuthResponse().access_token);
    setLoggedIn(true)
    email = res.profileObj.email
    // console.log(email);

    axios.post('http://43.206.130.198/login/', { email })
        .then(response => {
            console.log(response.data);
            console.log(response.data.token);
            accessToken =  response.data.token
            // localStorage.setItem('accessToken', accessToken)
            Cookies.set('accessToken', accessToken);
        })
        .catch(error => {
            console.error(error);
        });
  }
  const onFailure = (res) => {
    console.log("Login failed", res);
  }

  if (loggedIn) {
    return (
      <Navigate
        to={{
          pathname: '/schemas',
          // state: { accessToken: accessToken } 
          // state: accessToken
        }}
      />
    )
  }


  return (
    <section className='bg-blue-500 h-screen'>
        <div className='w-fit mx-auto py-20'>
            <img src={brlWhiteLogo} alt="" />
        </div>
        <article className='border w-fit text-center p-10 mx-auto'>
            <div>
                <GoogleLogin
                    clientId={clientId}
                    buttonText="Login"
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                />
            </div>
        </article>
        
    </section>
  )
}

export default Login