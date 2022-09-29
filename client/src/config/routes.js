import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Auth from '../pages/Auth'
import Home from './../pages/Home/Home'
import Profile from '../pages/Profile/Profile'

const site_routes = props => {
  return (
    <React.Fragment>
      <Routes>
          <Route path="/signin" element={<Auth page='signin'/>}></Route>
          <Route path="/signup" element={<Auth page='signup'/>}></Route>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/profile" element={<Profile />}></Route>
      </Routes>
    </React.Fragment>
  )
}

export default site_routes