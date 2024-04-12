import styled from 'styled-components';

const FooterContainer = styled.footer`
  padding: 10px 20px;
  text-align: center;
  font-family: 'Poppins', sans-serif;
  font-size: 13px;
`;

function Footer() {
  return (
    <FooterContainer>
      Copywrite © 2024 PlanPro
    </FooterContainer>
  );
}

export default Footer;
