import {StoryObj} from "@storybook/react"
import {Theme} from "shared/config/themeConfig/themeConfig"

export const ThemeDecorator = (theme: Theme) => (StoryComponent: StoryObj) => {
  return (
      <div className={`app ${theme}`}>
        <StoryComponent/>
      </div>
  )
}