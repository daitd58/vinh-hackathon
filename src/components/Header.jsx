import styled from "styled-components";
import logo from "../img/logo.png";

const Wrapper = styled.div`
  height: 90px;
  background-color: #0e2c51;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  right: 0;
  top: 0;
  left: 0;
  z-index: 99999;
`;

const LeftBlock = styled.div`
  display: flex;
  align-items: center;
  padding: 0 30px;
`;

const RightBlock = styled.div`
  padding: 0 30px;
`;

const Logo = styled.div`
   padding: 0 45px 0 10px;
`;
const Menu = styled.div`
  display: flex;
  gap: 10px;
`;
const TextTitle = styled.div`
  color: #ffffff;
  font: Oxygen;
  font-size: 14px;
  font-weight: 400;
  border-left: 1px solid #ffffff;
  padding: 5px;
  line-height: 8px;
`;
const StyledButton = styled.button`
  height: 50px;
  max-width: max-content;
  padding: 0 35px;
  font-size: 16px;
  line-height: 26px;
  font-weight: 700;
  color: #2a2a2a;
  border: 1px solid #204370;
  box-sizing: border-box;
  border-radius: 25px;
`;

function Header() {
  return (
    <Wrapper>
      <LeftBlock>
        <Logo>
          <img src={logo} alt={""} />
        </Logo>
        <Menu>
          <TextTitle>CITIES</TextTitle>
          <TextTitle>VENTURES</TextTitle>
          <TextTitle>ACADEMY</TextTitle>
          <TextTitle>SERVICES</TextTitle>
          <TextTitle>ACCELERATOR</TextTitle>
          <TextTitle>ABOUT US</TextTitle>
        </Menu>
      </LeftBlock>
      <RightBlock>
        <StyledButton>Join our community</StyledButton>
      </RightBlock>
    </Wrapper>
  );
}

export default Header;
