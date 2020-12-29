import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
  }
  * {
    box-sizing: border-box;
  }
  :root {
    --color-white: #fff;
    --color-snow: #f4f4f4;
    --color-smoke: #ebebeb;
    --color-silver: #ccc;
    --color-moon: #999;
    --color-nickel: #555;
    --color-coal: #333;
    --color-jet: #222;
    --color-midnight: #111;
    --color-black: #000;
    --color-light-blue: #0294e8;
    --color-blue: #0274b6;
    --color-dark-blue: #015483;
    --color-light-gold: #9e855e;
    --color-gold: #816d4d;
    --color-dark-gold: #69583e;
    --color-light-green: #0eb500;
    --color-green: #0a8200;
    --color-dark-green: #064f00;
    --color-light-red: #ff4d4d;
    --color-red: #e10000;
    --color-dark-red: #ba0000;
    --font-sans-serif: Retina, Arial, Helvetica, sans-serif;
    --font-sans-serif-wide: Retina Wide, Retina, Arial, Helvetica, sans-serif;
    --font-sans-serif-narrow: Retina Narrow, Retina, Arial, Helvetica, sans-serif;
    --font-serif: Exchange, Georgia, serif;
    --font-serif-display: Escrow Condensed, Georgia, serif;
  }
  @font-face{font-family:Retina;src:url(https://www.wsj.com/fonts/woffs/retina/Retina-Book.woff2) format("woff2"),url(https://www.wsj.com/fonts/woffs/retina/Retina-Book.woff) format("woff");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:Retina;src:url(https://www.wsj.com/fonts/woffs/retina/Retina-BookItalic.woff2) format("woff2"),url(https://www.wsj.com/fonts/woffs/retina/Retina-BookItalic.woff) format("woff");font-weight:400;font-style:italic;font-display:optional}@font-face{font-family:Retina;src:url(https://www.wsj.com/fonts/woffs/retina/Retina-Light.woff2) format("woff2"),url(https://www.wsj.com/fonts/woffs/retina/Retina-Light.woff) format("woff");font-weight:300;font-style:normal;font-display:swap}@font-face{font-family:Retina;src:url(https://www.wsj.com/fonts/woffs/retina/Retina-LightItalic.woff2) format("woff2"),url(https://www.wsj.com/fonts/woffs/retina/Retina-LightItalic.woff) format("woff");font-weight:300;font-style:italic;font-display:optional}@font-face{font-family:Retina;font-style:normal;font-weight:500;src:url(https://www.wsj.com/fonts/woffs/retina/Retina-Medium.woff2) format("woff2"),url(https://www.wsj.com/fonts/woffs/retina/Retina-Medium.woff) format("woff");font-display:swap}@font-face{font-family:Retina;font-style:italic;font-weight:500;src:url(https://www.wsj.com/fonts/woffs/retina/Retina-MediumItalic.woff2) format("woff2"),url(https://www.wsj.com/fonts/woffs/retina/Retina-MediumItalic.woff) format("woff");font-display:optional}@font-face{font-family:'Retina Narrow';font-style:normal;font-weight:300;src:url(https://www.wsj.com/fonts/woffs/retina/RetinaNarr-Light.woff2) format("woff2"),url(https://www.wsj.com/fonts/woffs/retina/RetinaNarr-Light.woff) format("woff");font-display:swap}@font-face{font-family:'Retina Narrow';font-style:italic;font-weight:300;src:url(https://www.wsj.com/fonts/woffs/retina/RetinaNarr-LightItalic.woff2) format("woff2"),url(https://www.wsj.com/fonts/woffs/retina/RetinaNarr-LightItalic.woff) format("woff");font-display:optional}@font-face{font-family:'Retina Narrow';font-style:normal;font-weight:400;src:url(https://www.wsj.com/fonts/woffs/retina/RetinaNarr-Book.woff2) format("woff2"),url(https://www.wsj.com/fonts/woffs/retina/RetinaNarr-Book.woff) format("woff");font-display:swap}@font-face{font-family:'Retina Narrow';font-style:italic;font-weight:400;src:url(https://www.wsj.com/fonts/woffs/retina/RetinaNarr-BookItalic.woff2) format("woff2"),url(https://www.wsj.com/fonts/woffs/retina/RetinaNarr-BookItalic.woff) format("woff");font-display:optional}@font-face{font-family:'Retina Narrow';font-style:normal;font-weight:500;src:url(https://www.wsj.com/fonts/woffs/retina/RetinaNarr-Medium.woff2) format("woff2"),url(https://www.wsj.com/fonts/woffs/retina/RetinaNarr-Medium.woff) format("woff");font-display:swap}@font-face{font-family:'Retina Narrow';font-style:italic;font-weight:500;src:url(https://www.wsj.com/fonts/woffs/retina/RetinaNarr-MediumItalic.woff2) format("woff2"),url(https://www.wsj.com/fonts/woffs/retina/RetinaNarr-MediumItalic.woff) format("woff");font-display:optional}@font-face{font-family:'Retina Narrow';font-style:normal;font-weight:700;src:url(https://www.wsj.com/fonts/woffs/retina/RetinaNarr-Bold.woff2) format("woff2"),url(https://www.wsj.com/fonts/woffs/retina/RetinaNarr-Bold.woff) format("woff");font-display:swap}@font-face{font-family:'Retina Narrow';font-style:italic;font-weight:700;src:url(https://www.wsj.com/fonts/woffs/retina/RetinaNarr-BoldItalic.woff2) format("woff2"),url(https://www.wsj.com/fonts/woffs/retina/RetinaNarr-BoldItalic.woff) format("woff");font-display:optional}@font-face{font-family:'Escrow Condensed';src:url(https://www.wsj.com/fonts/woffs/escrow/Escrow+Display+Condensed+Bold.woff2) format("woff2"),url(https://www.wsj.com/fonts/woffs/escrow/Escrow+Display+Condensed+Bold.woff) format("woff");font-weight:700;font-style:normal;font-display:swap}@font-face{font-family:'Escrow Condensed';src:url(https://www.wsj.com/fonts/woffs/escrow/Escrow+Display+Condensed+Bold+Italic.woff2) format("woff2"),url(https://www.wsj.com/fonts/woffs/escrow/Escrow+Display+Condensed+Bold+Italic.woff) format("woff");font-weight:700;font-style:italic;font-display:optional}@font-face{font-family:'Escrow Condensed';src:url(https://www.wsj.com/fonts/woffs/escrow/Escrow+Display+Condensed+Roman.woff2) format("woff2"),url(https://www.wsj.com/fonts/woffs/escrow/Escrow+Display+Condensed+Roman.woff) format("woff");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:'Escrow Condensed';src:url(https://www.wsj.com/fonts/woffs/escrow/Escrow+Display+Condensed+Italic.woff2) format("woff2"),url(https://www.wsj.com/fonts/woffs/escrow/Escrow+Display+Condensed+Italic.woff) format("woff");font-weight:400;font-style:italic;font-display:swap}@font-face{font-family:Exchange;src:url(https://www.wsj.com/fonts/woffs/exchange/Exchange-Book.woff2) format("woff2"),url(https://www.wsj.com/fonts/woffs/exchange/Exchange-Book.woff) format("woff");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:Exchange;src:url(https://www.wsj.com/fonts/woffs/exchange/Exchange-BookItalic.woff2) format("woff2"),url(https://www.wsj.com/fonts/woffs/exchange/Exchange-BookItalic.woff) format("woff");font-weight:400;font-style:italic;font-display:optional}@font-face{font-family:Exchange;src:url(https://www.wsj.com/fonts/woffs/exchange/Exchange-Medium.woff2) format("woff2"),url(https://www.wsj.com/fonts/woffs/exchange/Exchange-Medium.woff) format("woff");font-style:normal;font-weight:500;font-display:swap}@font-face{font-family:Exchange;src:url(https://www.wsj.com/fonts/woffs/exchange/Exchange-MediumItalic.woff2) format("woff2"),url(https://www.wsj.com/fonts/woffs/exchange/Exchange-MediumItalic.woff) format("woff");font-style:italic;font-weight:500;font-display:optional}
`;

export default GlobalStyle;
