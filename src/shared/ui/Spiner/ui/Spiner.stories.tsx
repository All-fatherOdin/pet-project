import type {Meta, StoryObj} from "@storybook/react"
import {Spiner} from "./Spiner"

const meta: Meta<typeof Spiner> = {
  title: "shared/Spiner",
  component: Spiner,
  tags: ["autodocs"],
  args: {

  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
}
