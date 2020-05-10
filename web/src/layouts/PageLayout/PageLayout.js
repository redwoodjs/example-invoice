import { Box } from 'src/lib/primitives'

import AppBar from './subcomponents/AppBar'

const PageContainer = ({ children, ...rest }) => {
  return (
    <>
      <AppBar />
      <Box mx="auto" minWidth={640} maxWidth={800} {...rest}>
        {children}
      </Box>
    </>
  )
}

export default PageContainer
