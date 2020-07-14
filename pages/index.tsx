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
    <HtmlHead
      title="Dom — Digital Product Designer"
      description="A design all-rounder. One of those generalists with a wide range of experiences. I’ve worked in UX and UI, product strategy, marketing, front-end development and team management."
      videoSrc="/home/portrait.mp4"
      url="https://domgermano.design"
      type="website"
    />
    <Header />
    <Introduction />
    <Footer />
  </>
);

export default Index;
