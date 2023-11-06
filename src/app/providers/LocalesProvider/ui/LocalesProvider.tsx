import {LocalesContext} from "app/providers/LocalesProvider/lib/LocalesContext"
import {IntlProvider} from "react-intl"
import React, {useState} from "react"
import {DEFAULT_LOCALE, LOCAL_STORAGE_LOCALE_KEY, type Locales} from "shared/config/localeConfig/localeConfig"
import lang from "../../../../../public/lang/lang.json"

export function LocalesProvider ({children}: React.PropsWithChildren) {
  const defaultLocale = (localStorage.getItem(LOCAL_STORAGE_LOCALE_KEY) || DEFAULT_LOCALE) as Locales
  const [locale, _setLocale] = useState<Locales>(defaultLocale)
  const [messages, _setMessages] = useState<Record<string, string>>(lang[locale])
  function setLocale (locale: Locales) {
    _setLocale(locale)
    _setMessages(lang[locale])
    localStorage.setItem(LOCAL_STORAGE_LOCALE_KEY, locale)
  }

  return (
    <LocalesContext.Provider value={{setLocale, locale}}>
      <IntlProvider locale={locale} messages={messages}>
        {children}
      </IntlProvider>
    </LocalesContext.Provider>
  )
}
