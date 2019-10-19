import { useAuth } from '@hammerframework/hammer-web'

import { Box, Link } from 'src/lib/primitives'
import { AppBar, PageContainer, Invoice } from 'src/components'

const DemoInvoicePage = () => {
  const { loginWithRedirect } = useAuth()

  return (
    <>
      <AppBar />
      <PageContainer>
        <Box
          my={3}
          mx="auto"
          width={400}
          p={3}
          bg="yellows.0"
          textAlign="center"
          borderRadius={4}
        >
          Want to save your invoice?{' '}
          <Link onClick={() => loginWithRedirect()}>Sign up!</Link>
        </Box>
      </PageContainer>
    </>
  )
}

export default DemoInvoicePage
