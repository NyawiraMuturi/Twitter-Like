import { leftNavData } from "../../data/data"
import {Box, Button, Center, HStack, Image} from '@chakra-ui/react'
import {Link} from 'react-router-dom'
import twitter from '../../assets/icons/twitter.png'

const LeftNav = () => {
  return (
    <Center borderRight='1px' borderColor='#D8D8D8'> 

      <Box >
      <Image src={twitter} my={8}/>
      {leftNavData.map((item)=> (
      <HStack key={item.title} pb={4}> 
        <Image src={item.icon} alt=""/>
        <Link to={item.link}> {item.title}</Link>
      </HStack>
    ))}
    <Button 
      borderRadius='3xl'
      bg='primary.accent'
      color='white'>Tweet</Button>
      </Box>

</Center>
  )
}

export default LeftNav