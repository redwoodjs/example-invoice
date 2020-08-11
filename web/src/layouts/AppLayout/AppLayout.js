import { useAuth } from '@redwoodjs/auth'

import Button from 'src/components/Button'

const AppLayout = ({ children, title }) => {
  const { isAuthenticated, logIn, logOut } = useAuth()

  return (
    <div className="bg-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="h-8 w-8"
                  src="https://tailwindui.com/img/logos/workflow-mark-on-dark.svg"
                  alt="Workflow logo"
                />
              </div>
            </div>
            <div>
              <div className="ml-4 flex items-center">Log out</div>
            </div>
          </div>
        </div>
      </nav>

      <header>
        <h1 className="text-3xl font-bold leading-tight text-gray-900 px-4 py-2 pt-6">
          {title}
        </h1>
      </header>
      <main>
        <div className="p-4">{children}</div>
      </main>
    </div>
  )
}

export default AppLayout
