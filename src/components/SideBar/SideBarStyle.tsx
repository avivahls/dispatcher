import styled, { css } from "styled-components";
import { FlexCol } from "../../Style/layouts";

export const SideBarContainer = styled(FlexCol)<{ isShown: boolean }>`
  display: flex;
  position: fixed;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  flex-direction: column;
  background: white;
  transition: transform 0.25s ease;
  will-change: transform;
  transform: translateX(100%);
  overflow-y: scroll;
  z-index: 6;
  ${(props) =>
    props.isShown
      ? css`
          transform: translateX(0);
          box-shadow: -0.125rem 0 1.25rem 0 #343851;
        `
      : ``};
`;
export const OtherSide = styled.div<{ isShown: boolean }>`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background: #303032;
  opacity: 0.7;
  transition: transform 0.25s ease;
  will-change: transform;
  transform: translateY(100%);
  overflow-y: scroll;

  z-index: 6;
  ${(props) =>
    props.isShown
      ? css`
          transform: translateY(0);
          display: flex;
        `
      : ``};
`;
export const SideBarIcon = styled.img`
  align-self: flex-start;
  margin: 0px 8px;
  width: 30px;
  float: left;
`;
