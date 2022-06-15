import React from 'react'
import { Navigate } from 'react-router-dom'
import swal from 'sweetalert'

const AuthAdmin = ({children}) => {
  const isAuth = localStorage.getItem('PeworldRecruiter')
  if (!isAuth){
    swal({
        title: "Access!",
        text: `Access Denied, Please Login!`,
        icon: "error",
    });  
    return (
      <Navigate to="/login-admin" replace />
    )
  }
  return children
}

export default AuthAdmin