import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom';

const Protected = (props) => {
  
  const loggedInState = localStorage.getItem('loggedIn');
  const {Component} = props
  if (loggedInState !== 'true') {
    return <Navigate to="/" />;
  }
  return (
    <div>
        {props.children}
    </div>
  )
}

export default Protected