import type {Preview} from "@storybook/react"
import "app/styles/index.scss"
import {StyleDecorator} from "./decorators/styleDecorator"
import {reactIntl} from "./reactIntl"
import {Locales} from "shared/config/localeConfig/localeConfig"
import {RouterDecorator} from "./decorators/routerDecorator"
import {ThemeDecorator} from "./decorators/themeDecorator"
import {Theme} from "shared/config/themeConfig/themeConfig"


const preview: Preview = {
  parameters: {
    reactIntl,
    actions: {
      argTypesRegex: "^on[A-Z].*",
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      }
    },
  },
  decorators: [StyleDecorator, RouterDecorator, ThemeDecorator(Theme.LIGHT)],
  globals: {
    locale: reactIntl.defaultLocale,
    locales: {
      ru: Locales.RUSSIAN,
      en: Locales.ENGLISH,
    }
  }
}

export default preview
