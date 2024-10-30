/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext } from 'react'
import { doctors } from '../assets/assets_frontend/assets'



export  const AppContext = createContext()


export const AppContextProvider = (props) => {

    const currencySymboll = '$'
    const value = {
        doctors,
        currencySymboll
    }

    return(
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}


