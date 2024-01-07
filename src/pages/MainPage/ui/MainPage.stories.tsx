import type {Meta, StoryObj} from "@storybook/react"
import MainPage from "./MainPage"
import {ThemeDecorator} from "../../../../config/storybook/decorators/themeDecorator"
import {Theme} from "shared/config/themeConfig/themeConfig"

const meta: Meta<typeof MainPage> = {
  title: "pages/MainPage",
  component: MainPage,
  tags: ["autodocs"]
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
}

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)]
}
