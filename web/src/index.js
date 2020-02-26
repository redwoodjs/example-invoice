import ReactDOM from 'react-dom'
import { RedwoodProvider, FatalErrorBoundary } from '@redwoodjs/web'

import theme from 'src/lib/theme'

import Routes from './Routes'
import './index.css'

ReactDOM.render(
  <FatalErrorBoundary>
    <RedwoodProvider theme={theme}>
      <Routes />
    </RedwoodProvider>
  </FatalErrorBoundary>,
  document.getElementById('redwood-app')
)

