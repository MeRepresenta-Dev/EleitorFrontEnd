import React, { ReactNode } from "react"
import StyledText from "./Text.style"

type TextProps = {
  children: ReactNode
}

const ComponentText = ({ children }: TextProps) => (
  <StyledText className="Text" data-testid="Text">
    {children}
  </StyledText>
)

export default ComponentText
