import styled from 'styled-components';
// import LoginForm from './LoginForm'; 

const HomePageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px 150px;
`;

const LeftColumn = styled.div`
  flex: 1;
  padding-right: 20px;
`;

const RightColumn = styled.div`
  flex: 1;
  padding-left: 20px;
`;

const Title = styled.h1`
  font-size: 32px;
  margin-bottom: 20px;
  font-family: 'Poppins', sans-serif;
`;

const Text = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
  font-family: 'Poppins', sans-serif;
`;

function HomePage() {
  return (
    <HomePageContainer>
      <LeftColumn>
        <Title>Streamline Your Projects with PlanPro!</Title>
        <Text>
          Effortlessly manage tasks, deadlines, and resources with our intuitive project management system.
          Boost productivity and stay organized from start to finish.
        </Text>
      </LeftColumn>
      <RightColumn>
        {/* <LoginForm /> */}
      </RightColumn>
    </HomePageContainer>
  );
}

export default HomePage;
