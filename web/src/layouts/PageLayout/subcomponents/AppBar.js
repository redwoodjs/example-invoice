import { useAuth } from '@redwoodjs/auth'
import { routes, navigate } from '@redwoodjs/router'

import { Text, Flex, Box, Button } from 'src/lib/primitives'

const UserAuthTools = () => {
  const { loading, authenticated, login, logout } = useAuth()

  if (loading) {
    return 'loading...'
  }

  return (
    <Button
      onClick={async () => {
        if (authenticated) {
          await logout({ redirectTo: 'http://localhost:8910/' })
          navigate('/')
        } else {
          await login()
          navigate(routes.invoice())
        }
      }}
    >
      {authenticated ? 'Log out' : 'Log in'}
    </Button>
  )
}

export default () => {
  return (
    <Box
      bg="blue"
      css={`
        height: 64px;
      `}
    >
      <Flex
        flexDirection="row"
        pl="8px"
        m="auto"
        css={`
          max-width: 800px;
          line-height: 64px;
          color: white;
        `}
      >
        <Text fontSize={5} color="white" flex={1}>
          Billable
        </Text>
        <Flex
          css={`
            align-items: center;
          `}
        >
          <UserAuthTools />
        </Flex>
      </Flex>
    </Box>
  )
}
