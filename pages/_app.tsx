import { Contact, ContactProvider } from "components/shared";
import { CssBaseline } from "components/shared/CssBaseline";
import App from "next/app";

export default class MyAPP extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <CssBaseline />
        <ContactProvider>
          <Contact />
          <Component {...pageProps} />
        </ContactProvider>
      </>
    );
  }
}
