import React from "react"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import ThemeButton from "./ThemeButton"

describe(`<ThemeButton />`, () => {
  test(`it should mount`, () => {
    render(<ThemeButton />)

    const themeButton = screen.getByTestId(`ThemeButton`)

    expect(themeButton).toBeInTheDocument()
  })
})
