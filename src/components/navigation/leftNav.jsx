import { leftNavData} from "../../data/data"
import { Box, Button, HStack, Image } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import twitter from '../../assets/icons/twitter.png'

const LeftNav = () => {

  return (
  
      <Box >
        <Image src={twitter} height={'30px'} mt={5} mb={10}/>
        {leftNavData.map((item) => (
          <HStack key={item.title} pb={4} justifyContent={'center'} alignItems={'center'}>
            <Image src={item.icon} alt="" w={'20px'} />
            <Link to={item.link}> {item.title}</Link>
          </HStack>
        ))}
        <Button
          borderRadius='3xl'
          bg='primary.accent'
          color='white'>Tweet
        </Button>
      </Box>
 
  )
}

export default LeftNav