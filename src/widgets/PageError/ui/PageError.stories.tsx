import type {Meta, StoryObj} from "@storybook/react"
import {PageError} from "./PageError"
import {ThemeDecorator} from "../../../../config/storybook/decorators/themeDecorator"
import {Theme} from "shared/config/themeConfig/themeConfig"

const meta: Meta<typeof PageError> = {
  title: "widgets/PageError",
  component: PageError,
  tags: ["autodocs"]
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
}
export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)]
}
