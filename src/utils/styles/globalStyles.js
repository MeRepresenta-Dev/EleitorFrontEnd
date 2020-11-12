import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400&family=Montserrat:wght@600&family=Open+Sans&display=swap');

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
        justify-content: center;

        button {
          margin-bottom: 5px;
          margin-right: 5px;
        }
        
      }
    }

    .lista-candidatos-notes {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 32px;

      p, img {
        margin: 0;
      }

      .lista-candidatos-actions {
        display: flex;
        align-items: center;
        .Button {
          width: 45px !important;
          height: 45px;

          &:last-child {
            background: #4267B2;
            margin-left: 15px;
          }
        }
      }
    }

    main, footer {
      display: flex;
      flex-direction: column;
    }
  }
`

export default GlobalStyles
