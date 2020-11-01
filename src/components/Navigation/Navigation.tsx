import React from "react"
import NavLink from "./children/NavLink"
import StyledNavigation from "./Navigation.style"

const Navigation = ({ navList }) => (
  <StyledNavigation className="Navigation" data-testid="Navigation">
    <ul>
      {navList.map(navLink => {
        const isInternal = !navLink.link.startsWith(`http`)
        return <NavLink label={navLink.label} link={navLink.link} internal={isInternal} />
      })}
    </ul>
  </StyledNavigation>
)

export default Navigation
