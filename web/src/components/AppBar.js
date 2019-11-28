import { useAuth } from '@hammerframework/web'

import { Flex, Box, Button } from 'src/lib/primitives'

export default () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth()

  return (
    <Box
      bg="blue"
      css={`
        height: 64px;
      `}
    >
      <Flex
        flexDirection="row"
        color="white"
        fontSize={5}
        pl="8px"
        m="auto"
        css={`
          max-width: 800px;
          line-height: 64px;
        `}
      >
        Billable
        <Box
          ml="auto"
          css={`
            display: flex;
            align-items: center;
          `}
        >
          {!isAuthenticated && (
            <>
              <Button onClick={() => loginWithRedirect({})} mr={1}>
                Log in
              </Button>
              <Button onClick={() => loginWithRedirect({})}>Sign up</Button>
            </>
          )}
          {isAuthenticated && (
            <>
              <Button onClick={() => logout()}>Log out</Button>
            </>
          )}
        </Box>
      </Flex>
    </Box>
  )
}
