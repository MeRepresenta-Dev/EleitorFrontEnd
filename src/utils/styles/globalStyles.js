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

    .tema-badge {
      background: #FFC43D;
      border-radius: 4px;
      display: inline-flex;
      padding: 6px;

      p { margin: 0;}
    }

    .alice-carousel__prev-btn, 
    .alice-carousel__next-btn{
      position: absolute;
      top: 50%;
      background: #1B9AAA;
      width: 30px;
      height: 30px;
      display: flex;
      align-items: center;
      border-radius: 100%;
      color: #FFF;
      justify-content: center;
    }

    .alice-carousel__prev-btn {
      left: -15px;
    }

    .alice-carousel__next-btn {
      right: -15px;
    }

    .lista-candidatos-title {
      margin-top: 48px;
      margin-bottom: 28px;

      p {
        margin: 0;
      }
    }

    .lista-candidatos-sub {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid silver;

      p {
        margin: 12px 0;
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
