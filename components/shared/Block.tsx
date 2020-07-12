import styled from "styled-components";
import { device } from "styles/device";

import { Box } from "./Flex";

export const Block = styled(Box)`
  width: 100%;
  max-width: 1380px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 50px;
  padding-right: 50px;
  box-sizing: border-box;

  @media screen and (${device.mobile}) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;
