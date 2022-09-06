import React from 'react'
import {Routes,Route} from 'react-router-dom'
import SignIn from './../pages/SignIn'
import SignUp from './../pages/SignUp'
import Home from './../pages/Home/Home'

const site_routes = props => {
  return (
    <React.Fragment>
      <Routes>
          <Route path="/signin" element={<SignIn/>}></Route>
          <Route path="/signup" element={<SignUp/>}></Route>
          <Route path="/" element={<Home/>}></Route>
      </Routes>
    </React.Fragment>
  )
}

export default site_routes