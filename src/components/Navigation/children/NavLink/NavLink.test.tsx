import React from "react"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import NavLink from "./NavLink"

describe(`<NavLink />`, () => {
  test(`it should mount`, () => {
    render(<NavLink />)

    const navLink = screen.getByTestId(`NavLink`)

    expect(navLink).toBeInTheDocument()
  })
})
