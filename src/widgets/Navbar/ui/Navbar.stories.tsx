import type {Meta, StoryObj} from "@storybook/react"
import {LocaleSwitcher} from "./LocaleSwitcher"

const meta: Meta<typeof LocaleSwitcher> = {
  title: "widgets/LocaleSwitcher",
  component: LocaleSwitcher,
  tags: ["autodocs"]
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
  }
}
