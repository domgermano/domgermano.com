import * as React from "react";

import { Carousel } from "components/home";
import { Grid, Hat, IconButton, Section, Text } from "components/shared";
import styled from "styled-components";
import { device } from "styles/device";

import { useCarousel } from "./useCarousel";

export const Design = () => {
  const { setSlide, slideIndex, next, prev } = useCarousel(5);

  return (
    <Section>
      <DesignGrid>
        <GridTitle>
          <TextContainer>
            <Text kind="display">UI & UX</Text>
            <Hat hat="cap" position={[-1, -12]} rotate={-30} />
          </TextContainer>
          <IconButton
            icon="/icons/previous.png"
            onClick={() => setSlide(prev)}
          />
          <IconButton
            icon="/icons/next.png"
            onClick={() => setSlide(next)}
            marginLeft={20}
          />
        </GridTitle>
        <Carousel slideIndex={slideIndex} setSlide={setSlide} />
      </DesignGrid>
    </Section>
  );
};

const DesignGrid = styled(Grid)`
  grid-row-gap: 10px;

  padding: 50px 0 20px;
  background: url("home/carouselBackground.jpg");
  background-size: cover;
  overflow-x: hidden;

  @media screen and (${device.mobile}) {
    grid-row-gap: 20px;
    padding: 20px;
  }
`;

const GridTitle = styled.div`
  grid-column: 1 / span 2;
  grid-row: 1 / span 2;
  text-align: right;
  padding: 30px 20px 0 0;
  justify-self: flex-end;
  width: 100px;

  position: relative;
  z-index: 2;

  @media screen and (${device.tablet}) {
    grid-column: 1 / span 3;
  }

  @media screen and (${device.mobile}) {
    grid-column: 1 / span 12;
    grid-row: 1 / span 1;
    width: 360px;
    padding: 0 20px;
  }
`;

const TextContainer = styled.div`
  position: relative;
`;
