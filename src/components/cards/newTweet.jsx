import { Card, Image, Text, Button, CardBody, CardFooter, Textarea, HStack, Stack, Avatar, Spacer} from '@chakra-ui/react'
import {Icon} from '@chakra-ui/icons'
import { CiImageOn } from "react-icons/ci";
import { MdOutlineGifBox } from "react-icons/md";
import { CiFaceSmile } from "react-icons/ci";
import { ImParagraphLeft } from "react-icons/im";
import { TbCalendarTime } from "react-icons/tb"

const NewTweet = () => {
  return (
    <Card
      direction={{ base: 'column', sm: 'row' }}
      overflow='hidden'
    >
      <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' my={5}/>

      <Stack w={'100%'}>
        <CardBody>
            <Textarea placeholder="What's Happening?" w='100%' border={'none'} />
            <HStack  mt={2}>
            <HStack color={'primary.accent'}>
              <Icon as={CiImageOn} />
              <Icon as={MdOutlineGifBox}/>
              <Icon as={ImParagraphLeft}/>
              <Icon as={CiFaceSmile}/>
              <Icon as={TbCalendarTime}/>
            </HStack>
            <Spacer/>
          <Button bg={'primary.accent'} color={'white'}>
            Tweet
          </Button>
          </HStack>
        </CardBody>

      

       
      </Stack>
    </Card>
  )
}

export default NewTweet