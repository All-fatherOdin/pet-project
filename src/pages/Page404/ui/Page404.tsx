import React from "react"
import {classNames} from "helpers/classNames/classNames"
import classes from "./Page404.module.scss"
import {useIntl} from "react-intl"

interface Page404Props {
  className?: string
}

export function Page404 ({className}: Page404Props) {
  const intl = useIntl()
  return (
    <div className={classNames(classes.Page404, {}, [className])}>
      <h1 className={classNames(classes.title, {}, [classes.text])}>
         404
      </h1>
      <h2 className={classNames(classes.subtitle, {}, [classes.text])}>
        {intl.formatMessage({id: "Page not found"})}
      </h2>
    </div>
  )
}
