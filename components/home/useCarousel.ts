import * as React from "react";

// const SlidePos: string[] = ["0%", "100%", "200%", "300%"];

/**
 * A hook to manage and update the state of the carousel
 */
export function useCarousel(slideNumber: number) {
  const [slideIndex, setSlide] = React.useState(0);

  // The index for the next slide in the series
  const next = (slideIndex + 1) % slideNumber;

  // The index for the previous slide in the series
  const prev = () => {
    if (slideIndex === 0) {
      return slideNumber - 1;
    }
    return (slideIndex - 1) % slideNumber;
  };

  return { setSlide, slideIndex, next, prev };
}
