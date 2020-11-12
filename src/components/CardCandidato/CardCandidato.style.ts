import styled from "styled-components"

const StyledCardCandidato = styled.div`
  border: 1px solid ${({theme}) => theme.colors.brand.borders};
  border-radius: 4px;
  margin: 24px 0;
  position: relative;

  .card {
    display: flex;
    justify-content: space-between;

    .avatar {
      overflow: hidden;
      max-width: 180px;

      img {
        margin: 0;
      }
    }

    .info {
      .title {
        margin-top: 10px;
        margin-bottom: 42px;
      }

      .detail {
        display: flex;
        justify-content: space-between;
        
        p {
          margin: 6px 15px;
        }
        .label {
          p {
            margin-left: 0;
          }
        }
        .value {
          p {
            text-align: right;
          }
        }
      }
    }
  }

  .action {
    button {
      width: 100%;
    }
  }
`

export default StyledCardCandidato
