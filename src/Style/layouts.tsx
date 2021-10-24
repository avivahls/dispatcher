import styled from "styled-components";

export const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
`;
export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
`;
export const FlexColCenter = styled(FlexCol)`
  justify-content: center;
`;
export const FlexRowCenter = styled(FlexRow)`
  justify-content: center;
`;
