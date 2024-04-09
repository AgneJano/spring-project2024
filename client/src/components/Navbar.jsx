import { styled } from 'styled-components';
import logo from '../assets/logo.svg';


const NavbarContainer = styled.nav`
  background-color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`;

const LogoContainer = styled.div``; // Tuščias div logotipui
const Logo = styled.img`
  height: 30px;
`;

// const IconsContainer = styled.div`
//   display: flex;
//   align-items: center;
// `;
// const Icon = styled.div`
//   color: white;
//   font-size: 24px;
//   margin: 0 10px;
// `;


function Navbar() {
    return (
        <NavbarContainer>
          <LogoContainer>
          <Logo src={logo} alt="Logo" />
          </LogoContainer>
          {/* <IconsContainer>
            <Icon><FaHome /></Icon>
            <Icon><FaTasks /></Icon>
            <Icon><FaInfoCircle /></Icon>
          </IconsContainer> */}
        </NavbarContainer>
      );
  }
  
  export default Navbar;