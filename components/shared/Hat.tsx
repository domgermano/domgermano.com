import styled, { css } from "styled-components";

interface Props {
  /** Type of hat */
  hat: "captian" | "cap" | "hard" | "chef" | "party";
  /** Right absolute positioning in px */
  right?: number;
  /** Top absolute positioning in px */
  top?: number;
  /** Right absolute positioning in px */
  left?: number;
  /** Top absolute positioning in px */
  bottom?: number;
  /** Optional rotation */
  rotate?: number;
}

const hatSelector = (props: Props) => {
  switch (props.hat) {
    case "cap":
      return css`
        background-position: -40px;
      `;
      break;

    default:
      return css`
        background-position: 0px;
      `;
  }
};

/** A small illustration for a single hat */
export const Hat = styled.span<Props>`
  display: inline-block;
  width: 40px;
  height: 40px;
  position: absolute;

  background-image: url("/hatsLogo.png");
  background-size: 500%;
  background-repeat: no-repeat;

  ${hatSelector};
  right: ${p => (p.right ? `${p.right}px` : "initial")};
  top: ${p => (p.top ? `${p.top}px` : "initial")};
  left: ${p => (p.left ? `${p.left}px` : "initial")};
  bottom: ${p => (p.bottom ? `${p.bottom}px` : "initial")};
  transform: ${p => (p.rotate ? `rotate(${p.rotate}deg)` : "initial")};
`;
