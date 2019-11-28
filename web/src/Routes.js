import {
  BrowserRouter,
  Switch,
  Route,
  PrivateRoute,
  Redirect,
  useAuth,
} from '@hammerframework/web'
//
import DemoInvoice from 'src/pages/Demo'
import Invoice from 'src/pages/Invoice'

const URL_DEMO = '/invoice/demo'
const URL_LATEST_INVOICE = '/invoice/latest'

const RedirectForAuthState = () => {
  const { loading, isAuthenticated } = useAuth()
  if (loading) {
    return null
  }
  return <Redirect to={isAuthenticated ? URL_LATEST_INVOICE : URL_DEMO} />
}

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={RedirectForAuthState} />
        <Route exact path={URL_DEMO} component={DemoInvoice} />
        <PrivateRoute exact path={URL_LATEST_INVOICE} component={Invoice} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
