import styled from "styled-components";
import { Colors, colors } from "styles/colors";

export const Colored = styled.span<{ color: Colors }>`
  color: ${p => colors[p.color]};
`;
