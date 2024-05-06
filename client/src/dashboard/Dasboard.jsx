import { useContext } from "react";
import { AuthContext } from "../utils/AuthContext";
import { styled } from "styled-components";
import { useFetch } from "../fetching-data/UseFetch";
const DashboardContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

const WelcomeMessage = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const UserInfo = styled.p`
  font-size: 1.2rem;
`;

export const Dashboard = () => {
  const { user } = useContext(AuthContext);
  useFetch(`http://localhost:1000/api/v1/planpro/projects`, "projects");

  return (
    <DashboardContainer>
      <WelcomeMessage>Welcome to the Dashboard!</WelcomeMessage>
      {user && (
        <UserInfo>
          Hello, {user.name} ! You are logged in as {user.role}.
        </UserInfo>
      )}
      <p>Here you can manage your projects, tasks, and more.</p>
    </DashboardContainer>
  );
};
