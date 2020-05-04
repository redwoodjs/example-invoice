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

// Figure out a way to redirect the user when they're not logged in.
// I want to show a landing page for user's that don't have an account
// and an actual invoice for user's that do have an account.

// some sort of redirect on auth component.
// another component that will take you back to login.

// const PrivateRoute = ({ redirectTo, page: Page, ...rest }) => {
//   const PrivatePage = (props) => {
//     const { loading, authenticated } = useAuth()

//     if (loading) {
//       return null
//     }

//     console.log(authenticated)

//     if (authenticated) {
//       return <Page {...props} />
//     } else {
//       console.log(redirectTo)
//       return null
//     }
//   }

//   console.log('pew')

//   return <Route page={() => null} {...rest} />
// }

const Routes = () => {
  return (
    <Router useAuth={useAuth}>
      <Route path="/" page={LandingPage} name="landing" />
      <PrivateRoute path="/invoices" page={() => 'china!'} name="invoice" />
    </Router>
  )
}

export default Routes
