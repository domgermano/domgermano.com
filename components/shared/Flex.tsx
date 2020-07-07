import styled from "styled-components";

interface FlexProps {
  flex?: boolean;
  direction?: "row" | "column";
  align?: "flex-start" | "flex-end" | "center" | "baseline";
  justify?:
    | "flex-start"
    | "center"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "space-evenly";
}

interface BoxProps {
  flex?: "auto" | "none";
  marginLeft?: number;
  marginRight?: number;
}

export const Flex = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${p => p.direction && p.direction};
  align-items: ${p => p.align && p.align};
  justify-content: ${p => p.justify && p.justify};
`;

export const Box = styled.div<BoxProps>`
  flex: ${p => p.flex && p.flex};
  margin-left: ${p => p.marginLeft && p.marginLeft}px;
  margin-right: ${p => p.marginRight && p.marginRight}px;
`;
