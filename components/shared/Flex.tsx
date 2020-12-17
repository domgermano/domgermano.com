import styled from "styled-components";

interface FlexProps {
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
  width?: string;
  height?: string;
  marginLeft?: number;
  marginRight?: number;
  flex?: "auto" | "none";
  alignSelf?: "flex-start" | "flex-end" | "center" | "baseline";
  justifySelf?:
    | "flex-start"
    | "center"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "space-evenly";
}

export const Box = styled.div<BoxProps>`
  width: ${(p) => p.width && p.width};
  height: ${(p) => p.height && p.height};
  flex: ${(p) => p.flex && p.flex};
  align-self: ${(p) => p.alignSelf && p.alignSelf};
  justify-self: ${(p) => p.justifySelf && p.justifySelf};
  flex: ${(p) => p.flex && p.flex};
  margin-left: ${(p) => p.marginLeft && `${p.marginLeft}px`};
  margin-right: ${(p) => p.marginRight && `${p.marginRight}px`};
`;

export const Flex = styled(Box)<FlexProps>`
  display: flex;
  flex-direction: ${(p) => p.direction && p.direction};
  align-items: ${(p) => p.align && p.align};
  justify-content: ${(p) => p.justify && p.justify};
`;
