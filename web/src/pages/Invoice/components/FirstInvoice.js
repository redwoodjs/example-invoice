import { Box } from 'src/lib/primitives'

const FirstInvoice = () => {
  return (
    <Box
      m="md"
      mx="lg"
      p="md"
      borderRadius={0}
      textAlign="center"
      bg="yellows.0"
    >
      👋 Welcome! This is your very first invoice so we've filled it in with
      some example information.
    </Box>
  )
}

export default FirstInvoice
