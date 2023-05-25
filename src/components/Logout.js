import React, { useState } from 'react';
import { GoogleLogout } from 'react-google-login';
import { Navigate } from 'react-router-dom';

const clientId = "908559699410-r9n223pa37dahsb359kr91pge6qv4tjh.apps.googleusercontent.com";

const Logout = () => {
  const [loggedOut, setLoggedOut] = useState(false);

  const onSuccess = () => {
    console.log("Logged Out");
    setLoggedOut(true);
    localStorage.removeItem('remainingTime');
  };

  if (loggedOut) {
    localStorage.removeItem('remainingTime');
    return <Navigate to="/" />;
  }

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText={'Log out'}
        onLogoutSuccess={onSuccess}
      />
    </div>
  );
};

export default Logout;


// // import React, { useState, useEffect } from 'react';
// // import { GoogleLogout } from 'react-google-login';
// // import { Navigate, useNavigate } from 'react-router-dom';
// // import Cookies from 'js-cookie';

// // const clientId = "908559699410-r9n223pa37dahsb359kr91pge6qv4tjh.apps.googleusercontent.com";

// // const Logout = () => {
// //   const [loggedOut, setLoggedOut] = useState(false);
// //   const accessToken = Cookies.get('accessToken');

// //   const onSuccess = () => {
// //     console.log("Logged Out");
// //     setLoggedOut(true);
// //     localStorage.removeItem('remainingTime');
// //   };

// //   useEffect(() => {
// //     if (!loggedOut) {
// //       onSuccess();  
// //     }
// //   }, [loggedOut]);

// //   if(loggedOut) {
// //     Cookies.remove('accessToken')
// //     return (
// //       <Navigate
// //         to={{
// //           pathname: '/',
// //         }}
// //       />
// //     )
// //   }

// //   return (
// //     <div>
// //       <GoogleLogout
// //         clientId={clientId}
// //         buttonText="Log out"
// //         onLogoutSuccess={onSuccess}
// //       />
// //     </div>
// //   );
// // };

// // export default Logout;


// import React, { useState, useEffect } from 'react';
// import { GoogleLogout } from 'react-google-login';
// import { Navigate } from 'react-router-dom';
// import Cookies from 'js-cookie';

// const clientId = "908559699410-r9n223pa37dahsb359kr91pge6qv4tjh.apps.googleusercontent.com";

// const Logout = () => {
//   const [loggedOut, setLoggedOut] = useState(false);
//   const [accessToken, setAccessToken] = useState(null);

//   const onSuccess = () => {
//     console.log("Logged Out");
//     setLoggedOut(true);
//     localStorage.removeItem('remainingTime');
//   };

//   useEffect(() => {
//     const token = Cookies.get('accessToken');
//     setAccessToken(token);
//   }, []);

//   useEffect(() => {
//     if (!loggedOut) {
//       onSuccess();
//     }
//   }, [loggedOut]);

//   if (typeof window !== 'undefined' && !accessToken) {
//     Cookies.remove('accessToken');
//     return (
//       <Navigate
//         to={{
//           pathname: '/',
//         }}
//       />
//     );
//   }

//   return (
//     <div>
//       <GoogleLogout
//         clientId={clientId}
//         buttonText="Log out"
//         onLogoutSuccess={onSuccess}
//       />
//     </div>
//   );
// };

// export default Logout;
