import { Outlet } from "react-router-dom"
import { Box, HStack } from '@chakra-ui/react'
import LeftNav from "./leftNav"
import RightNav from "./rightNav"

const Layout = () => {
  return (
    <HStack>
      <Box w='15%'>
        <LeftNav />
      </Box>
      <Box w='60%'>
        <Outlet />
      </Box>
      <Box  w='25%'>
        <RightNav />
      </Box>
    </HStack>
  )
}

export default Layout