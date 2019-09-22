import {
  BrowserRouter,
  Switch,
  Route,
  PrivateRoute,
} from '@hammerframework/hammer-web'

import DemoInvoice from './DemoInvoice'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute
          exact
          path="/"
          redirectTo="/invoice/demo"
          component={() => 'TODO'}
        />
        <Route exact path="/invoice/demo" component={DemoInvoice} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
