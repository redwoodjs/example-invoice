import ReactDOM from 'react-dom'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'
import { AuthProvider } from '@redwoodjs/auth'
import netlifyIdentity from 'netlify-identity-widget'

import Routes from './Routes'
import './index.css'

netlifyIdentity.init()

ReactDOM.render(
  <AuthProvider client={netlifyIdentity} type="netlify">
    <RedwoodApolloProvider>
      <Routes />
    </RedwoodApolloProvider>
  </AuthProvider>,
  document.getElementById('redwood-app')
)
