import type {Meta, StoryObj} from "@storybook/react"
import {Button} from "shared/ui/Button/ui/Button"
import {VariantButton} from "shared/ui/Button/types/ButtonTypes"
import {Color} from "shared/config/themeConfig/themeConfig"

const meta: Meta<typeof Button> = {
  title: "shared/Button/Light",
  component: Button,
  tags: ["autodocs"]
}

export default meta
type Story = StoryObj<typeof meta>

export const Contained: Story = {
  args: {
    children: "Text",
    variant: VariantButton.CONTAINED,
    color: Color.PRIMARY
  }
}

export const Outlined: Story = {
  args: {
    children: "Text",
    variant: VariantButton.OUTLINED,
    color: Color.PRIMARY
  }
}

export const Default: Story = {
  args: {
    children: "Text"
  }
}
