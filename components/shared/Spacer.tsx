import styled from "styled-components";

export const Spacer = styled.div<{ spacing: number }>`
  margin-bottom: ${p => p.spacing}px;
`;
