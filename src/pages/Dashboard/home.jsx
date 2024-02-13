import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Box,
  Divider
} from '@chakra-ui/react'
import {ChevronRightIcon} from '@chakra-ui/icons'
import NewTweet from '../../components/cards/newTweet'
import TweetFeed from '../../components/tweet/tweetFeed'

const Home = () => {
  return (
    <Box>
      <Breadcrumb spacing='8px' separator={<ChevronRightIcon color='gray.500' />}>
        <BreadcrumbItem>
          <BreadcrumbLink href='#'>Home</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Divider/>
      <NewTweet/>
      <Divider/>
      <TweetFeed/>
    </Box>
  )
}

export default Home