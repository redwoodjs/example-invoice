// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, PrivateRoute } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'

const Routes = () => {
  return (
    <Router useAuth={useAuth}>
      <Route unauthorized path="/" page={LandingPage} name="home" />
      <PrivateRoute path="/invoice" page={InvoicePage} name="invoice" />
    </Router>
  )
}

export default Routes
