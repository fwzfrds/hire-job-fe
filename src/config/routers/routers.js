import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginJobSeeker from '../../pages/jobseeker/login/LoginJobseeker'
import RegisterJobseeker from '../../pages/jobseeker/register/RegisterJobseeker'
import RegisterRecruiter from '../../pages/recruiter/register/RegisterRecruiter'
import Main from '../../pages/main/Main'
import Page404 from '../../pages/page404/Page404'
import LoginRecruiter from '../../pages/recruiter/login/LoginRecruiter'
import HomeRecruiter from '../../pages/recruiter/home/HomeRecruiter'
import ResetPassJobseeker from '../../pages/jobseeker/resetPassword/ResetPassJobseeker'


const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/jobseeker/register" element={<RegisterJobseeker />} />
        <Route path="/recruiter/register" element={<RegisterRecruiter />} />
        <Route path="/jobseeker/login" element={<LoginJobSeeker />} />
        <Route path="/jobseeker/reset-password" element={<ResetPassJobseeker />} />
        <Route path="/recruiter/login" element={<LoginRecruiter />} />
        <Route path="/recruiter/home" element={<HomeRecruiter />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Routers