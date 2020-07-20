import * as React from "react";

import { Carousel } from "components/home";
import { Block, Grid, Hat, IconButton, Section, Text } from "components/shared";
import styled from "styled-components";

import { useCarousel } from "./useCarousel";

export const Design = () => {
  const { slide, setSlide, slideIndex, next, prev } = useCarousel();

  return (
    <Section>
      <Block>
        <DesignGrid>
          <GridTitle>
            <Text kind="display">
              <Hat hat="cap" right={57} top={1} rotate={-30} />
              UI <br />&<br /> UX
            </Text>
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
          <Carousel slide={slide} slideIndex={slideIndex} setSlide={setSlide} />
        </DesignGrid>
      </Block>
    </Section>
  );
};

const DesignGrid = styled(Grid)`
  grid-row-gap: 10px;

  padding: 50px 0 20px;
  background: url("home/carouselBackground.jpg");
  background-size: cover;
  overflow-x: hidden;
`;

const GridTitle = styled.div`
  grid-column: 1 / span 2;
  grid-row: 1;
  text-align: right;
  padding-right: 20px;

  z-index: 2;
`;
