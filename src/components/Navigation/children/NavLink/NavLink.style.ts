import styled from "styled-components"

const StyledNavLink = styled.li`
  margin: 0 10px;

  a {
    color: ${props => props.theme.colors.brand.dark};
    font-family: ${props => props.theme.font.primary.family};
    font-size: 12px;
    text-transform: uppercase;
    text-decoration: none;
  }
`

export default StyledNavLink
