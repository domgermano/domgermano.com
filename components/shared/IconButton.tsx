import * as React from "react";

import styled from "styled-components";

interface Props {
  /* Icon src sprite sheet */
  icon: string;
  /* An optional href to make a link nav */
  href?: string;
  /**
   * adds left margin in px
   * @default 0
   */
  marginLeft?: number;

  /**
   * adds right margin in px
   * @default 0
   */
  marginRight?: number;
  onClick?: () => void;
}

export const IconButton = (props: Props) => {
  if (props.href) {
    return (
      <a
        href={props.href}
        tabIndex={-1}
        target="_blank"
        rel="noreferrer noopener"
      >
        <Button {...props} />
      </a>
    );
  }
  return <Button {...props} />;
};

export const Button = styled.button<Props>`
  width: 40px;
  height: 40px;
  border-radius: 50%;

  margin-left: ${p => (p.marginLeft ? `${p.marginLeft}px` : 0)};
  margin-right: ${p => (p.marginRight ? `${p.marginRight}px` : 0)};

  /* prevent button from growing or shrinking when flexed by a parent */
  flex: none;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  box-sizing: border-box;
  border: none;
  cursor: pointer;
  outline: none;

  background: url(${p => p.icon});
  background-size: 100%;

  &:hover,
  &:focus {
    background-position: bottom;
  }
`;
