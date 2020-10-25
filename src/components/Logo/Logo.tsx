import React from "react"
import { StyledLogo } from "./Logo.style"

const Logo = ({ image, alt }) => {
  return <StyledLogo data-testid="Logo" src={image} alt={alt} />
}

export default Logo
