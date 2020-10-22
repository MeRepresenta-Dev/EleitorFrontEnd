import React from "react"
import { StyledLogo } from "./Logo.style"

const Logo = ({ image, alt }) => {
  return <StyledLogo src={image} alt={alt} />
}

export default Logo
