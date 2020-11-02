import styled from "styled-components"

const StyledThemeButton = styled.button<{ color: string }>`
  align-items: center;
  background: ${props =>
    `${props.color ? props.theme.colors?.brand[props.color] : props.theme.colors?.brand.disabled}`};
  border-radius: 2px;
  border: none;
  box-shadow: inset 0px -4px 0px rgba(0, 0, 0, 0.15);
  color: ${props => `${!props.color || props.color === `disabled` ? props.theme.colors?.brand.black : `#FFF`}`};
  cursor: pointer;
  display: flex;
  font-family: "Montserrat";
  font-weight: 700;
  font-size: 10px;
  height: 95px;
  justify-content: center;
  transition: all 0.3s ease-in-out;
  width: 90px;

  &:hover {
    opacity: 0.85;
  }
`

export default StyledThemeButton
