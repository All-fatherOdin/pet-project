import {fireEvent, render, screen} from "@testing-library/react"
import {Sidebar} from "widgets/Sidebar/ui/Sidebar/Sidebar"
import React from "react"

describe("button", () => {
  test("test toggle sidebar", () => {
    render(<Sidebar/>)
    expect(screen.getByTestId("sidebar")).toBeInTheDocument()
    const toggleBtn = screen.getByTestId("sidebar-toggle")
    expect(screen.getByTestId("sidebar")).toHaveClass("collapsed")
    fireEvent.click(toggleBtn)
    expect(screen.getByTestId("sidebar")).not.toHaveClass("collapsed")
  })
})
