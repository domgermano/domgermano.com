import * as React from "react";

import { Button, Grid, Hat, Section, Spacer, Text } from "components/shared";
import styled from "styled-components";
import { device } from "styles/device";

export const More = () => (
  <Section>
    <Spacer spacing={100} />
    <Grid>
      <RelativeContainer>
        <Text kind="display">More coming soon</Text>
        <Text kind="paragraph">
          There are more things I’d love to share — it’s just taking a little
          time for me to code it all up! I’m doing it all from scratch with
          React.
        </Text>
        <Hat hat="hard" position={[0, 34]} tablet={[0, 27]} rotate={10} />
      </RelativeContainer>
    </Grid>
    <Spacer spacing={100} />
  </Section>
);

const RelativeContainer = styled.div`
  grid-column: 3 / span 8;
  justify-self: center;
  position: relative;

  @media screen and (${device.mobile}) {
    grid-column: 2 / span 10;
  }
`;
