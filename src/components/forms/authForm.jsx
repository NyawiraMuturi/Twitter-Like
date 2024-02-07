import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom'
import {
    FormControl,
    Flex,
    Box,
    Image,
    Heading,
    Input,
    Text,
    Button,
    VStack
} from '@chakra-ui/react'
import twitter from '../../assets/icons/twitter.png'

const AuthForm = ({ inputFields, onSubmit, link, text, linkText, heading }) => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    return (
     
            <Box w='30%' pt={10}>
                <Image src={twitter} pb={5} />
                <Heading textAlign={'start'} pb={5}>{heading}</Heading>

                <form onSubmit={handleSubmit(onSubmit)} >
                    {inputFields.map((inputField) => (
                        <FormControl key={inputField.name} py={2}>

                            <Input
                                placeholder={inputField.placeholder}
                                type={inputField.type || 'text'}
                                name={inputField.name}
                                {...register(inputField.name, inputField.validation)}
                                w='100%'
                                py={6}
                                fontSize='sm'
                            />
                            {errors[inputField.name] && (
                                <Text className="error-message" color='red.500'>{errors[inputField.name].message}</Text>
                            )}
                        </FormControl>
                    ))}

                    <Button
                        mt={4}
                        borderRadius='3xl'
                        w='100%'
                        bg='primary.accent'
                        color='white'
                        type='submit'>{text}</Button>

                </form>

            </Box>


    )
}

export default AuthForm