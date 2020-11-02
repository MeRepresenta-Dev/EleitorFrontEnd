import React from "react"
import StyledThemeButton from "./ThemeButton.style"

const ThemeButton = ({ children, onChoose, name, isActive }) => {
  const colorBtn = isActive ? `primary` : `disabled`
  return (
    <StyledThemeButton
      color={colorBtn}
      onClick={() => onChoose(name)}
      className="ThemeButton"
      data-testid="ThemeButton"
    >
      {children}
    </StyledThemeButton>
  )
}

export default ThemeButton
