import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Box
} from '@chakra-ui/react'
import {ChevronRightIcon} from '@chakra-ui/icons'

const Home = () => {
  return (
    <Box>
      <Breadcrumb spacing='8px' separator={<ChevronRightIcon color='gray.500' />}>
        <BreadcrumbItem>
          <BreadcrumbLink href='#'>Home</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    </Box>
  )
}

export default Home