import styled from "styled-components"

const StyledText = styled.p<{ size: number; color: string; weight: number; family: string }>`
  color: ${props => `${props.color ? props.theme.colors.brand[props.color] : props.theme.colors?.brand.black}`};
  font-family: ${props => `${props.font || props.theme.font?.primary.family}`};
  font-size: ${props => `${props.size || props.theme.font?.body}px`};
  font-weight: ${props => `${props.weight || props.theme.font?.primary.weight}`};
  line-height: 120%;
`

export default StyledText
