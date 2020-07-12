import * as React from "react";

import {
  Button,
  Colored,
  ContactContext,
  Divider,
  Grid,
  Section,
  Spacer,
  Text
} from "components/shared";
import styled, { keyframes } from "styled-components";
import { device } from "styles/device";

/**
 * INTRODUCTION
 *
 * Allow me to introduce myself. An animated welcome sequence. Consists of a
 * welcome message, an animated portrait, and a short description of my work
 * experience to date.
 *
 */
export const Introduction = () => {
  const contact = React.useContext(ContactContext);
  return (
    <Section>
      <Spacer spacing={80} />
      <IntroGrid>
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
            product strategy, front-end development and team operations.
          </Text>
          <Spacer spacing={20} />
          <Button onClick={contact.toggle}>Get in touch</Button>
        </GridDesc>
        <GridVideo
          id="video"
          poster="/home/poster.jpg"
          src="/home/portrait.mp4"
          muted
          autoPlay
          loop
        />
        <GridStory>
          <Text kind="paragraph">
            I’m not a vein person, I swear. But if you’re a designer like me,
            you’ll probably appreciate challenging it can be to boost your NPS.
            Creating and managing assessments shouldn't be hard, and it
            definitely shouldn't be boring. We've spent the last few months
            working on the Cadmus Teacher Environment, and we're excited to
            share some brand new changes with you today.
          </Text>
          <Text kind="paragraph">
            They're designed to make your assessment experience a little bit
            nicer and a whole lot simpler. And the best part? It's all here in
            time for your pre-semester setup. Let's take a look at what's new
            We've updated the look and feel of the Teacher Environment.
          </Text>
        </GridStory>
      </IntroGrid>
    </Section>
  );
};

// KEYFRAMES
// =============================================================================
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

// UI COMPONENTS
// =============================================================================
const IntroGrid = styled(Grid)`
  grid-template-areas:
    "hi hi hi hi hi hi hi hi hi hi hi hi"
    "name name name name name name name name name name name name"
    "role role role role role role desc desc desc desc desc ."
    "vid vid vid vid vid vid vid vid vid vid vid vid"
    ". story story story story story story story story story . .";

  @media screen and (${device.tablet}) {
    grid-template-areas:
      "hi hi hi hi hi hi hi hi hi hi hi hi"
      "name name name name name name name name name name name name"
      "role role role role role role desc desc desc desc desc desc"
      "vid vid vid vid vid vid vid vid vid vid vid vid"
      "story story story story story story story story story story story story";
  }

  @media screen and (${device.mobile}) {
    grid-template-areas:
      "hi hi hi hi hi hi hi hi hi hi hi hi"
      "name name name name name name name name name name name name"
      "role role role role role role role role role role role ."
      "desc desc desc desc desc desc desc desc desc desc desc ."
      "vid vid vid vid vid vid vid vid vid vid vid vid"
      "story story story story story story story story story story story story";
  }
`;

const GridHi = styled(Text)`
  grid-area: hi;

  animation: ${fade} 1s ease backwards;
  animation-delay: 0.5s;
`;

const GridName = styled.div`
  grid-area: name;
  display: flex;
  align-items: baseline;
`;

const FlexText = styled(Text)`
  flex: none;
  padding-right: 10px;

  @media screen and (${device.mobile}) {
    flex: auto;
  }
`;

const AnimatedDivider = styled(Divider)`
  transform-origin: left center;
  animation: ${draw} 1s ease backwards;
  animation-delay: 0s;
`;

const GridRole = styled(Text)`
  grid-area: role;

  animation: ${fade} 1s ease backwards;
  animation-delay: 0.8s;

  margin-right: 20px;

  @media screen and (${device.mobile}) {
    display: none;
  }
`;

const GridDesc = styled.div`
  grid-area: desc;

  animation: ${fade} 1s ease-out backwards;
  animation-delay: 1.2s;

  @media screen and (${device.tablet}) {
    margin-top: 20px;
  }
`;

const GridVideo = styled.video`
  grid-area: vid;
  width: 100%;
  margin-top: 40px;

  min-height: 200px;
  object-fit: cover;

  animation: ${fade} 1s ease backwards;
  animation-delay: 1.5s;
`;

const GridStory = styled.div`
  grid-area: story;
  columns: 3;
  column-gap: 20px;
  margin-top: 30px;

  @media screen and (${device.tablet}) {
    columns: 2;
  }

  @media screen and (${device.mobile}) {
    columns: 1;
  }
`;
