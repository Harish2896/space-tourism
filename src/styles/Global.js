import { createGlobalStyle } from "styled-components";
import bgImgDesktop from "../assets/home/background-home-desktop.jpg";
import bgImgMobile from "../assets/home/background-home-mobile.jpg";
import bgDestinationDesktop from "../assets/destination/background-destination-desktop.jpg";
import bgDestinationMobile from "../assets/destination/background-destination-mobile.jpg";
import bgCrewDesktop from "../assets/crew/background-crew-desktop.jpg";
import bgCrewMobile from "../assets/crew/background-crew-mobile.jpg";
import bgTechnologyDesktop from "../assets/technology/background-technology-desktop.jpg";
import bgTechnologyMobile from "../assets/technology/background-technology-mobile.jpg";

export const Global = createGlobalStyle`

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
  box-sizing: border-box;
}
body{
  background-color:${({ theme }) => theme.colors.darkBlue};
}
a{
      text-decoration:none;font-family: "Barlow Condensed";
      color: ${({ theme }) => theme.colors.white};
      letter-spacing: 2.7px;
}
img{
    max-width:100%;
}
ul li{
    list-style-type:none;
}
.main-container{
    min-height:100vh;
    background-image: url(${bgImgDesktop});
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;

  @media (max-width: 420px) {
    background-image: url(${bgImgMobile});
    padding:10px 20px 0;
  }
}

.main-container.destination{
    background-image: url(${bgDestinationDesktop});

  @media (max-width: 420px) {
        background-image: url(${bgDestinationMobile});
      }
}
.main-container.crew{
  background-image: url(${bgCrewDesktop});

@media (max-width: 420px) {
      background-image: url(${bgCrewMobile});
    }
}
.main-container.technology{
  padding:0;
  background-image: url(${bgTechnologyDesktop});

@media (max-width: 420px) {
      background-image: url(${bgTechnologyMobile});
    }
}

`;
