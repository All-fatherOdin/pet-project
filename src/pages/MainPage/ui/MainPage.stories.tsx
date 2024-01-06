import type {Meta, StoryObj} from "@storybook/react"
import AboutPage from "./AboutPage"

const meta: Meta<typeof AboutPage> = {
  title: "pages/AboutPage",
  component: AboutPage,
  tags: ["autodocs"]
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
  }
}
