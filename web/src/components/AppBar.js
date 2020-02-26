import { Flex, Box } from 'src/lib/primitives'

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
      </Flex>
    </Box>
  )
}
