import React from "react"
import {classNames} from "shared/lib/classNames/classNames"
import classes from "./LocaleSwitcher.module.scss"
import {Button} from "shared/Button"
import {Locales, useLocales} from "app/providers/LocalesProvider"
import ru from "shared/assets/icons/ru-RU.png"
import en from "shared/assets/icons/en-US.png"

interface LocaleSwitcherProps {
  className?: string
}

export function LocaleSwitcher ({className}: LocaleSwitcherProps) {
  const {locale, setLocale} = useLocales()
  const toggleLocale = () => {
    setLocale && setLocale(locale === Locales.ENGLISH ? Locales.RUSSIAN : Locales.ENGLISH)
  }

  return (
    <Button
      onClick={toggleLocale}
            className={classNames(classes.LocaleSwitcher, {}, [className])}>
        <img src={locale === Locales.ENGLISH ? en : ru} className={classes.icon}/>
    </Button>
  )
}
