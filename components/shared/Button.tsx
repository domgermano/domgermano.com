import styled from "styled-components";
import { colors } from "styles/colors";
import { typography } from "styles/typography";

/**
 * TODO:
 *   1. Add onClick props
 *
 */

interface Props {
  /** Optional left margin */
  marginLeft?: number;
  /** Optional right margin */
  marginRight?: number;
}

export const Button = styled.button<Props>`
  font-family: ${typography["system"].fontFamily};
  font-size: ${typography["system"].fontSize};
  font-weight: ${typography["system"].fontWeight};
  line-height: ${typography["system"].lineHeight};
  text-transform: ${typography["system"].textTransform};
  letter-spacing: ${typography["system"].letterSpacing};

  padding: 15px 50px;
  border: 1px solid ${colors.black200};
  border-radius: 5px;
  box-sizing: border-radius;
  background: ${colors.orange200};

  margin-left: ${p => (p.marginLeft ? p.marginLeft : 0)}px;
  margin-right: ${p => (p.marginRight ? p.marginRight : 0)}px;

  cursor: pointer;
  outline: none;

  &:hover,
  &:focus {
    background: ${colors.black200};
    color: ${colors.orange200};
  }
`;
