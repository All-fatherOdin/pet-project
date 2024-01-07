import type {Meta, StoryObj} from "@storybook/react"
import {Page404} from "./Page404"
import {ThemeDecorator} from "../../../../config/storybook/decorators/themeDecorator"
import {Theme} from "shared/config/themeConfig/themeConfig"

const meta: Meta<typeof Page404> = {
  title: "pages/Page404",
  component: Page404,
  tags: ["autodocs"]
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
}

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)]
}
