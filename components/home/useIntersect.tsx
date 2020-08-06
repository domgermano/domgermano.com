import * as React from "react";

interface OptionsProps {
  // indicate at what percentage of the target's visibility the observer's
  // callback should be executed
  threshold: number;
}
/**
 * A hook to set an Intersection Observer on an element. Observes the first time
 * a target element (ref) intersects the viewport then sets a visibility state
 * to true.
 */
export function useIntersect(options: OptionsProps) {
  // Set and store the ref of the target element you're observing. We're using
  // state instead of useRef, beacuse there may be conditions where the ref of
  // the element changes (e.g. rerender).
  const [ref, setRef] = React.useState<Element | null>(null);
  const [visible, setVisible] = React.useState(false);

  // Tracking the state of the first view
  let viewed = false;

  React.useEffect(() => {
    // Creating an IntersectionObserver
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        viewed = true;
      }
      setVisible(viewed);
    }, options);

    // Start observing our target element
    if (ref) {
      observer.observe(ref);
    }

    // Stop observing our target element after first view
    if (ref && viewed) {
      observer.unobserve(ref);
    }

    // useEffect cleanup function to unobserve the target element
    return () => {
      if (ref) {
        observer.unobserve(ref);
      }
    };
  }, [ref, options]);

  return { setRef, visible };
}
