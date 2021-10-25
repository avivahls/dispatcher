import styled from "styled-components";
import logo from "../../assets/LOGO.svg";

export const LogoStyle = styled.img.attrs({ src: logo })`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SmallLogo = styled(LogoStyle)`
  padding: 0rem;
  width: 76px;
  height: 60px;
  left: 30px;
  top: 22px;
`;
export const BigLogo = styled(LogoStyle)`
  padding: 4.6875rem 4rem;
  width: 39.51rem;
  height: 36.855rem;
  left: 3.779375rem;
  top: 25.3225rem;
  @media only screen and (max-width: 770px) {
    width: 400px;
    height: 400px;
    left: 3.779375rem;
    top: 25.3225rem;
  }
`;
