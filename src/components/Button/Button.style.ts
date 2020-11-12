import styled from "styled-components"

const StyledButton = styled.button<{ color: string; lightText: boolean }>`
  background: ${props =>
    `${props.color ? props.theme.colors?.brand[props.color] : props.theme.colors?.brand.disabled}`};
  border: none;
  border-radius: 2px;
  box-shadow: inset 0px -4px 0px rgba(0, 0, 0, 0.15);
  color: ${props => `${!props.color || props.color === `disabled` ? props.theme.colors?.brand.black : `#FFF`}`};
  cursor: pointer;
  font-family: "Montserrat";
  font-weight: 700;
  height: 45px;
  transition: all 0.3s ease-in-out;
  width: 182px;

  &:hover {
    opacity: 0.85;
  }

  &::disabled {
    pointer-events: none;
    cursor: not-allowed;
  }
`

export default StyledButton
