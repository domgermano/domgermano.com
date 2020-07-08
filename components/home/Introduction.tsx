import * as React from "react";

import {
  Button,
  Colored,
  Divider,
  Grid,
  Section,
  Spacer,
  Text
} from "components/shared";
import styled, { keyframes } from "styled-components";

/**
 * TODO:
 *   1. Document
 *   2. Add poster to the video
 */

const draw = keyframes`
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
`;

const fade = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Introduction = () => (
  <Section>
    <Spacer spacing={80} />
    <Grid>
      <GridHi kind="display">Hi, my name's</GridHi>
      <GridName>
        <FlexText kind="display">Dom Germano</FlexText>
        <AnimatedDivider />
      </GridName>
      <GridRole kind="display">
        <Colored color="grey300">&</Colored> <br />
        I'm a digital product designer
      </GridRole>
      <GridDesc>
        <Text kind="paragraph">
          I live and work in Melbourne, Australia. In my role as the first
          creative member at an early startup, I've worn many hats. I consider
          myself a design all-rounder, with experience working in UX and UI,
          product strategy, front-end development and team operations.{" "}
        </Text>
        <Spacer spacing={20} />
        <Button>Get in touch</Button>
      </GridDesc>
      <GridVideo src="/home/portrait.mp4" muted autoPlay loop></GridVideo>
      <GridStory>
        <Text kind="paragraph">
          I’m not a vein person, I swear. But if you’re a designer like me,
          you’ll probably appreciate challenging it can be to boost your NPS.
          Creating and managing assessments shouldn't be hard, and it definitely
          shouldn't be boring. We've spent the last few months working on the
          Cadmus Teacher Environment, and we're excited to share some brand new
          changes with you today.
        </Text>
        <Text kind="paragraph">
          They're designed to make your assessment experience a little bit nicer
          and a whole lot simpler. And the best part? It's all here in time for
          your pre-semester setup. Let's take a look at what's new We've updated
          the look and feel of the Teacher Environment.
        </Text>
      </GridStory>
    </Grid>
  </Section>
);

const GridHi = styled(Text)`
  grid-column: 1 / span 12;

  animation: ${fade} 1s ease backwards;
  animation-delay: 0.5s;
`;

const GridName = styled.div`
  grid-column: 1 / span 12;
  display: flex;
  align-items: baseline;
`;

const FlexText = styled(Text)`
  flex: none;
  padding-right: 10px;
`;

const AnimatedDivider = styled(Divider)`
  transform-origin: left center;
  animation: ${draw} 1s ease backwards;
  animation-delay: 0s;
`;

const GridRole = styled(Text)`
  grid-column: 1 / span 6;

  animation: ${fade} 1s ease backwards;
  animation-delay: 0.8s;
`;

const GridDesc = styled.div`
  grid-column: 7 / span 5;
  grid-row: 3 / span 2;

  animation: ${fade} 1s ease-out backwards;
  animation-delay: 1.2s;
`;

const GridVideo = styled.video`
  grid-column: 1 / span 12;
  width: 100%;
  margin-top: 40px;

  animation: ${fade} 1s ease backwards;
  animation-delay: 1.5s;
`;

const GridStory = styled.div`
  grid-column: 2 / span 9;
  columns: 3;
  column-gap: 20px;
  margin-top: 30px;
`;
