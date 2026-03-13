import axios from 'axios'
import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'

import { createContext } from 'react'
import { authDataContext } from './AuthContext'
import { useEffect } from 'react'

export const userDataContext = createContext()

const UserContext = ({children}) => {
    let [userData, setUserData] = useState("")
    let {serverUrl} = useContext(authDataContext)


    const getCurrentUser = async()=>{
        try {
            let result = await axios.get(serverUrl + "/api/user/currentUser", { withCredentials: true })
            setUserData(result.data)
            console.log(result.data)
        } catch (error) {
          console.log(error)
          setUserData(null)
        }
    }

    useEffect(()=>{
        getCurrentUser()
    },[])

    let value={
        userData, setUserData, getCurrentUser
    }

  return (
    <div>
      <userDataContext.Provider value={value}>
        {children}
      </userDataContext.Provider>
    </div>
  )
}

export default UserContext