import * as React from "react";

import styled, { keyframes } from "styled-components";
import { colors } from "styles/colors";
import { device } from "styles/device";
import { typography } from "styles/typography";

import { Button } from "../Button";
import { IconButton } from "../IconButton";
import { Text } from "../Text";
import { ContactContext } from "./ContactContext";

/**
 * CONTACT
 *
 * An sidebar with a contact form. I'm using Netlify's built-in form handling.
 * Their build bots parse your form HTML directly at deploy time, so there's no
 * need to make an API call. https://docs.netlify.com/forms/setup/
 *
 * Note: Includes a simple honeypot field for spam filtering.
 *
 */

export const Contact = () => {
  /** Context hook access state and controller for the Contact panel */
  const contact = React.useContext(ContactContext);

  return (
    <Aside open={contact.open}>
      <Content>
        <CloseButton icon="/icons/close.png" onClick={contact.toggle} />
        <GetInTouch>
          <Text kind="display">Get in touch</Text>
          <Text kind="paragraph">
            Things I like to talk about include design, motorcycles and Disney
            movies.
          </Text>
          <form
            name="Contact"
            method="POST"
            netlify-honeypot="cheekyRobots"
            data-netlify="true"
          >
            {/* Netlify requires us to manually add a "form-name" field because we are using react. https://www.netlify.com/blog/2017/07/20/how-to-integrate-netlifys-form-handling-in-a-react-app/ */}
            <input type="hidden" name="form-name" value="Contact" />
            <Input
              name="Name"
              placeholder="*NAME"
              type="text"
              required
              spellCheck="false"
            />
            <Input
              name="Email"
              placeholder="*EMAIL"
              type="email"
              required
              spellCheck="false"
            />
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
        </GetInTouch>
      </Content>
      <Blockout />
    </Aside>
  );
};

// KEYFRAMES
// =============================================================================
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

// UI COMPONENTS
// =============================================================================
const Aside = styled.aside<{ open: boolean }>`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;

  display: ${p => (p.open ? "grid" : "none")};
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

  @media screen and (${device.tablet}) {
    grid-column: 1 / span 2;
  }
`;

const GetInTouch = styled.div`
  max-width: 800px;
  padding: 80px 50px;
  box-sizing: border-box;

  margin: auto;
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

  font-family: ${typography["hand"].fontFamily};
  font-weight: ${typography["hand"].fontWeight};
  line-height: ${typography["hand"].lineHeight};
  letter-spacing: 2px;
  font-size: 1.5rem;

  color: ${colors.black100};
  background: transparent;
  border: none;

  outline: none;

  &::placeholder {
    color: ${colors.grey300};
    font-family: ${typography["system"].fontFamily};
    font-weight: ${typography["system"].fontWeight};
    line-height: ${typography["system"].lineHeight};
  }

  &:hover::placeholder,
  &:focus::placeholder {
    color: ${colors.grey500};
  }
`;

const TextArea = styled(Input).attrs(() => ({
  as: "textarea"
}))`
  height: 25vh;
  min-height: 150px;
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
