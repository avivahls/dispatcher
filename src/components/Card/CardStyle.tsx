import styled from "styled-components";

export const BasicCard = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: white;
  border: 1px solid #d9dbe9;
  box-shadow: 0px 32px 64px rgba(0, 0, 0, 0.05);
  border-radius: 20px;
`;

export const DataCardStyle = styled(BasicCard)`
  margin: 0 0 20px 0;
  width: fit-content;
  height: 15.125rem;
`;
export const ChartCardStyle = styled(BasicCard)`
  padding: 40px 45px;
  margin: 0 0 20px 0;
  flex-direction: column;
  align-items: flex-start;
  width: fit-content;
  height: 300px;
`;
export const DataCardHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: rgba(90, 90, 137, 0.5);
`;
export const TagList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  color: rgba(90, 90, 137, 0.5);
`;
export const DataCardImg = styled.img`
  width: 25%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px 0 0 20px;
`;

export const DataCardContent = styled.div`
  width: 75%;
  padding: 20px;
`;
export const ChartDivider = styled.div`
  background: #5a5a89;
  border: 4px solid #5a5a89;
  width: 1.25rem;
  height: 0rem;
  border-radius: 10px;
`;
export const CardSource = styled.div`
  color: rgba(90, 90, 137, 0.5);
  margin: 1.25rem auto;
`;
export const CardDescription = styled.div`
  color: #5a5a89;
  margin: 1.25rem auto;
`;

export type IData = {
  source: { id: string; name: string };
  tags: string[];
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string | null;
};
export const Items = styled.div``;
export const Charts = styled.div``;
