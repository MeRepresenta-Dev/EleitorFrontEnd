import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Lato&family=Montserrat:wght@600&family=Open+Sans&display=swap');

  body {
    color: #4f4f4f;
    h1, h2, h3, h4, h5, h6 {
      font-family: 'Montserrat';
      margin: 0;
    }

    .text-green {
      color: #1B9AAA;
    }

    .text-pink {
      color: #EF476F;
    }
  }
`

export default GlobalStyles
