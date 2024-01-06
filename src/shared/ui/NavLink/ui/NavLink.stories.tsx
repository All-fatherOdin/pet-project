import type {Meta, StoryObj} from "@storybook/react"
import {NavLink} from "./NavLink"
import classes from "./NavLink.module.scss"

const meta: Meta<typeof NavLink> = {
  title: "shared/NavLink",
  component: NavLink,
  tags: ["autodocs"],
  args: {
    className: classes.NavLink,
    children: "TEXT"
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
}
export const Active: Story = {
  args: {
    className: classes.active
  }
}
