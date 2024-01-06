import {Button} from "./Button"
import {render, screen} from "@testing-library/react"

describe("button", () => {
  test("test render", () => {
    render(<Button>TEST</Button>)
    expect(screen.getByText("TEST")).toBeInTheDocument()
  })
  test("clear theme", () => {
    render(<Button>TEST</Button>)
    expect(screen.getByText("TEST")).toHaveClass("Button")
    screen.debug()
  })
})
