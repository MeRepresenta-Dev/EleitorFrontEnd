import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Lato&family=Montserrat:wght@600&family=Open+Sans&display=swap');

  body {
    color: #4f4f4f;
    
    h1, h2, h3, h4, h5, h6 {
      font-family: 'Montserrat';
      font-weight: 500;
      margin: 0;
    }

    .contentBlock {
      margin: 24px 0;

      &.temas {
        display: flex;
        flex-wrap: wrap;

        button:not(:nth-child(3)) {
          margin-bottom: 5px;
          margin-right: 5px;
        }
        
      }
    }

    main {
      display: flex;
      flex-direction: column;
    }
  }
`

export default GlobalStyles
