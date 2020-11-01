import React from "react"
import Logo from "../Logo"
import logo from "../../images/logo.svg"
import Navigation from "../Navigation"
import StyledHeader from "./Header.style"

const Header = ({ siteTitle, navList }) => (
  <StyledHeader className="Header" data-testid="Header">
    <h1>
      <Logo image={logo} alt={siteTitle} />
    </h1>
    <Navigation navList={navList} />
  </StyledHeader>
)

export default Header
