import ReactDOM from 'react-dom'
import { RedwoodProvider, FatalErrorBoundary } from '@redwoodjs/web'
import { AuthProvider } from '@redwoodjs/auth'
import createAuth0Client from '@auth0/auth0-spa-js'

import theme from 'src/lib/theme'

import Routes from './Routes'
import './index.css'

// create the auth client and pass it into the authprovider

ReactDOM.render(
  <FatalErrorBoundary>
    <AuthProvider type="auth0" client={createAuth0Client()}>
      <RedwoodProvider theme={theme}>
        <Routes />
      </RedwoodProvider>
    </AuthProvider>
  </FatalErrorBoundary>,
  document.getElementById('redwood-app')
)
