import { createGlobalStyle } from "styled-components";
import { colors } from "styles/colors";
import { device } from "styles/device";

import normalise from "./normalise";

export const CssBaseline = createGlobalStyle`
 ${normalise}

 *::selection {
  background: ${colors.orange200};
 }
 
 html {
   font-size: 16px;

   @media screen and (${device.tablet}) {
    font-size: 14px;
   }
 }
`;
