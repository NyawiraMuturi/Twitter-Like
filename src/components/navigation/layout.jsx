import { Outlet } from "react-router-dom"
import { Box, Center, Grid, GridItem, HStack, SimpleGrid } from '@chakra-ui/react'
import LeftNav from "./leftNav"
import RightNav from "./rightNav"

const Layout = () => {
  return (
    <Grid  
    columns={3}
    templateColumns='repeat(10, 1fr)'
    gap={2}>
      <GridItem colSpan={2} overflowY={'auto'}>
        <Center>
          <LeftNav />
        </Center> 
      </GridItem >
      <GridItem colSpan={5} borderRight='1px' borderLeft='1px' borderColor='#D8D8D8' overflowY={'auto'}>
      <Box 
      height="100vh"
       overflowY="auto"
       css={{
        '&::-webkit-scrollbar': {
          display: 'none'
        },
        '-ms-overflow-style': 'none',
        scrollbarWidth: 'none' 
      }}>
          <Outlet />
        </Box>
      </GridItem>
      <GridItem colSpan={2} overflowY={'auto'}>
        <RightNav />
      </GridItem>
    </Grid>
  )
}

export default Layout