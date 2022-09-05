import React from 'react'
import {Routes,Route} from 'react-router-dom'
import SignIn from './../pages/SignIn'
import SignUp from './../pages/SignUp'

const site_routes = props => {
  return (
    <React.Fragment>
      <Routes>
          <Route path="/signin" element={<SignIn/>}></Route>
          <Route path="/signup" element={<SignUp/>}></Route>
      </Routes>
    </React.Fragment>
  )
}

export default site_routes