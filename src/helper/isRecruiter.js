import React from 'react'
import { Navigate } from 'react-router-dom'
import swal from 'sweetalert'

const AuthRecruiter = ({children}) => {
  const isAuth = localStorage.getItem('PeworldAdmin')
  if (!isAuth){
    swal({
        title: "Access!",
        text: `Access Denied, Please Login!`,
        icon: "error",
    });  
    return (
      <Navigate to="/recruiter/login" replace />
    )
  }
  return children
}

export default AuthRecruiter