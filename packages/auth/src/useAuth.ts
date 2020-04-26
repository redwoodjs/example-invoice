import React from 'react'

import { AuthContext } from './AuthProvider'

// // authenticated,
// // loading,
// // user,
// login,
// logout

export const useAuth = () => {
  const ac = React.useContext(AuthContext)
  return ac
}
