import styled from "styled-components";
import logo from "../img/logo.png";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #0e2c51;
  padding: 10px 30px 10px 30px;
  justify-content: space-between;
  align-items: center;
`;

const LeftBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.div`
  padding: 10px 20px;
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
const Input = styled.div`
  display: flex;
  background: #ffffff;
  border-radius: 30px;
  width: 220px;
  height: 50px;
  font-weight: 500;
  align-items: center;
  font-size: 17px;
  justify-content: center;
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
      <Input>Join our community</Input>
    </Wrapper>
  );
}

export default Header;
