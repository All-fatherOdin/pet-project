import React from "react"
import {classNames} from "shared/lib/classNames/classNames"
import classes from "./PageError.module.scss"
import {FormattedMessage} from "react-intl"
import {Button} from "shared/Button"

interface PageErrorProps {
  className?: string
}

export function PageError ({className}: PageErrorProps) {
  const reloadPage = () => {
    location.reload()
  }

  return (
    <div className={classNames(classes.PageError, {}, [className])}>
      <h1><FormattedMessage id={"Произошла ошибка"}/></h1>
      <Button
        onClick={reloadPage}
        className={classes.button}
      >
        <FormattedMessage id={"Перезагрузить страницу"}/>
      </Button>
    </div>
  )
}
