import styled from "styled-components"

const StyledTitle = styled.div<{ align: string }>`
  > * {
    line-height: 120%;
    text-align: ${props => props.align || 'left'};
    margin: 10px 0;
  }
`
export default StyledTitle
