import type {Preview} from "@storybook/react"
import "app/styles/index.scss"
import {StyleDecorator} from "../storybook/styleDecorator"
import {reactIntl} from './reactIntl';
import {Locales} from "shared/config/localeConfig/localeConfig"

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
  decorators: [StyleDecorator],
  globals: {
    locale: reactIntl.defaultLocale,
    locales: {
      ru: Locales.RUSSIAN,
      en: Locales.ENGLISH,
    }
  }
}

export default preview
