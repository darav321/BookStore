import React from 'react'
import { useAuth } from './context/AuthContext'
import {Navigate} from 'react-router-dom'

const PrivateRoutes = ({children}) => {
    const {currentUser, loading} = useAuth()

    if(loading) {
      return <div> loading</div>
    }
    if (currentUser) {
        return children
    }
  return <Navigate to={"/login"} replace/>
}

export default PrivateRoutes
