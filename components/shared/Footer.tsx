import * as React from "react";

import styled from "styled-components";

import { Block } from "./Block";
import { Divider } from "./Divider";
import { Box, Flex } from "./Flex";
import { IconButton } from "./IconButton";
import { Text } from "./Text";

/**
 * TODO:
 *   1. Figure out the Box, Flex and Block API's
 */

export const Footer = () => (
  <Container as="footer">
    <Divider />
    <Flex height="100%" align="center" justify="space-between">
      <Text kind="hand">That's me in a nutshell</Text>
      <Box>
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
        <IconButton icon="/icons/mail.png" href="mailto:dg3rmano@gmail.com" />
      </Box>
    </Flex>
  </Container>
);

const Container = styled(Block)`
  height: 80px;
  margin-bottom: 20px;
`;
