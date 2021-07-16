import React, { useState, useContext } from 'react'
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState(parseInt('0'))
  const [seatCount, setSeatCount] = useState(parseInt('0'))
  return (
    <AppContext.Provider
      value={{
        cartItem,
        setCartItem,
        seatCount,
        setSeatCount,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

// custom hook

export const useGlobalContext = () => {
  return useContext(AppContext)
}
export { AppContext, AppProvider }
