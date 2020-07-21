import styled, { css } from "styled-components";
import { device } from "styles/device";

interface Props {
  /** Type of hat */
  hat: "captian" | "cap" | "hard" | "chef" | "party";
  /** Optional absolute position in the format [top, left] */
  position?: number[];
  /** Optional absolute position for a tablet */
  tablet?: number[];
  /** Optional absolute position for a mobile */
  mobile?: number[];
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
  top: ${p => (p.position ? `${p.position[0]}px` : "unset")};
  left: ${p => (p.position ? `${p.position[1]}px` : "unset")};
  transform: ${p => (p.rotate ? `rotate(${p.rotate}deg)` : "unset")};

  @media screen and (${device.tablet}) {
    top: ${p => (p.tablet ? `${p.tablet[0]}px` : "unset")};
    left: ${p => (p.tablet ? `${p.tablet[1]}px` : "unset")};
  }

  @media screen and (${device.mobile}) {
    top: ${p => (p.mobile ? `${p.mobile[0]}px` : "unset")};
    left: ${p => (p.mobile ? `${p.mobile[1]}px` : "unset")};
  }
`;
