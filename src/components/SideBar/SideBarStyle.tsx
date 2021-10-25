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
  padding: 66px 20px;
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
