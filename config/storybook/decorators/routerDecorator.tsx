import {Decorator, StoryObj} from "@storybook/react"
import React from "react"
import {BrowserRouter} from "react-router-dom"


export const RouterDecorator: Decorator = (StoryComponent: StoryObj) => {
  return (
    <BrowserRouter>
      <StoryComponent/>
    </BrowserRouter>
  )
}