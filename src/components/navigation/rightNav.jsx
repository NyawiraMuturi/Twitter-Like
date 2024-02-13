import { Box, HStack, Input, Text } from "@chakra-ui/react"
import TrendsCard from "../cards/trendsCard"
import {SearchIcon} from '@chakra-ui/icons'


const RightNav = () => {
  return (
    <Box borderLeft='1px' borderColor='#D8D8D8' p={5}>
      <HStack bg='#EFF3F4' borderRadius='3xl' py={2} px={4} mb={5}>
        <SearchIcon />
        <Input placeholder="search" h='80%' border='none'/>
      </HStack>
      <TrendsCard />
    </Box>
  )
}

export default RightNav