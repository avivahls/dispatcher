import styled from "styled-components";
import { BLUE, DARK_GREY } from "../../Colors";

export const HeaderStyle = styled.div`
  display: flex;
  flex-direction: row;
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
  @media only screen and (max-width: 770px) {
    width: 40px;
    height: 40px;
  }
  @media only screen and (max-width: 550px) {
    width: 30px;
    height: 30px;
  }
`;
export const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  color: white;
  float: right;
  margin: auto 5px;
  /* width: 10%; */
`;
