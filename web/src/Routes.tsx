import { Router, Route, Private } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Private unauthenticated="home">
        {/* <Route path="/invoices2 " page={InvoicesPage} name="invoices2" /> */}
        <Route path="/invoices" page={InvoicesPage} name="invoices" />
        <Route path="/invoice/{id}" page={InvoicePage} name="invoice" />
      </Private>

      <Route path="/" page={LandingPage} name="home" />
    </Router>
  )
}

export default Routes
