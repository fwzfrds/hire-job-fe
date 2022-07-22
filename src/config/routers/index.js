import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Notification from '../../pages/jobseeker/notification/notification';
import LandingPage from '../../pages/landing page/landingPage';
import Hiring from '../../pages/recruiter/hiring/hiring';
import Profile from '../../pages/recruiter/profile';
import ProfileEdit from '../../pages/recruiter/profileEdit';
import Testing from '../../pages/testing/testing';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/profile-edit' element={<ProfileEdit />} />
        <Route path='/hiring' element={<Hiring />} />
        <Route path='/notification' element={<Notification />} />
        <Route path='/test' element={<Testing />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router