import styled from "styled-components";

export const Spacer = styled.div<{ spacing: number }>`
  padding-bottom: ${p => p.spacing}px;
`;
