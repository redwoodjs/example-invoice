import {
  BrowserRouter,
  Switch,
  Route,
  Private,
  Redirect,
  useAuth,
} from '@hammerframework/hammer-web'
import Demo from 'src/pages/Demo'
import Invoice from 'src/pages/Invoice'

const URL_DEMO = '/try'
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
        <Route exact path={URL_DEMO} component={Demo} />
        <Private>
          <Switch>
            <Route exact path={URL_LATEST_INVOICE} component={Invoice} />
            <Route exact path="/invoice/:id" component={Invoice} />
          </Switch>
        </Private>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
