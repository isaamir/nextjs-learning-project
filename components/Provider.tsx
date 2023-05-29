"use client"

import React from 'react'
import  { SessionProvider } from 'next-auth/react'

interface IProviderProps {
  children?: any,
  session?: any
}

// the Provider goes to the layout component to be used in the entire app
const Provider:React.FC<IProviderProps> = ({ children, session }) => {
  return (
    <SessionProvider session={session}>
      {children}
    </SessionProvider>
  )
}

export default Provider