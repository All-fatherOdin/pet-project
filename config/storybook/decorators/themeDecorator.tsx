import {StoryFn} from "@storybook/react"
import {Theme} from "shared/config/themeConfig/themeConfig"

export const ThemeDecorator = (theme: Theme) => (StoryComponent: StoryFn) => {
  return (
      <div className={`app ${theme}`}>
        <StoryComponent/>
      </div>
  )
}