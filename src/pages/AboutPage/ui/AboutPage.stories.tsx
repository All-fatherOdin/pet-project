import type {Meta, StoryObj} from "@storybook/react"
import AboutPage from "./AboutPage"
import {ThemeDecorator} from "../../../../config/storybook/decorators/themeDecorator"
import {Theme} from "shared/config/themeConfig/themeConfig"

const meta: Meta<typeof AboutPage> = {
  title: "pages/AboutPage",
  component: AboutPage,
  tags: ["autodocs"]
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
}

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)]
}
