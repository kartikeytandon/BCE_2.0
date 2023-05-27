import React, { useEffect, useState } from 'react';
import { GoogleLogout } from 'react-google-login';
import { Navigate, useLocation } from 'react-router-dom';

const clientId = "908559699410-r9n223pa37dahsb359kr91pge6qv4tjh.apps.googleusercontent.com";

const Logout = () => {
  const location = useLocation()
  const [loggedOut, setLoggedOut] = useState(false);

  // useEffect(() => {
  //   if(location.pathname === '/blockverse' && (localStorage.getItem('isSubmitted') === 'true')) {
  //     document.getElementById('logoutId').click()
  //   }
  // }, [location.pathname, localStorage.getItem('isSubmitted')])

  const onSuccess = () => {
    console.log("Logged Out");
    setLoggedOut(true);
    localStorage.removeItem('remainingTime');
  };

  if (loggedOut) {
    localStorage.removeItem('remainingTime');
    return <Navigate to="/" />;
  }

  const CustomGoogleButton = ({ onClick }) => (
    <button onClick={onClick} className="custom-google-button px-6 py-2">
      LOGOUT
    </button>
  );

  return (
    <article className='w-fit text-center  mx-auto'>
        <GoogleLogout
          clientId={clientId}
          buttonText={'Log out'}
          onLogoutSuccess={onSuccess}
          render={renderProps => (
                <CustomGoogleButton onClick={renderProps.onClick} />
              )}
        />
    </article>
  );
};

export default Logout;