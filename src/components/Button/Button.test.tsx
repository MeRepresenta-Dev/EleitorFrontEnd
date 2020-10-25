import React from "react"
import { render } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import Button from "./Button"

describe(`<Button />`, () => {
  const onClickFn = jest.fn()
  const { getByTestId } = render(<Button onClick={onClickFn}>Clique aqui</Button>)
  const button = getByTestId(`Button`)
  it(`it should mount`, () => {
    expect(button).toBeInTheDocument()
  })
})
