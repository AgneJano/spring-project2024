import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo.svg";
import projects_icon from "../assets/projects_icon.svg";
import tasks_icon from "../assets/tasks_icon.svg";
import account_icon from "../assets/account_icon.svg";
import { useContext, useState } from "react";
import { AuthContext } from "../utils/AuthContext";

const MainContainer = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
  flex-shrink: 0;
  padding: 6px 20px;
`;

const NavbarContainer = styled.nav`
  background-color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 20px;
`;

const LogoContainer = styled.div``;
const Logo = styled.img`
  height: 23px;
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
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    height: 38px;
    width: auto;
  }
`;

const DropdownMenu = styled.div`
  position: relative;
`;

const DropdownContent = styled.div`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

const DropdownItem = styled.div`
  padding: 12px 16px;
  text-decoration: none;
  color: black;
  display: block;
  cursor: pointer;
  width: 100%;
  &:hover {
    background-color: #f1f1f1;
  }
`;

function Navbar() {
  const { isAuthenticated, logoutUser } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    logoutUser();
    setIsMenuOpen(false);
  };

  return (
    <NavbarContainer>
      <MainContainer>
        <LogoContainer>
          <Link to="/">
            <Logo src={logo} alt="Logo" />
          </Link>
        </LogoContainer>
        <IconsContainer>
          {isAuthenticated && (
            <>
              <Icon to="/projects">
                <img src={projects_icon} alt="Projects icon" />
              </Icon>
              <Icon to="/tasks">
                <img src={tasks_icon} alt="Tasks icon" />
              </Icon>
              <DropdownMenu>
                <Icon to="#" onClick={toggleMenu}>
                  <img src={account_icon} alt="Account icon" />
                </Icon>
                <DropdownContent isOpen={isMenuOpen}>
                  <DropdownItem>
                    <Link to="/profile">Your profile</Link>
                  </DropdownItem>
                  <DropdownItem onClick={handleLogout}>Log out</DropdownItem>
                </DropdownContent>
              </DropdownMenu>
            </>
          )}
        </IconsContainer>
      </MainContainer>
    </NavbarContainer>
  );
}

export default Navbar;
