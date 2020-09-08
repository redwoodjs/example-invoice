import { Router, Route, Private } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Private unauthenticated="home">
        <Route path="/invoices" page={InvoicesPage} name="invoices" />
        <Route path="/invoice/{id}" page={InvoicePage} name="invoice" />
      </Private>

      <Route path="/" page={LandingPage} name="" />
      <Route page={() => 'Uh oh!'} notfound />
    </Router>
  )
}

export default Routes
