import { createGlobalStyle } from "styled-components";

import normalise from "./normalise";

export const CssBaseline = createGlobalStyle`
 ${normalise}

 *::selection {
  background: #FDEBE2;
 }
 
 html {
   font-size: 16px;
   /* background: hsl(0, 15%, 95%); */
 }
`;
