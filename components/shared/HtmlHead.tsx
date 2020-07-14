import * as React from "react";

import Head from "next/head";

interface Props {
  /** Tab Title */
  title: string;
  /** Google page description */
  description: string;
  /** Page URL */
  url: string;
  /** Type */
  type: "website" | "blog" | "article";
  /** Otional video src for preloading */
  videoSrc?: string;

  /**
   * Social media props
   */
  imgSrc?: string;
  imgAlt?: string;
}

export const HtmlHead: React.FC<Props> = props => (
  <Head>
    <title>{props.title}</title>
    <meta name="description" content={props.description} />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="apple-mobile-web-app-title" content="Dom Germano" />
    <meta name="application-name" content="Dom Germano" />
    <meta name="theme-color" content="#FDF6F1" />

    {/* Facebook & LinkedIn */}
    <meta property="og:title" content={props.title} />
    <meta property="og:description" content={props.description} />
    <meta property="og:url" content={props.url} />
    <meta property="og:type" content={props.type} />
    <meta property="og:image" content={props.imgSrc} />

    {/* Twitter */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={props.title} />
    <meta name="twitter:description" content={props.description} />
    <meta name="twitter:image" content={props.imgSrc} />
    <meta name="twitter:image:alt" content={props.imgAlt} />

    {/* Import fonts from Adobe Fonts API */}
    <link rel="stylesheet" href="https://use.typekit.net/hun7wbf.css" />

    {/* Favicon generated using https://favicon.io/ */}
    <link rel="shortcut icon" href="/static/favicon.ico" type="image/x-icon" />
    <link rel="icon" href="/static/favicon.ico" type="image/x-icon" />
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="/static/apple-touch-icon.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="/static/favicon-32x32.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="/static/favicon-16x16.png"
    />
    <link
      rel="mask-icon"
      href="/static/safari-pinned-tab.svg"
      color="#12a1a1"
    />
    <link rel="manifest" href="/static/site.webmanifest" />

    {/* Optional video preloading */}
    {props.videoSrc && (
      <link rel="preload" href={props.videoSrc} as="video" type="video/mp4" />
    )}
    {props.children}
  </Head>
);
