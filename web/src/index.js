import { AuthProvider } from '@redwoodjs/auth'
import ReactDOM from 'react-dom'
import { RedwoodProvider } from '@redwoodjs/web'
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
