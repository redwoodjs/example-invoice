
            declare module '@redwoodjs/router' {
              interface AvailableRoutes {
                invoices: () => "/invoices"
invoice: () => "/invoice/{id}"
: () => "/"
              }
            }

            import type InvoicePageType from '/Users/dalefrench/code/open-source/example-invoice/web/src/pages/InvoicePage/InvoicePage'
import type InvoicesPageType from '/Users/dalefrench/code/open-source/example-invoice/web/src/pages/InvoicesPage/InvoicesPage'
import type LandingPageType from '/Users/dalefrench/code/open-source/example-invoice/web/src/pages/LandingPage/LandingPage'
            declare global {
              const InvoicePage: typeof InvoicePageType
const InvoicesPage: typeof InvoicesPageType
const LandingPage: typeof LandingPageType
            }
          