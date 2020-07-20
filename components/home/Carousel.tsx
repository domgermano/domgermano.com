import * as React from "react";

import { Flex } from "components/shared";
import styled from "styled-components";

interface Props {
  slide: string;
  slideIndex: number;
  setSlide: React.Dispatch<React.SetStateAction<number>>;
}

export const Carousel = (props: Props) => {
  return (
    <>
      <View>
        <Reel slide={props.slide}>
          <Slide>
            <Img src="home/CallToAction.jpg" />
          </Slide>
          <Slide>
            <Img src="home/CallToAction.jpg" />
          </Slide>
          <Slide>
            <Img src="home/CallToAction.jpg" />
          </Slide>
          <Slide>
            <Img src="home/CallToAction.jpg" />
          </Slide>
        </Reel>
      </View>
      <Buttons justify="center">
        <ButtonContainer>
          <Indicator slide={props.slide} />
          <Button
            selected={props.slideIndex === 0}
            onClick={() => props.setSlide(0)}
          />
          <Button
            selected={props.slideIndex === 1}
            onClick={() => props.setSlide(1)}
          />
          <Button
            selected={props.slideIndex === 2}
            onClick={() => props.setSlide(2)}
          />
          <Button
            selected={props.slideIndex === 3}
            onClick={() => props.setSlide(3)}
          />
        </ButtonContainer>
      </Buttons>
    </>
  );
};

const View = styled.div`
  grid-column: 1 / span 12;
  grid-row: 1;

  z-index: 1;
  scroll-behavior: smooth;
`;

const Reel = styled(Flex)<{ slide?: string }>`
  transform: translateX(-${p => p.slide});
  transition: transform 0.6s ease;
`;

const Slide = styled.div`
  flex: none;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 20px;
`;

const Img = styled.img`
  grid-column: 3 / span 9;
  width: 100%;
  border-radius: 5px;
  display: block;
  box-shadow: -20px -15px 60px 20px rgba(255, 255, 255, 0.3),
    1px 1px 2px 0 rgba(15, 23, 46, 0.08),
    25px 25px 70px 30px rgba(15, 23, 46, 0.09), inset 1px 1px 4px 0 #ffffff;
  border-radius: 3px;
`;

const Buttons = styled(Flex)`
  grid-column: 3 / span 9;
  grid-row: 2;
  z-index: 2;
`;

const ButtonContainer = styled.div`
  position: relative;
`;

const Button = styled.button<{ selected?: boolean }>`
  width: 40px;
  height: 40px;

  border: none;
  background: none;
  background-image: url("/home/carouselInactive.png");
  background-size: 100%;

  cursor: pointer;
  outline: none;

  &:hover,
  &:focus {
    background-position: 0% 40px;
  }
`;

const Indicator = styled.div<{ slide?: string }>`
  width: 40px;
  height: 40px;
  border: none;
  background: none;
  background-image: url("/home/carouselActive.png");
  background-size: 100%;

  position: absolute;

  transform: translateX(${p => p.slide});
  transition: transform 0.3s ease-out;
`;
