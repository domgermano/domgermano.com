import * as React from "react";

import { Introduction } from "components/home";
import { Footer, Header, HtmlHead } from "components/shared";

const Index = () => (
  <>
    <HtmlHead videoSrc="/home/portrait.mp4" />
    <Header />
    <Introduction />
    <Footer />
  </>
);

export default Index;
