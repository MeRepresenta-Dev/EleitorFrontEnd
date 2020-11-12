import React from "react"
import { render } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import CardCandidato from "./CardCandidato"

describe(`<Text />`, () => {
  const { getByTestId } = render(<CardCandidato>Algum texto aqui</CardCandidato>)
  const text = getByTestId(`Text`)

  it(`it should mount`, () => {
    expect(text).toBeInTheDocument()
  })

  it(`'s text matches to 'Algum texto aqui'`, () => {
    const textContent = text.innerHTML
    expect(textContent).toBe(`Algum texto aqui`)
  })
})
