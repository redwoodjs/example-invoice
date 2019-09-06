import {
  BrowserRouter,
  Switch,
  Route,
  AuthRoute
} from "@hammerframework/hammer-web";

import InvoicePage from "./InvoicePage";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={InvoicePage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
