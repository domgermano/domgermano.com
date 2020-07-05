import styled from "styled-components";
import { colors } from "styles/colors";
import { typography } from "styles/typography";

export const Button = styled.button`
  font-family: ${typography["system"].fontFamily};
  font-size: ${typography["system"].fontSize};
  font-weight: ${typography["system"].fontWeight};
  line-height: ${typography["system"].lineHeight};
  text-transform: ${typography["system"].textTransform};
  letter-spacing: ${typography["system"].letterSpacing};

  padding: 10px 30px;
  border: 1px solid ${colors.black200};
  border-radius: 2px;
  box-sizing: border-radius;
  background: transparent;

  cursor: pointer;

  &:hover {
    background: ${colors.black200};
    color: white;
  }
`;
