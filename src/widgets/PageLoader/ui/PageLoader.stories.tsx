import type {Meta, StoryObj} from "@storybook/react"
import {PageLoader} from "./PageLoader"

const meta: Meta<typeof PageLoader> = {
  title: "widgets/PageLoader",
  component: PageLoader,
  tags: ["autodocs"]
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
  }
}
