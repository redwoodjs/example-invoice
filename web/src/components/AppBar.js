import { useAuth } from 'rwjs-auth'

import { Text, Flex, Box, Button } from 'src/lib/primitives'

// create the auth client and pass it into the authprovider

const UserAuthTools = () => {
  const { loading, authenticated, login, logout, type } = useAuth()

  if (loading) {
    return 'loading...'
  }

  if (authenticated) {
    return (
      <>
        {type} you are authenticated
        <Button
          onClick={() => logout({ redirectTo: 'http://localhost:8910/' })}
        >
          Log out
        </Button>
      </>
    )
  }

  return (
    <>
      {type} you are not authenticated
      <Button
        onClick={() =>
          login({
            email: 'peter.pistorius@gmail.com',
            password: 'test',
            remember: true,
          })
        }
      >
        Log in
      </Button>
    </>
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
          <Box css={'margin: 0 20px'}> | </Box>
        </Flex>
      </Flex>
    </Box>
  )
}
