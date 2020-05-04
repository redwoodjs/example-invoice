import ReactDOM from 'react-dom'
import { RedwoodProvider, FatalErrorBoundary } from '@redwoodjs/web'
import { AuthProvider, useAuth } from '@redwoodjs/auth'
import { Auth0Client } from '@auth0/auth0-spa-js'

import Routes from './Routes'
import './index.css'

const auth0 = new Auth0Client({
  domain: 'billable.eu.auth0.com',
  client_id: 'QOsYIlHvCLqLzmfDU0Z3upFdu1znlkqK',
  redirect_uri: 'http://localhost:8910/',
  cacheLocation: 'localstorage',
})

ReactDOM.render(
  <FatalErrorBoundary>
    <AuthProvider client={auth0} type="auth0">
      <RedwoodProvider useAuth={useAuth}>
        <Routes />
      </RedwoodProvider>
    </AuthProvider>
  </FatalErrorBoundary>,
  document.getElementById('redwood-app')
)
