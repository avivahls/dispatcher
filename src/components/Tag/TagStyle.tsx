import styled from "styled-components";
import { GREY, LIGHT_GREY_3 } from "../../style/colors";
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
`;
