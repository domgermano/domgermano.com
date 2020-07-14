import * as React from "react";

import {
  Button,
  Colored,
  ContactContext,
  Divider,
  Flex,
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
            I live and work in Melbourne, Australia and I consider myself to be
            a design all-rounder. One of those generalists with a wide range of
            experiences. As the first creative member at an early startup, I’ve
            worked in UX and UI, product strategy, marketing, front-end
            development and team management.
          </Text>
          <Spacer spacing={40} />
          <Flex align="center" justify="flex-end">
            <HatsText kind="hand">
              In other words,
              <br /> I wear many hats
            </HatsText>
            <Button onClick={contact.toggle}>Get in touch</Button>
          </Flex>
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
            Yep, that’s me. I never set out to be a digital designer. I actually
            studied to become a Mechanical Engineer. Although I have a very
            practical mind, I’ve always loved the fine detail and craftsmanship
            of well designed products. While studying, I always figured I’d
            combine my passions and become an automotive engineer or industrial
            designer.
          </Text>
          <Text kind="paragraph">
            It never occurred to me to go digital until after I graduated from
            university. Friends of mine asked if I could design a logo for their
            brand new startup. One thing lead to another, and pretty soon they
            offered me a job “doing UX”. Of course I had no idea what that meant
            at the time, but I accepted anyway.
          </Text>
          <Text kind="paragraph">
            For the past 5 years I’ve been a student and teacher of digital
            product design. I've had an amazing opportunity to work in a
            talented, cross-functional team, where I learnt how different
            perspectives combine to build great products. These days, I’m a big
            believer that “designers should learn to code”, and the most
            adaptable teams embed themselves and learn from other disciplines
            within a business.
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

const HatsText = styled(Text)`
  transform: rotate(-2deg);
  text-indent: -20px;
  margin-right: 30px;

  @media screen and (${device.tablet}) {
    margin-right: 20px;
    text-indent: 0;
  }
`;

const GridVideo = styled.video`
  grid-area: vid;
  width: 100%;
  margin-top: 50px;

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
