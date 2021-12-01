import styled from "styled-components";
import logo from "../../assets/LOGOICON.svg";
import { IPAD_SIZE, MOBILE_SIZE } from "../../utils/layouts";

export const LogoStyle = styled.img.attrs({ src: logo })`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SmallLogo = styled(LogoStyle)`
  padding: 10px;
  width: 65px;
  height: 50px;
  left: 30px;
  top: 22px;
  @media only screen and (max-width: ${IPAD_SIZE}) {
    right: 30px;
    padding-right: 20px;
  }
`;
export const BigLogo = styled(LogoStyle)`
  padding: 75px 80px;
  width: 350px;
  height: 278px;
  left: 80px;
  top: 405.16px;
  @media only screen and (max-width: ${IPAD_SIZE}) {
    width: 250px;
    height: 205px;
    left: 3.779375rem;
    top: 25.3225rem;
  }
  @media only screen and (max-width: ${MOBILE_SIZE}) {
    width: 191px;
    height: 178px;
    left: 3.779375rem;
    top: 25.3225rem;
  }
`;
