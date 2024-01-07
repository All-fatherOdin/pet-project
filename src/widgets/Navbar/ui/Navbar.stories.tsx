import type {Meta, StoryObj} from "@storybook/react"
import {Navbar} from "./Navbar"
import {ThemeDecorator} from "../../../../config/storybook/decorators/themeDecorator"
import {Theme} from "shared/config/themeConfig/themeConfig"

const meta: Meta<typeof Navbar> = {
  title: "widgets/Navbar",
  component: Navbar,
  tags: ["autodocs"]
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
  }
}
export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)]
}
