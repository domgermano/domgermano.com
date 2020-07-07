import { useCallback, useEffect, useState } from "react";

// Initialise some variables for auto-hiding on scroll
let lastKnownScrollY = 0;
let currentScrollY = 0;
let ticking = false;

/** A custom hook to determine whether a header needs to be pinned or hidden. */
export function usePinnedHeader() {
  const [pin, setPin] = useState(true);

  // Calculate whether you are scrolling up or down and setPin
  const update = useCallback(() => {
    if (currentScrollY <= 10) {
      setPin(true);
    } else if (currentScrollY < lastKnownScrollY - 10) {
      setPin(true);
    } else if (currentScrollY > lastKnownScrollY + 5) {
      setPin(false);
    }
    lastKnownScrollY = currentScrollY;
    ticking = false;
  }, [setPin]);

  // callback to determine when scrolling
  const onScroll = useCallback(() => {
    currentScrollY = window.pageYOffset;
    if (!ticking) {
      requestAnimationFrame(update);
    }
    ticking = true;
  }, [update]);

  // Add event listener when scrolling
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [onScroll]);

  return pin;
}
