import {tweets} from '../../data/data'
import NewTweet from '../../components/cards/newTweet'
import TweetFeed from '../../components/tweet/tweetFeed'
import BreadCrumb from '../../components/breadCrumb/BreadCrumb'
import {Box, Divider} from '@chakra-ui/react'

const Home = () => {
  return (
    <Box>
      <BreadCrumb title='Home'/>
      <Divider/>
      <NewTweet/>
      <Divider/>
      <TweetFeed tweets={tweets}/>
    </Box>
  )
}

export default Home