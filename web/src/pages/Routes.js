import {
  BrowserRouter,
  Switch,
  Route,
  Private,
  Redirect,
  useAuth,
} from '@hammerframework/hammer-web'

const DEMO_INVOICE = '/demo'

import Invoice from './Invoice'
import DemoInvoice from './DemoInvoice'

const RedirectForAuthState = () => {
  const { loading, isAuthenticated } = useAuth()

  if (loading) {
    return null
  }

  if (isAuthenticated) {
    return <Redirect to="/invoice/latest" />
  } else {
    return <Redirect to={DEMO_INVOICE} />
  }
}

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={RedirectForAuthState} />
        <Route exact path={DEMO_INVOICE} component={DemoInvoice} />
        <Private>
          <Route exact path="/invoice/:id" component={Invoice} />
        </Private>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
