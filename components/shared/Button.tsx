import styled from "styled-components";
import { colors } from "styles/colors";
import { typography } from "styles/typography";

/**
 * TODO:
 *   1. Add onClick props
 *
 */

export const Button = styled.button`
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

  cursor: pointer;
  outline: none;

  &:hover,
  &:focus {
    background: ${colors.black200};
    color: ${colors.orange200};
  }
`;
