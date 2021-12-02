import styled from "styled-components";
import { BLUE, DARK_GREY } from "../../style/colors";
import { FlexRow, IPAD_SIZE, MOBILE_SIZE } from "../../style/layouts";

export const HeaderStyle = styled(FlexRow)`
  justify-content: space-between;
  background-color: ${DARK_GREY};
  width: 100%;
  height: 65px;
`;
export const UserStyle = styled.div`
  display: flex;
  background-color: ${BLUE};
  border-radius: 50%;
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
  margin: auto 5px;
  cursor: pointer;
  @media only screen and (max-width: ${IPAD_SIZE}) {
    width: 40px;
    height: 40px;
  }
  @media only screen and (max-width: ${MOBILE_SIZE}) {
    width: 30px;
    height: 30px;
  }
`;
export const IconsContainer = styled(FlexRow)`
  justify-content: end;
  color: white;
  float: right;
  margin: auto 5px;
`;
export const LogoContainer = styled.div`
  width: 10%;
`;
export const SearchContainer = styled.div`
  width: 80%;
`;
