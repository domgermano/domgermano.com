import * as React from "react";

import styled, { keyframes } from "styled-components";
import { colors } from "styles/colors";

import { Block } from "../Block";
import { Text } from "../Text";
import { ContactContext } from "./ContactContext";

export const Contact = () => {
  /** Context hook access state and controller for the Contact panel */
  const contact = React.useContext(ContactContext);
  if (contact.open === true) {
    return (
      <Aside>
        <Blockout />
        <Content>
          <Block>
            <Text kind="display">A big contact form</Text>
            <button onClick={contact.toggle}>Close me</button>
          </Block>
        </Content>
      </Aside>
    );
  }
  return null;
};

const fade = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const swipe = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0%);
  }
`;

const Aside = styled.aside`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
`;

const Content = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  max-width: 62%;
  min-width: 360px;
  z-index: 2;
  border-right: 1px solid ${colors.grey500};

  animation: ${swipe} 1s cubic-bezier(0.16, 1, 0.3, 1);

  background: ${colors.orange100};
`;

const Blockout = styled.div`
  flex: auto;
  height: 100%;
  background: hsla(0, 0%, 100%, 0.9);
  backdrop-filter: blur(8px);
  animation: ${fade} 1s ease-out;
`;
