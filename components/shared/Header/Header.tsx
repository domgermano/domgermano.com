import * as React from "react";

import styled, { keyframes } from "styled-components";

import { Block } from "../Block";
import { Box, Flex } from "../Flex";
import { IconButton } from "../IconButton";
import { Text } from "../Text";
import { usePinnedHeader } from "./usePinnedHeader";

export const Header = () => {
  let pin = usePinnedHeader();
  return (
    <Container pin={pin}>
      <Block>
        <Flex align="center" justify="space-between">
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
            <IconButton
              icon="/icons/mail.png"
              href="mailto:dg3rmano@gmail.com"
            />
          </Flex>
        </Flex>
      </Block>
    </Container>
  );
};

const Container = styled.header<{ pin: boolean }>`
  display: flex;
  height: 60px;
  width: 100%;
  position: fixed;
  top: 0;
  background: hsla(0, 0%, 100%, 0.9);
  backdrop-filter: blur(8px);

  transform: ${p => (p.pin ? "translateY(0px)" : "translateY(-60px)")};
  transition: transform 0.3s ease;

  z-index: 10;
`;

const sprite = keyframes`
  from {
    background-position: 0px;
  }
  to {
    background-position: -200px;
  }
`;

const Logo = styled.div`
  width: 40px;
  height: 40px;
  background-image: url("/hatsLogo.png");
  background-size: 500%;
  background-repeat: no-repeat;

  margin-right: 20px;

  animation: ${sprite} 10s steps(5) infinite;
`;
