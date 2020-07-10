import * as React from "react";

import styled, { keyframes } from "styled-components";
import { colors } from "styles/colors";
import { typography } from "styles/typography";

import { Block } from "../Block";
import { Button } from "../Button";
import { IconButton } from "../IconButton";
import { Spacer } from "../Spacer";
import { Text } from "../Text";
import { ContactContext } from "./ContactContext";

export const Contact = () => {
  /** Context hook access state and controller for the Contact panel */
  const contact = React.useContext(ContactContext);
  if (contact.open === true) {
    return (
      <Aside>
        <Content>
          <CloseButton icon="/icons/close.png" onClick={contact.toggle} />
          <Block>
            <Spacer spacing={80} />
            <Text kind="display">Get in touch</Text>
            <Text kind="paragraph">
              Feel free to reach out and say hi. Things I like to talk about
              include Design, Disney movies and motorcycles.
            </Text>
            <form
              name="Contact"
              method="POST"
              netlify-honeypot="cheekyRobots"
              data-netlify="true"
            >
              <Input
                name="Name"
                placeholder="*NAME"
                type="text"
                required
                autoFocus
              />
              <Input name="Email" placeholder="*EMAIL" type="email" required />
              <TextArea name="Message" placeholder="*MESSAGE" required />
              <HiddenInput
                name="cheekyRobots"
                type="text"
                tabIndex={-1}
                value=""
                readOnly
              />
              <Button type="submit">Dispatch carrier pidgeon</Button>
            </form>
            <Spacer spacing={80} />
          </Block>
        </Content>
        <Blockout />
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

  display: grid;
  grid-template-columns: 1.618fr 1fr;
`;

const Content = styled.div`
  grid-column: 1 / span 1;
  grid-row: 1;
  width: 100%;
  min-width: 360px;
  z-index: 2;
  border-right: 1px solid ${colors.grey500};
  overflow-y: auto;

  background: ${colors.orange100};

  animation: ${swipe} 1s cubic-bezier(0.16, 1, 0.3, 1);
  position: relative;
`;

const Blockout = styled.div`
  grid-column: 1 / span 2;
  grid-row: 1;
  height: 100%;
  background: hsla(0, 0%, 100%, 0.9);
  backdrop-filter: blur(8px);
  animation: ${fade} 1s ease-out;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  box-sizing: border-box;
  margin: 40px 0;

  font-family: ${typography["system"].fontFamily};
  font-weight: ${typography["system"].fontWeight};
  line-height: ${typography["system"].lineHeight};
  /* text-transform: ${typography["system"].textTransform}; */
  letter-spacing: 2px;
  font-size: 1.5rem;

  color: ${colors.black100};
  background: transparent;
  border: none;

  outline: none;

  &::placeholder {
    color: ${colors.grey300};
  }

  &:hover::placeholder,
  &:focus::placeholder {
    color: ${colors.grey500};
  }
`;

const TextArea = styled(Input).attrs(() => ({
  as: "textarea"
}))`
  min-height: 25vh;
  resize: vertical;
  padding-right: 20px;
`;

const CloseButton = styled(IconButton)`
  position: absolute;
  right: 20px;
  top: 30px;
`;

const HiddenInput = styled.input`
  opacity: 0;
  position: absolute;
  left: -10000px;
`;
