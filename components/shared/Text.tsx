import styled, { css } from "styled-components";
import { colors } from "styles/colors";
import { Typography, typography } from "styles/typography";

interface Props {
  /** Typography kind */
  kind: Typography;
  /** Optional indent */
  indent?: boolean;
}

const textColor = (props: Props) => {
  switch (props.kind) {
    case "display":
    case "label":
    case "hand":
    case "system":
      return css`
        color: ${colors.black200};
      `;

    default:
      return css`
        color: ${colors.black100};
      `;
  }
};

export const Text = styled.span.attrs((props: Props) => ({
  as: typography[props.kind].element
}))<Props>`
  font-family: ${p => typography[p.kind].fontFamily};
  font-size: ${p => typography[p.kind].fontSize};
  font-weight: ${p => typography[p.kind].fontWeight};
  line-height: ${p => typography[p.kind].lineHeight};
  padding-top: ${p => typography[p.kind].paddingTop};
  padding-bottom: ${p => typography[p.kind].paddingBottom};
  text-transform: ${p => typography[p.kind].textTransform};
  letter-spacing: ${p => typography[p.kind].letterSpacing};

  text-indent: ${p => (p.indent ? "2em" : "initial")};

  ${textColor}

  margin: 0;
`;
