import React, { useState } from "react"

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogOut: () => {},
  onLogIn: () => {}
})

export const AuthProvider = props => {
  
  const [isLoggedIn,setIsLoggedIn] = useState(false)


  const logOutHandler = () => {
   
  }

  const logInHandler = () => {
   
  }

  return <AuthContext.Provider value={
    {
      isLoggedIn: isLoggedIn,
      onLogOut: logOutHandler,
      onLogIn: logInHandler
    }
  }></AuthContext.Provider>
}

export default AuthContext;