import * as React from "react";

import { ContactContext } from "components/shared/Contact/ContactContext";
import styled, { keyframes } from "styled-components";
import { device } from "styles/device";

import { Block } from "../Block";
import { Box, Flex } from "../Flex";
import { IconButton } from "../IconButton";
import { Text } from "../Text";
import { usePinnedHeader } from "./usePinnedHeader";

/**
 * HEADER
 *
 * External navigation links to my other profile pages, including Dribbble and
 * GitHub.
 *
 * To maximise viewing space for the content of a web page, the header
 * auto-hides on scroll.
 *
 */

export const Header = () => {
  /** Custom hook to pin header on scroll */
  let pin = usePinnedHeader();

  /** Context hook access state and controller for the Contact panel */
  const contact = React.useContext(ContactContext);

  return (
    <Container pin={contact.open === true ? false : pin}>
      <Block>
        <Box height="100px">
          <Flex
            width="100%"
            height="100%"
            align="center"
            justify="space-between"
          >
            <Box>
              <Flex align="center">
                <Logo />
                <Text kind="hand">Dom Germano</Text>
              </Flex>
            </Box>
            <Flex>
              <IconButton
                icon="/icons/dribbble.png"
                href="https://dribbble.com/dom_germano"
                marginRight={20}
              />
              <IconButton
                icon="/icons/github.png"
                href="https://github.com/domgermano"
                marginRight={20}
              />
              <IconButton icon="/icons/mail.png" onClick={contact.toggle} />
            </Flex>
          </Flex>
        </Box>
      </Block>
    </Container>
  );
};

// KEYFRAMES
// =============================================================================
const logoSprite = keyframes`
  from {
    background-position: 0px;
  }
  to {
    background-position: -200px;
  }
`;

// UI COMPONENTS
// =============================================================================
const Container = styled.header<{ pin: boolean }>`
  position: fixed;
  top: 0;
  width: 100%;

  background: hsla(0, 0%, 100%, 0.9);
  backdrop-filter: blur(8px);

  transform: ${p => (p.pin ? "translateY(0px)" : "translateY(-100px)")};
  transition: transform 0.3s ease;

  z-index: 10;

  @media screen and (${device.mobile}) {
    height: 70px;
  }
`;

const Logo = styled.div`
  width: 40px;
  height: 40px;
  background-image: url("/hatsLogo.png");
  background-size: 500%;
  background-repeat: no-repeat;

  margin-right: 20px;

  animation: ${logoSprite} 10s steps(5) infinite;

  @media screen and (${device.mobile}) {
    display: none;
  }
`;
