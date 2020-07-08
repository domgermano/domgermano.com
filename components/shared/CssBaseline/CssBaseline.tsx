import { createGlobalStyle } from "styled-components";
import { colors } from "styles/colors";

import normalise from "./normalise";

export const CssBaseline = createGlobalStyle`
 ${normalise}

 *::selection {
  background: ${colors.orange200};
 }
 
 html {
   font-size: 16px;
   /* background: hsl(0, 15%, 95%); */
 }
`;
