import * as React from "react";

/** State and controller for the 'ContactContext' React context. */
interface ContextProps {
  /** Open/closed state for the Contact panel */
  open: boolean;
  /** Function to trigger a state change */
  toggle: () => void;
}

/**
 * A React context to store and control the open/closed state of the Contact
 * panel.
 *
 * This context provides a `toggle()` function which can be provided to any
 * child components through the useContext() hook. It also stores the `open`
 * state of the panel, to control it's UI.
 */

export const ContactContext = React.createContext<ContextProps>({
  open: false,
  toggle: () => undefined
});

/**
 * The Provider for the ContactContext
 */
export const ContactProvider: React.FC = props => {
  const [open, setOpen] = React.useState(false);
  const toggle = () => {
    setOpen(open === false ? true : false);
  };

  return (
    <ContactContext.Provider value={{ open, toggle }}>
      {props.children}
    </ContactContext.Provider>
  );
};
