import type {Meta, StoryObj} from "@storybook/react"
import {Page404} from "./Page404"

const meta: Meta<typeof Page404> = {
  title: "pages/Page404",
  component: Page404,
  tags: ["autodocs"]
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
  }
}
