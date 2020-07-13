import * as React from "react";

import { Introduction } from "components/home";
import { Footer, Header, HtmlHead } from "components/shared";

/**
 * TODO:
 *   1. Add all <head /> metadata
 *   2. Lighthouse audit optimisation
 *   3. Image optimisation?
 *   4. Website copy
 *   5. Favicon
 */

const Index = () => (
  <>
    <HtmlHead videoSrc="/home/portrait.mp4" />
    <Header />
    <Introduction />
    <Footer />
  </>
);

export default Index;
