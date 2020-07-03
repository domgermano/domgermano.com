import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 20px;

  width: 100%;
  max-width: 1380px;
  margin: auto;
  padding-left: 50px;
  padding-right: 50px;
  box-sizing: border-box;
`;
