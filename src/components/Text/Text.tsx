import React, { ReactNode } from "react"
import StyledText from "./Text.style"

type TextProps = {
  children: ReactNode
  size: number
  color: string
  weight: number
  family: string
  align: string
}

const ComponentText = ({ children, size, color, weight, family, align }: TextProps) => (
  <StyledText align={align} size={size} color={color} weight={weight} family={family} className="Text" data-testid="Text">
    {children}
  </StyledText>
)

export default ComponentText
