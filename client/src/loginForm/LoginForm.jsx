import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { useNavigate, Link } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { AuthContext } from '../utils/AuthContext.jsx';

const Container = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  // border: 1px solid #ccc;
  // border-radius: 5px;
`;

const Text = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
  font-family: 'Poppins', sans-serif;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.5); /* Adjust the alpha value (0.8) to set the transparency */
  text-align: justify-left;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

const Label = styled.label`
  margin-bottom: 5px;
  font-size: 16px;
  font-family: 'Poppins', sans-serif;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.5); /* Adjust the alpha value (0.8) to set the transparency */
  text-align: justify-left;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #DDDDDD;
  border-radius: 5px;
  max-width: 400px;
  &::placeholder {
    color: #d9d9d9;
    font-size:1rem;
  }
  &:focus {
    border-color: #000; /* Change to your desired color */
    outline: none; /* Remove default outline */
  }
`;

const Button = styled.button`
  padding: 10px;
  background-color: #FFC107;
  color: #fff;
  border: 1px solid #FFC107 ;
  border-radius: 5px;
  cursor: pointer;
  max-width: 400px;
  &:hover {
    background-color: #0056b3;
  }
`;

function LoginForm() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { loginUser } = useContext(AuthContext);
  const [serverError, setServerError] = useState(null);

  const onSubmit = async (data) => {
    try {
      const result = await loginUser(data);
      // jeigu gauname result ir result turi tokeną, tai nukreipiame vartotoją į dashboard puslapį arba admin-dashboard puslapį
      if (result && result.token) {
        navigate('/project');
      }
    }
    catch (error) {
      setServerError(error.message);
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <Label>Email address</Label>
          <Input
            type="text"
            name="login"
            autoComplete="username" // Add this line
            {...register('login', { required: 'Username is required' })}
          />
          {errors.username && <p>{errors.username.message}</p>}
        </FormGroup>

        <FormGroup>
          <Label>Password</Label>
          <Input
            type="password"
            name="password"
            autoComplete="current-password"
            {...register('password', { required: 'Password is required' })}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </FormGroup>
        {serverError && <p>{serverError}</p>} 
        <Button type="submit">SIGN IN</Button>
        <Text>Don't have an account? <Link to="/registration">Sign up</Link></Text>
      </Form>

    </Container>
  );
}

export default LoginForm;
