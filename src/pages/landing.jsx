import { Box, HStack, Heading, Image, Text, VStack, Button, chakra } from '@chakra-ui/react'
import {Link} from 'react-router-dom'
import hero from '../assets/img/hero.png'
import twitter from '../assets/icons/twitter.png'
import apple from '../assets/icons/apple.png'
import google from '../assets/icons/google.png'
import { footerText } from '../data/data'


const Landing = () => {
    return (
        <Box>
            <HStack>
                <Box w='60%'>
                    <Image src={hero} />
                </Box>

                <Box>
                    <VStack alignItems={"flex-start"} gap='6' px={4}>
                        <Image src={twitter} />
                        <Heading fontSize='6xl' as='b'>Happening now</Heading>
                        <Text as='b' fontSize='3xl'>Join  Twitter today</Text>
                        <Button leftIcon={<Image src={google} h='80%'/>} variant='outline' w='70%' fontSize='sm' borderRadius='3xl'>
                            Sign up with Google
                        </Button>

                        <Button leftIcon={<Image src={apple} h='80%'/>} variant='outline' w='70%' fontSize='sm' borderRadius='3xl'>
                            Sign up with Apple
                        </Button>

                        <Button variant='outline' w='70%' fontSize='sm' borderRadius='3xl'>
                            Sign up with phone or email
                        </Button>

                        <Text fontSize='xs'>
                            By singing up you agree to the <chakra.span color='blue.400'>Terms of Service and Privacy <br/> Policy</chakra.span> , including <chakra.span color='blue.400'>Cookie Use</chakra.span>.
                        </Text>
                        <Text fontSize='sm'>Already have an account? <chakra.span color='blue.400'><Link to='/login'>Log in</Link></chakra.span>  </Text>
                    </VStack>
                </Box>
            </HStack>

            <HStack gap='2' pt={1} pl={20} >
                {footerText.map((item) => (
                    <Box key={item.title}>

                        <Text fontSize='sm'> {item.title}</Text>
                    </Box>
                ))}
            </HStack>

        </Box>
    )
}

export default Landing