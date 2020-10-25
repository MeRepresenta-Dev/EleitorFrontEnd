import React from "react"
import { render } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import Title from "./Title"

describe(`<Title />`, () => {
  const { getByTestId } = render(<Title level="h2">Este título deve ser um H3</Title>)
  const title = getByTestId(`Title`)
  it(`should mount`, () => {
    expect(title).toBeInTheDocument()
  })

  it(`should have a 'h3' element`, () => {
    const qtdTitleH3 = title.getElementsByTagName(`h3`).length
    expect(qtdTitleH3).toEqual(1)
  })

  it(`'s text should match with a text`, () => {
    const titleContent = title.getElementsByTagName(`h3`)[0].innerHTML
    expect(titleContent).toEqual(`Este título deve ser um H3`)
  })
})
