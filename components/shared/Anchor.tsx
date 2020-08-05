import styled from "styled-components";
import { colors } from "styles/colors";

interface Props extends React.HTMLAttributes<HTMLAnchorElement> {
  /** Navigate to a new tab */
  newTab?: boolean;
}

/**
 * Anchored is a simple utility that can be used to wrap a child component with
 * an `<a>` tag.
 *
 * Wrap any of the CUI buttons to use it to navigate to an external URL (e.g. a
 * website page). Tab index is managed for you, so ally is preserved.
 */
export const Anchor = styled.a.attrs<Props>(p => ({
  ...(p.newTab && {
    target: "_blank",
    rel: "noopener noreferrer"
  })
}))<Props>`
  text-decoration: none;
  color: inherit;
  outline: none;
  background-image: linear-gradient(
    to right,
    ${colors.orange200} 0%,
    ${colors.orange200} 100%
  );
  background-repeat: no-repeat;
  background-size: 100% 30%;
  background-position: bottom left;

  transition: background 0.2s ease-out;
  will-change: background;
  transform: translateZ(0);

  cursor: pointer;

  &:hover,
  &:focus {
    background-size: 100% 100%;
  }
`;
