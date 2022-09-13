import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Auth from '../pages/Auth'

const site_routes = props => {
  return (
    <React.Fragment>
      <Routes>
          <Route path="/signin" element={<Auth page='signin'/>}></Route>
          <Route path="/signup" element={<Auth page='signup'/>}></Route>
          <Route path="/" element={<Auth page='signin'/>}></Route>
      </Routes>
    </React.Fragment>
  )
}

export default site_routes