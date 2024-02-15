import { Avatar, Box, Divider, Flex, HStack, Icon, Image, Text } from '@chakra-ui/react'
import { IoIosArrowRoundBack } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { IoIosLink } from "react-icons/io";
import { PiBalloon } from "react-icons/pi";
import { VscCalendar } from "react-icons/vsc";
import { myTweets, userDetails } from '../../data/data'
import TweetFeed from '../../components/tweet/tweetFeed'
import BreadCrumb from '../../components/breadCrumb/BreadCrumb'

const Profile = () => {
  return (
    <Box>
      <BreadCrumb title='Bobur' icon={IoIosArrowRoundBack} />
      <Divider />
      {userDetails.map((user) => (
        <Box key={user?.userName}>
          <Box pos={'relative'} mb={12}>
            <Image src={user?.banner} />
            <Avatar src={user?.profileImg} pos={'absolute'} bottom={'-16%'} left={'3%'} h={20} w={20}/>
          </Box>
          <Box px={4} pb={4} >
            <Text>{user?.userName}</Text>
            <Text>{user?.otherName}</Text>
            <Text>{user?.about}</Text>
            <HStack spacing={'10'}>
              {user?.location && <Flex alignItems={'center'} gap={2}><Icon as={CiLocationOn}/> {user?.location}</Flex> }
              {user?.extLink && <Flex alignItems={'center'} gap={2}><Icon as={IoIosLink}/> {user?.extLink}</Flex> }
              {user?.dob && <Flex alignItems={'center'} gap={2}><Icon as={PiBalloon}/> {user?.dob}</Flex> }
              {user?.joined && <Flex alignItems={'center'} gap={2}><Icon as={VscCalendar}/> {user?.joined}</Flex> }
            </HStack>
          </Box>
        </Box>
      ))
      }

      <TweetFeed tweets={myTweets} />
    </Box>
  )
}

export default Profile