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
      {/* <Route path="/preview" page={PreviewPage} name="preview" /> */}

      <Private unauthenticated="home">
        <Route path="/invoices" page={InvoicesPage} name="invoices" />
        <Route path="/invoice/{id}" page={InvoicePage} name="invoice" />
      </Private>

      <Route path="/" page={LandingPage} name="home" />
    </Router>
  )
}

export default Routes
