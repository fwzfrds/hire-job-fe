import React from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Profile from '../../pages/recruiter/profile';
import ProfileEdit from '../../pages/recruiter/profileEdit';
import Testing from '../../pages/testing/testing';

const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/profile' element={<Profile />} />
      <Route path='/profile-edit' element={<ProfileEdit />} />
      <Route path='/test' element={<Testing />} />
    </Routes>
    </BrowserRouter>
  )
}

export default Router