import React from 'react'
import { Navigate } from 'react-router-dom'
import swal from 'sweetalert'

const AuthUser = ({children}) => {
  const isAuth = localStorage.getItem('PeworldUser')
  if (!isAuth){
    swal({
        title: "Access!",
        text: `Access Denied, Please Login!`,
        icon: "error",
    });  
    return (
      <Navigate to="/jobseeker/login" replace />
    )
  }
  return children
}

export default AuthUser