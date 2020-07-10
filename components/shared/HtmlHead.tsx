import * as React from "react";

import Head from "next/head";

interface Props {
  videoSrc?: string;
}

export const HtmlHead = (props: Props) => (
  <Head>
    {/* Import fonts from Adobe Fonts API */}
    <link rel="stylesheet" href="https://use.typekit.net/hun7wbf.css" />
    {props.videoSrc && (
      <link rel="preload" href={props.videoSrc} as="video" type="video/mp4" />
    )}
  </Head>
);
