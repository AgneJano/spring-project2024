import { useState } from "react";
import styled from "styled-components";

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../api/apis.js";

const RegistrationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  align-items: center;
  width: 100%;
  max-width: 535px;
  font-family: "Poppins", sans-serif;
  line-height: 36px;
  font-size: 30px;
  color: #666666;
  padding: 90px 90px;
`;

const FormTitle = styled.div`
  color: #333333;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 535px;
  width: 100%;
`;

const FormField = styled.div`
  gap: 4px;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Label = styled.label``;

const Input = styled.input`
  height: 46px;
  padding: 5px;
  border: 1px solid rgba(221, 221, 221, 1);
  border-radius: 4px;
  outline: none;
  color: #333333;
  font-size: 18px;

  &:focus {
    border-color: #000;
    outline: none;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  height: 50px;
  padding: 10px;
  background-color: #ffc107;
  color: #ffffff;
  font-weight: 600;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #b38600;
  }
`;

const FormMessage = styled.div`
  max-width: 535px;
  width: 100%;
  font-size: 16px;
  margin-bottom: 30px;
`;

const FormForSignIn = styled.div`
  display: flex;
  max-width: 535px;
  width: 100%;
  font-size: 16px;
  justify-content: center;
  margin-top: 15px;
`;

function RegistrationPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();
  const [serverError, setServerError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    if (data.password !== data.repeatPassword) {
      setError("repeatPassword", {
        type: "manual",
        message: "Passwords do not match. Rewrite password.",
      });
      return;
    }

    try {
      await registerUser(data);
      setSuccessMessage("Registration successful!");
      //To do: fix path to login, when needed.
      navigate("/");
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setError("email", {
          type: "manual",
          message: error.response.data.errors[0].msg,
        });
      } else {
        setServerError("Something went wrong. Please try again later");
      }
    }
  };

  return (
    <RegistrationContainer>
      <FormTitle>
        <h2>Create an account</h2>
      </FormTitle>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormField>
          <Label htmlFor="name">Username</Label>
          <Input
            {...register("name", {
              required: true,
              minLength: 6,
              maxLength: 40,
            })}
          />
          {errors.name && (
            <p>Username is required and must be between 6 and 32 characters</p>
          )}
        </FormField>

        <FormField>
          <Label htmlFor="email">Email Address</Label>
          <Input type="email" {...register("email", { required: true })} />
          {errors.email && <p>{errors.email.message}</p>}
        </FormField>

        <FormField>
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            {...register("password", {
              required: true,
              minLength: 8,
              maxLength: 128,
            })}
          />
          {errors.password && (
            <p>Password is required and must be between 8 and 128 characters</p>
          )}
        </FormField>

        <FormField>
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <Input
            type="password"
            {...register("repeatPassword", { required: true })}
          />
          {errors.repeatPassword && <p>Please repeat your password</p>}
        </FormField>

        <FormMessage>
          <p>There will be a message</p>
        </FormMessage>
        <SubmitButton type="submit">CREATE AN ACCOUNT</SubmitButton>
      </Form>
      <FormForSignIn>
        <p>
          {serverError ? (
            <p>{serverError}</p>
          ) : (
            successMessage && <p>{successMessage}</p>
          )}
        </p>
      </FormForSignIn>
    </RegistrationContainer>
  );
}

export default RegistrationPage;
