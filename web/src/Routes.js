// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Private } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route path="/" page={LandingPage} name="home" />
      <Private unauthenticated="home">
        <Route path="/invoices" page={InvoicesPage} name="invoices" />

        <Route path="/invoice/{id}" page={InvoicePage} name="invoice" />
        <Route path="/invoice/new" page={InvoicesPage} name="newInvoice" />
      </Private>
    </Router>
  )
}

export default Routes
