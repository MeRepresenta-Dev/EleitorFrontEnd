import React from "react"
import { Link } from "gatsby"
import StyledNavLink from "./NavLink.style"

const NavLink = ({ label, link, internal = false }) => (
  <StyledNavLink className="NavLink" data-testid="NavLink">
    {internal ? <Link to={link}>{label}</Link> : <a href={link}>{label}</a>}
  </StyledNavLink>
)

export default NavLink
