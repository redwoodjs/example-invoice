import { useAuth } from '@redwoodjs/auth'
import { Redirect, routes } from '@redwoodjs/router'

import { Text, Flex, Box, Button } from 'src/lib/primitives'

import exampleInvoice from './exampleInvoice.png'

export default () => {
  const { loading, isAuthenticated, logIn } = useAuth()

  if (loading) {
    return null
  }

  if (isAuthenticated) {
    return <Redirect to={routes.invoice()} />
  }

  return (
    <Box
      bg="white"
      css={`
        overflow: hidden;
      `}
    >
      <Flex>
        <Box width={0.66} m="24px">
          <Text
            as="h1"
            css={`
              font-size: 90px;
              font-weight: normal;
              margin-bottom: 8px;
            `}
          >
            Billable
          </Text>
          <Text
            as="h2"
            css={`
              font-size: 48px;
              font-weight: normal;
              line-height: 1.3;
              margin-bottom: 24px;
            `}
          >
            Billing Made Simple. Period.
          </Text>
          <Text
            as="h3"
            css={`
              font-size: 24px;
              font-weight: normal;
              margin-bottom: 24px;
            `}
          >
            Billable is an editable template for invoicing your clients
          </Text>

          <Button
            onClick={logIn}
            css={`
              height: 44px !important;
              font-size: 20px !important;
              background: blue !important;
              padding: 0 16px !important;
              color: white !important;
            `}
          >
            Get Started
          </Button>
        </Box>
        <Box
          width={0.33}
          bg="blue"
          css={`
            height: 100vh;
            position: relative;
          `}
        >
          <Box
            as="img"
            src={exampleInvoice}
            css={`
              position: absolute;
              top: 48px;
              left: -48px;
            `}
          />
        </Box>
      </Flex>
    </Box>
  )
}
