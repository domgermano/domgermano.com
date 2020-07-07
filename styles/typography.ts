export const typography = {
  display: {
    fontFamily: "meno-banner-condensed",
    fontSize: "4.75rem",
    fontWeight: "900",
    lineHeight: "1",
    paddingTop: "10px",
    paddingBottom: "10px",
    textTransform: "initial",
    letterSpacing: "initial",
    element: "h1"
  },
  label: {
    fontFamily: "utopia-std-display",
    fontSize: "1.25rem",
    fontWeight: "600",
    lineHeight: "1.75",
    paddingTop: "4px",
    paddingBottom: "4px",
    textTransform: "initial",
    letterSpacing: "initial",
    element: "h6"
  },
  paragraph: {
    fontFamily: "minion-pro",
    fontSize: "1.25rem",
    fontWeight: "400",
    lineHeight: "1.4",
    paddingTop: "0px",
    paddingBottom: "0px",
    textTransform: "initial",
    letterSpacing: "-0.3px",
    element: "p"
  },
  hand: {
    fontFamily: "felt-tip-roman",
    fontSize: "1rem",
    fontWeight: "400",
    lineHeight: "1.4",
    paddingTop: "0px",
    paddingBottom: "0px",
    textTransform: "uppercase",
    letterSpacing: "2px",
    element: "p"
  },
  system: {
    fontFamily: "acumin-pro-condensed",
    fontSize: "0.875rem",
    fontWeight: "700",
    lineHeight: "1.4",
    paddingTop: "0px",
    paddingBottom: "0px",
    textTransform: "uppercase",
    letterSpacing: "5px",
    element: "p"
  }
};

export type Typography = keyof typeof typography;
