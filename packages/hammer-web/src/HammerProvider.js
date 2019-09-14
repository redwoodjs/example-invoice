import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider as RealThemeProvider } from 'styled-components'

import { GraphQLProvider as RealGraphQLProvider } from 'src/graphql'

let USE_AUTH
export const useAuth = () => {
  return USE_AUTH()
}

const HammerProvider = ({ auth = {}, theme, children }) => {
  const AuthProvider = auth.AuthProvider || React.Fragment
  const GraphQLProvider = auth.GraphQLProvider || RealGraphQLProvider
  USE_AUTH = auth.useAuth || (() => ({}))

  const ThemeProvider =
    typeof theme !== 'undefined' ? RealThemeProvider : React.Fragment

  return (
    <AuthProvider>
      <GraphQLProvider>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </GraphQLProvider>
    </AuthProvider>
  )
}

HammerProvider.propTypes = {
  auth: PropTypes.shape({
    AuthProvider: PropTypes.func.isRequired,
    useAuth: PropTypes.func.isRequired,
    GraphQLProvider: PropTypes.func.isRequired,
  }),
  client: PropTypes.func,
  theme: PropTypes.object,
}

export default HammerProvider
