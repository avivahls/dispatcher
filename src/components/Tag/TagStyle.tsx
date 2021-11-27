import styled from "styled-components";
import { GREY, LIGHT_GREY_3 } from "../../style/Colors";
import { MOBILE_SIZE } from "../../style/layouts";
import "./../../index.css";

export const TagStyle = styled.p`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 10px;
  margin: 0px 6px;
  width: fit-content;
  height: fit-content;
  font-family: Poppins;
  font-style: normal;
  color: ${GREY};
  background: ${LIGHT_GREY_3};
  border-radius: 10px;
  @media only screen and (max-width: ${MOBILE_SIZE}) {
    font-size: 10px;
  }
`;
