import { Box } from 'src/lib/primitives'

const PageContainer = (props) => {
  return <Box mx="auto" minWidth={640} maxWidth={800} {...props} />
}

export default PageContainer
