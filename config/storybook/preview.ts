import type {Preview} from "@storybook/react"
import React from "react"
import "app/styles/index.scss"
import {StyleDecorator} from "../storybook/styleDecorator"

const preview: Preview = {
  parameters: {
    actions: {
      argTypesRegex: "^on[A-Z].*",
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
        classNames: ["app", "normal"]
      }
    },
  },
  decorators: [StyleDecorator]

}

export default preview
