import type { ReactNode } from 'react'
import React from 'react'

export const AuthContext = React.createContext({})

export const AuthProvider = ({
  children,
  type,
  client,
}: {
  children: ReactNode
  type: 'auth0' | 'netlify'
  client: () => {}
}): JSX.Element => {
  console.log('what type did we get?', type, client)
  // TODO: Take the type and the client and map the functions into something
  // generic.
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>
}
