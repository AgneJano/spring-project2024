import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/logo.svg';
import projects_icon from '../assets/projects_icon.svg';
import tasks_icon from '../assets/tasks_icon.svg';
import account_icon from '../assets/account_icon.svg';


const MainContainer = styled.div`
max-width: 1180px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1; 
  flex-shrink: 0; 
`;

const NavbarContainer = styled.nav`
  background-color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 13px 20px;
`;

const LogoContainer = styled.div``;
const Logo = styled.img`
  height: 24px;
`;

const IconsContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled(Link)`
  color: white;
  font-size: 24px;
  margin: 0 10px;
  height: 38px;
  
  img {
    height: 100%;
  }
`;


function Navbar() {
  return (

    <NavbarContainer>
       <MainContainer>
      <LogoContainer>
        <Link to="/">
          <Logo src={logo} alt="Logo" />
        </Link>
      </LogoContainer>
      <IconsContainer>
        <Icon to="/projects">
          <img src={projects_icon} alt="Projects icon"/>
        </Icon>
        <Icon to="/tasks">
          <img src={tasks_icon} alt="Tasks icon"/>
        </Icon>
        <Icon to="/account">
          <img src={account_icon} alt="Account icon"/>
        </Icon>
      </IconsContainer>
      </MainContainer>
    </NavbarContainer>

  );
}

export default Navbar;
