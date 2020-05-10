import { useAuth } from '@redwoodjs/auth'
import { routes, navigate } from '@redwoodjs/router'

import { Text, Flex, Box, Button } from 'src/lib/primitives'

const UserAuthTools = () => {
  const { loading, authenticated, currentUser, login, logout } = useAuth()

  if (loading) {
    return 'loading...'
  }

  if (!authenticated) {
    return null
  }

  return (
    <>
      {currentUser.email}
      &nbsp;&nbsp;
      <Button
        onClick={async () => {
          await logout({ redirectTo: 'http://localhost:8910/' })
          navigate('/')
        }}
      >
        Log out
      </Button>
    </>
  )
}

export default () => {
  return (
    <Box bg="blue" css={``}>
      <Flex
        flexDirection="row"
        m="auto"
        css={`
          max-width: 800px;
          color: white;
          align-items: center;
        `}
      >
        <Text fontSize={5} color="white" flex={1}>
          Billable
        </Text>
        <UserAuthTools />
      </Flex>
    </Box>
  )
}
