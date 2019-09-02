import {
  BrowserRouter,
  Switch,
  Route,
  AuthRoute
} from "@hammerframework/hammer-web";

import InvoicePage from "./InvoicePage";
import Profile from "./Profile";
import Test from "./Test";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={InvoicePage} />
        <AuthRoute path="/profile" component={Profile} />
        <AuthRoute path="/test" component={Test} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
