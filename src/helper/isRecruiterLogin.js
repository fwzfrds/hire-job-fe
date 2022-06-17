import React from 'react'
import { Navigate } from 'react-router-dom'
import swal from 'sweetalert'

const IsRecruiterLogin = ({children}) => {
  const isAuth = localStorage.getItem('PeworldRecruiter')
  if (isAuth){
    swal({
        title: "Access",
        text: `Anda Sudah Login!`,
        icon: "error",
    });
     
    return (
      <Navigate to={-1} replace />
    )
  }
  return children
}

export default IsRecruiterLogin