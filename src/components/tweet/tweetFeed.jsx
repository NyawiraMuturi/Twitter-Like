import {Avatar, Box, Card, CardBody, Divider, HStack, Icon, Image, Stack, Text} from '@chakra-ui/react'
import { IoMdStats } from "react-icons/io";
import { FaRegComment } from "react-icons/fa6";
import { IoMdHeartEmpty } from "react-icons/io";
import { LiaRetweetSolid } from "react-icons/lia";
import { BsUpload } from "react-icons/bs";

const TweetFeed = ({tweets}) => {
  return (
    <Box >
        {tweets.map((tweet)=> (
          <Box>
        <Card 
          direction={{ base: 'column', sm: 'row' }}
          px={4}
          overflow='hidden'
          boxShadow={'none'}
          key={tweet?.id}>
            <Avatar src='https://bit.ly/sage-adebayo' my={5}/>
            <Stack>
              <CardBody>
                <HStack>
                <Text>{tweet?.username}</Text>
                <Text>{tweet?.id}</Text>
                <Text>{tweet?.timestamp}</Text>
                </HStack>
                {tweet?.content && <Text>{tweet?.content}</Text> }
                
                 {tweet?.image && <Image src={tweet?.image} my={4}/>}
             

              <HStack>
                <Icon as={FaRegComment} color={'#536471'}/>
                <Icon as={LiaRetweetSolid} color={'#536471'}/>
                <Icon as={IoMdHeartEmpty} color={'#536471'}/>
                <Icon as={BsUpload} color={'#536471'}/>
                <Icon as={IoMdStats} color={'#536471'}/>
              </HStack>

              </CardBody>
            </Stack>
            
            
          </Card> 
          <Divider/>

          </Box>

          
        ))
        }
        
    </Box>
  )
}

export default TweetFeed