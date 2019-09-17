import React, { useEffect } from 'react'
import { BrowserRouter, Route as RealRoute, Switch } from 'react-router-dom'

import { useAuth } from './HammerProvider'

// Routes that are passed in as children to `Private` get the
// `authRequired` prop.
export const Private = ({ children }) => {
  return React.Children.map(children, (child) => {
    return React.cloneElement(child, { authRequired: true })
  })
}

// `PrivateRoute` will wait to determine if a user is authenticated
// before routing them to the login or rendering the component.
// <Router>
//   <Route path="/" />
//   <Private>
//     <Route path="/invoices" />
//     <Route path="/invoice/:id" />
//   </Private>
// </Router>
export const PrivateRoute = ({ component: Component, path, ...rest }) => {
  const { loading, isAuthenticated, loginWithRedirect } = useAuth()

  useEffect(() => {
    const fn = async () => {
      if (!isAuthenticated) {
        await loginWithRedirect({
          appState: { targetUrl: path },
        })
      }
    }
    !loading && fn()
  }, [loading, isAuthenticated, loginWithRedirect, path])

  // TODO: Allow the user to pass in some sort of loading
  // component instead of rendering null.
  return (
    <RealRoute
      path={path}
      render={(props) =>
        isAuthenticated === true ? <Component {...props} /> : null
      }
      {...rest}
    />
  )
}

export const Route = ({ authRequired, ...rest }) => {
  return authRequired ? <PrivateRoute {...rest} /> : <RealRoute {...rest} />
}

export { BrowserRouter, Switch }
