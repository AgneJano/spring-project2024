import { styled } from "styled-components";
import { useContext } from "react";
import { AuthContext } from "../utils/AuthContext";

const Title = styled.p`
  font-size: 2rem;
  font-weight: 500;
  text-align: center;
  padding: 4rem 0 1.25rem;
`;

export const Dashboard = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div>
      <h1>Welcome, {user.name}!</h1>
      <p>This is your user home page.</p>
    </div>
  );
};
