import React from 'react'

import { AuthContext } from './AuthProvider'

export const useAuth = () => {
  React.useContext(AuthContext)

  // Examples:
  return {
    client: () => {},
    user: null,
    authenticated: false,
    loading: false,
    login: () => {},
    logout: () => {},
    getAuthToken: () => {},
  }
}
