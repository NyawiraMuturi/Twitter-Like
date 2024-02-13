import { Link } from 'react-router-dom';
import AuthForm from '../../components/forms/authForm'
import { VStack, Flex, Text } from '@chakra-ui/react';

const Login = () => {


  const loginFields = [
    {
      name: 'email',
      placeholder: 'Phone number or email address',
      validation: {
        required: 'Email is required',
        pattern: {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
          message: 'Invalid email address',
        },
      },
    },
    {
      name: 'password',
      placeholder: 'Password',
      type: 'password',
      validation: {
        required: 'Password is required',
      },
    },
  ];

  const onSubmit = () => {
    mutate(loginFields.name)
  }

  return (

    <VStack>
      <AuthForm heading='Log in to Twitter' onSubmit={onSubmit} inputFields={loginFields} text='Login' />
      <Flex gap={120} pt={4} >
        <Text color='primary.accent'>
          <Link>Forgot Password?</Link>
        </Text>
        <Text color='primary.accent'>
          <Link to='/sign-up'>Sign up to Twitter</Link>
        </Text>
      </Flex>


    </VStack>



  )
}

export default Login