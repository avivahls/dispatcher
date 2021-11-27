import styled, { css } from "styled-components";
import { LIGHT_GREY_4 } from "../../style/Colors";
import { FlexCol, FlexRowCenter, MOBILE_SIZE } from "../../style/layouts";

export const SideBarContainer = styled(FlexCol)<{
  isShown: boolean;
  isSmallSearch: boolean;
}>`
  display: flex;
  position: fixed;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  flex-direction: column;
  background: white;
  transition: transform 0.5s ease-in-out;
  will-change: transform;
  transform: translateX(100%);
  overflow-y: scroll;
  z-index: ${(props) => (props.isSmallSearch ? 15 : 7)};
  ${(props) =>
    props.isShown
      ? css`
          transform: translateX(0);
          box-shadow: -0.125rem 0 1.25rem 0 #343851;
        `
      : ``};

  @media only screen and (max-width: ${MOBILE_SIZE}) {
    width: 80%;
  }
  .react-datepicker {
    width: 100%;
    position: relative;
    z-index: 20 !important;
    color: red;
  }
  .react-datepicker__month-container {
    width: 100%;
  }
  .react-datepicker__day {
    padding: 5px;
  }
`;
export const OtherSide = styled.div<{
  isShown: boolean;
  isSmallSearch: boolean;
}>`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #303032;
  opacity: 0.7;
  transition: transform 0.5s ease-in-out;
  will-change: transform;
  transform: translateY(100%);
  overflow-y: scroll;

  z-index: ${(props) => (props.isSmallSearch ? 14 : 6)};
  ${(props) =>
    props.isShown
      ? css`
          transform: translateY(0);
          display: flex;
        `
      : ``};
  @media only screen and (max-width: ${MOBILE_SIZE}) {
    width: 100%;
  }
`;
export const SideBarIcon = styled.img`
  cursor: pointer;
  align-self: center;
  margin: 0px 8px;
  width: 30px;
  float: left;
`;
export const MainFilterCompStyle = styled(FlexCol)`
  height: 100vh;
  justify-content: space-between;
`;
export const SideBarButtonContainer = styled(FlexRowCenter)`
  background-color: ${LIGHT_GREY_4};
`;
