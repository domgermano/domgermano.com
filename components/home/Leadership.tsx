import * as React from "react";

import {
  Anchor,
  Colored,
  Grid,
  Hat,
  SectionLabel,
  Spacer,
  Text
} from "components/shared";
import styled from "styled-components";
import { device } from "styles/device";

import { Squiggle } from "./Squiggle";

export const Leadership = () => (
  <Grid>
    <GridTitle kind="display">
      <Hat hat="captain" position={[-9, -5]} rotate={-15} />
      Design & Product Leadership
    </GridTitle>
    <GridDescription>
      <SectionLabel label="Some NPS stats" />
      <Callout kind="display">
        –80% <Colored color="grey300">to</Colored> +28%
      </Callout>
      <Spacer spacing={10} />
      <Text kind="paragraph">
        Have you heard of the{" "}
        <Anchor href="https://thedesignsquiggle.com/" newTab>
          Process of Design Squiggle by Damien Newman?
        </Anchor>{" "}
        For a simple illustration, it conveys a lot about the journey that
        designers and developers go through. Every problem we encounter begins
        with a mess of random thoughts, ideas and possibilities. The mark of a
        good leader is their ability to help a team navigate this type of
        uncertainty. I've had an amazing opportunity to work in a talented,
        cross-functional team, where I’ve taken on this leadership role. As a
        champion of quality craftsmanship and design thinking, my team and I
        have created products that our users and customers love.
      </Text>
    </GridDescription>
    <GridSquiggle />
  </Grid>
);

const GridTitle = styled(Text)`
  grid-column: 1 / span 5;
  position: relative;

  @media screen and (${device.tablet}) {
    grid-column: 1 / span 9;
  }

  @media screen and (${device.mobile}) {
    grid-column: 1 / span 12;
  }
`;

const GridDescription = styled.div`
  grid-column: 7 / span 5;
  grid-row: 1 / span 2;

  @media screen and (${device.tablet}) {
    grid-column: 3 / span 9;
    grid-row: 4 / span 5;
  }

  @media screen and (${device.mobile}) {
    grid-column: 1 / span 12;
  }
`;

const Callout = styled(Text)`
  font-size: 3.75rem;
`;

const GridSquiggle = styled(Squiggle)`
  grid-column: 1 / span 12;
  grid-row: 2 / span 2;
  width: 100%;
  display: block;
`;
