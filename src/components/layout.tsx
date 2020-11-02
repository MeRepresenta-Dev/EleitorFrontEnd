/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { ThemeProvider } from "styled-components"
import GlobalStyles from "../utils/styles/globalStyles"
import Header from "./Header"
import { customTheme } from "../utils/styles/theme"
import "./layout.css"

const navLinks = [
  { link: `http://app.merepresenta.org.br/`, label: `Início` },
  { link: `http://app.merepresenta.org.br/`, label: `Sobre` },
]

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={customTheme}>
      <>
        <GlobalStyles />
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} navList={navLinks} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0 1.0875rem 1.45rem`,
          }}
        >
          {console.log(customTheme)}
          <main>{children}</main>
        </div>
      </>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
