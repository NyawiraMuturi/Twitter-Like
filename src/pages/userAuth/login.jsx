import AuthForm from '../../components/forms/authForm'


const Login = () => {


  const loginFields = [
    {
      name: 'email',
      label: 'Email',
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
      label: 'Password',
      type: 'password',
      validation: {
        required: 'Password is required',
      },
    },
  ];

  const onSubmit =() => {
    mutate(loginFields.name)
  }

  return (
     <AuthForm heading='LOGIN' onSubmit={onSubmit} inputFields={loginFields} text='LOGIN' linkText='Forgot Password?' link='/forgot-password'/>

  )
}

export default Login