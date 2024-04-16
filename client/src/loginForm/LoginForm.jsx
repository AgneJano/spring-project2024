import { useState, useContext } from "react";
import { styled } from "styled-components";
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../utils/AuthContext.jsx";

const Container = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
`;

const Text = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.5);
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
  line-height: 24px;
  color: rgba(0, 0, 0, 0.5);
  text-align: justify-left;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #dddddd;
  border-radius: 5px;
  max-width: 400px;
  &::placeholder {
    color: #d9d9d9;
    font-size: 1rem;
  }
  &:focus {
    border-color: #000;
    outline: none;
  }
`;

const Button = styled.button`
  padding: 10px;
  background-color: #ffc107;
  color: #fff;
  border: 1px solid #ffc107;
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
      await loginUser(data);
      navigate("/home");
    } catch (error) {
      console.error("Login error:", error);
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
            autoComplete="username"
            {...register("login", { required: "Username is required" })}
          />
          {errors.username && <p>{errors.username.message}</p>}
        </FormGroup>

        <FormGroup>
          <Label>Password</Label>
          <Input
            type="password"
            name="password"
            autoComplete="current-password"
            {...register("password", { required: "Password is required" })}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </FormGroup>
        {serverError && <p>{serverError}</p>}
        <Button type="submit">SIGN IN</Button>
        <Text>
          Don't have an account? <Link to="/registration">Sign up</Link>
        </Text>
      </Form>
    </Container>
  );
}

export default LoginForm;
