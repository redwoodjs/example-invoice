import ReactDOM from 'react-dom'
import { RedwoodProvider, FatalErrorBoundary } from '@redwoodjs/web'
import { AuthProvider } from '@redwoodjs/auth'
import netlifyIdentity from 'netlify-identity-widget'

import Routes from './Routes'
import './index.css'

netlifyIdentity.init()

ReactDOM.render(
  <AuthProvider client={netlifyIdentity} type="netlify">
    <RedwoodProvider>
      <Routes />
    </RedwoodProvider>
  </AuthProvider>,
  document.getElementById('redwood-app')
)
