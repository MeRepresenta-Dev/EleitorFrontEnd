import React, { ReactNode } from "react"
import StyledTitle from "./Title.style"

type TitleProps = {
  level?: string
  children: ReactNode
  size?: number
  align?: string
}
const generateLevelTitle = (level, children, size) => {
  switch (level) {
    case `h2`:
      return (
        <h3 className={`title ${level}`} style={{ fontSize: `${size}px` }}>
          {children}
        </h3>
      )
    case `h3`:
      return (
        <h4 className={`title ${level}`} style={{ fontSize: `${size}px` }}>
          {children}
        </h4>
      )
    case `h4`:
      return (
        <h5 className={`title ${level}`} style={{ fontSize: `${size}px` }}>
          {children}
        </h5>
      )
    case `h5`:
      return (
        <h6 className={`title ${level}`} style={{ fontSize: `${size}px` }}>
          {children}
        </h6>
      )
    case `h1`:
    default:
      return (
        <h2 className={`title ${level}`} style={{ fontSize: `${size}px` }}>
          {children}
        </h2>
      )
  }
}

const Title = ({ level = `h1`, children, size = 24, align }: TitleProps) => (
  <StyledTitle align={align} data-testid="Title">
    {generateLevelTitle(level, children, size)}
  </StyledTitle>
)

export default Title
