import { HStack, Box, Select, Text, FormControl, FormLabel, Heading, Input, Image, Center, Spacer, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import twitter from '../../assets/icons/twitter.png'

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()

  return (
    <Box py={10} px={28}>
      <Center>
      <Image src={twitter}/>
      </Center>
      <Heading pb={5}>Create an account</Heading>
     
      <FormControl>
        <Input {...register('name')} placeholder='Name' mb={5} h={14}/>
      
        <Input {...register('phoneNumber')} placeholder='Phone Number' mb={5} h={14}/>
        <Text color='primary.accent'>
          <Link to='/sign-up'>Use email</Link>
        </Text>
        <FormLabel mt={5} as='b'>Date of Birth</FormLabel>
        <Text fontSize={'small'} mb={5}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo eveniet officia totam impedit voluptates! Eum commodi consequatur vitae cumque. Aut deleniti facilis dicta quod error? Saepe provident beatae nam asperiores autem cum distinctio debitis. In consequuntur nam culpa dolores numquam id. Quos nemo voluptatum laborum maxime minima itaque. Velit doloribus sit enim distinctio explicabo illo at est dolorum quis quae deleniti, perspiciatis facilis voluptates incidunt nihil necessitatibus nesciunt voluptatibus iste accusamus aliquid voluptate nisi voluptas cum! Perspiciatis saepe adipisci eius perferendis iste, sit reiciendis autem quisquam minima officia atque laudantium excepturi consequuntur, ab eum, voluptate explicabo cum eaque? Qui, sapiente!</Text>
        <HStack mb={14}>
          <Select placeholder='Month' {...register("month")} size='lg' w='50%'>
            <option value='option1'>Option 1</option>
            <option value='option2'>Option 2</option>
            <option value='option3'>Option 3</option>
          </Select>

          <Select placeholder='Day' {...register("day")}  size='lg' w='25%'>
            <option value='option1'>Option 1</option>
            <option value='option2'>Option 2</option>
            <option value='option3'>Option 3</option>
          </Select>

          <Select placeholder='Year' {...register("year")}  size='lg' w='25%'>
            <option value='option1'>Option 1</option>
            <option value='option2'>Option 2</option>
            <option value='option3'>Option 3</option>
          </Select>

        </HStack>

        <Button type='submit' w='100%' color='white'  borderRadius='3xl'  bg='primary.accent'>Next</Button>

      </FormControl>


    </Box>
  )
}

export default Register