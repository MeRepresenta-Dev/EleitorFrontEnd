import React, { ReactNode } from "react"
import StyledButton from "./Button.style"

type ButtonProps = {
  children: ReactNode
  disabled?: boolean
  color?: string
  onClick?: () => void
}
const Button = ({ children, disabled, color, onClick }: ButtonProps) => (
  <StyledButton onClick={onClick} color={color} disabled={disabled} className="Button" data-testid="Button">
    {children}
  </StyledButton>
)

export default Button
